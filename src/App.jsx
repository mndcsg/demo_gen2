import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./generated/home/src/pages/Home.jsx";
import EquipoDirectivoPage from "./generated/equipo-directivo/src/pages/EquipoDirectivoPage.jsx";
import { EducacionFinancieraPage } from "./generated/educacion-financiera/src/pages/EducacionFinancieraPage.jsx";
import { FaqPage } from "./generated/preguntas-frecuentes/src/pages/FaqPage.jsx";
import { PrestamosEmpresarialesPage } from "./generated/prestamos-empresariales/src/pages/PrestamosEmpresarialesPage.jsx";
import { PrestamosPersonalesPage } from "./generated/prestamos-personales/src/pages/PrestamosPersonalesPage.jsx";
import { SobreNosotrosPage } from "./generated/sobre-nosotros/src/pages/SobreNosotrosPage.jsx";
import ResponsabilidadSocialPage from "./generated/responsabilidad-social/src/App.jsx";
import TecnologiaInnovadoraPage from "./pages/TecnologiaInnovadoraPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/educacion-financiera" element={<EducacionFinancieraPage />} />
      <Route path="/equipo-directivo" element={<EquipoDirectivoPage />} />
      <Route path="/preguntas-frecuentes" element={<FaqPage />} />
      <Route path="/prestamos-empresariales" element={<PrestamosEmpresarialesPage />} />
      <Route path="/prestamos-personales" element={<PrestamosPersonalesPage />} />
      <Route path="/responsabilidad-social" element={<ResponsabilidadSocialPage />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="/tecnologia-innovadora" element={<TecnologiaInnovadoraPage />} />
    </Routes>
  );
}

export default App;