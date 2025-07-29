import Image from "next/image";
import MainPane from "./components/MainPane";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <MainPane />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
