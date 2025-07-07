import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";

interface SOPFormData {
  fullName: string;
  email: string;
  contactNumber: string;
  applyingCountry: string;
  universityName: string;
  programName: string;
  academicBackground: string;
  workExperience: string;
  careerGoals: string;
  whyUniversity: string;
  whyCountry: string;
  whyCourse: string;
  futurePlans: string;
  achievements: string;
  extracurricular: string;
  personalInterests: string;
}

// Initialize AI clients
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
}) : null;

const gemini = process.env.GEMINI_API_KEY ? new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
}) : null;

export async function generateSOPWithAI(formData: SOPFormData, aiProvider: 'openai' | 'gemini' = 'gemini'): Promise<string> {
  const prompt = createSOPPrompt(formData);
  
  try {
    if (aiProvider === 'openai' && openai) {
      return await generateWithOpenAI(prompt);
    } else if (aiProvider === 'gemini' && gemini) {
      return await generateWithGemini(prompt);
    } else {
      throw new Error(`${aiProvider} API is not configured. Please provide the API key.`);
    }
  } catch (error) {
    console.error(`Error generating SOP with ${aiProvider}:`, error);
    throw new Error(`Failed to generate SOP using ${aiProvider}. Please try again.`);
  }
}

function createSOPPrompt(formData: SOPFormData): string {
  return `Create a professional Statement of Purpose (SOP) for university admission based on the following information:

Personal Information:
- Name: ${formData.fullName}
- Applying to: ${formData.programName} at ${formData.universityName}
- Target Country: ${formData.applyingCountry}

Academic Background:
${formData.academicBackground}

Work/Experience:
${formData.workExperience}

Career Goals:
${formData.careerGoals}

Motivations:
- Why this University: ${formData.whyUniversity}
- Why this Country: ${formData.whyCountry}
- Why this Course: ${formData.whyCourse}

Future Plans:
${formData.futurePlans}

Achievements:
${formData.achievements}

Extracurricular Activities:
${formData.extracurricular}

Personal Interests:
${formData.personalInterests}

Please create a compelling, well-structured Statement of Purpose that:
1. Has a strong opening that captures attention
2. Clearly connects the applicant's background to their chosen program
3. Demonstrates genuine motivation and research about the university/program
4. Shows clear career trajectory and goals
5. Maintains a professional yet personal tone
6. Is approximately 800-1000 words
7. Follows proper SOP structure with smooth transitions

Format the response as a complete SOP document with proper paragraphs.`;
}

async function generateWithOpenAI(prompt: string): Promise<string> {
  if (!openai) throw new Error("OpenAI not configured");
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    messages: [
      {
        role: "system",
        content: "You are an expert academic writer specializing in Statement of Purpose documents for university admissions. Create compelling, personalized SOPs that help students get admitted to their target universities."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    max_tokens: 2000,
    temperature: 0.7
  });

  return response.choices[0].message.content || "Failed to generate SOP";
}

async function generateWithGemini(prompt: string): Promise<string> {
  if (!gemini) throw new Error("Gemini not configured");
  
  const response = await gemini.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `You are an expert academic writer specializing in Statement of Purpose documents for university admissions. Create compelling, personalized SOPs that help students get admitted to their target universities.\n\n${prompt}`
          }
        ]
      }
    ]
  });

  return response.text || "Failed to generate SOP";
}

export async function generateSOPDocument(sopText: string, studentName: string): Promise<Buffer> {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Statement of Purpose",
                bold: true,
                size: 32,
              }),
            ],
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 400,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: studentName,
                bold: true,
                size: 24,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 600,
            },
          }),
          ...sopText.split('\n\n').map(paragraph => 
            new Paragraph({
              children: [
                new TextRun({
                  text: paragraph,
                  size: 22,
                }),
              ],
              spacing: {
                after: 200,
              },
            })
          ),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}