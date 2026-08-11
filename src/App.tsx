import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { AllProjectsPage } from './pages/AllProjectsPage/AllProjectsPage';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
