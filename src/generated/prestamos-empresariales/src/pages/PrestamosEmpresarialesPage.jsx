import { Header } from '../../../../components/Header.jsx';
import { HeroSection } from '../components/HeroSection.jsx';
import { SolutionsSection } from '../components/SolutionsSection.jsx';
import { SectorsSection } from '../components/SectorsSection.jsx';
import { ProcessSection } from '../components/ProcessSection.jsx';
import { CTASection } from '../components/CTASection.jsx';
import { Footer } from '../../../../components/Footer.jsx';

export const PrestamosEmpresarialesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <SectorsSection />
        <ProcessSection />
       
      </main>
      <Footer />
    </div>
  );
};