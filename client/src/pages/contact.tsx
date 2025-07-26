import Header from "@/components/header";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
    </div>
  );
}