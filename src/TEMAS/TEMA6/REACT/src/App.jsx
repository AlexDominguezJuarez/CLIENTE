import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from "./components/Skill.jsx";

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"];

  return (
      <div>
          <button onClick={()=>setShowSkills(!showSkills)}>
              {showSkills ? "Ocultar habilidades" : "Mostrar habilidades"}
          </button>

          {showSkills && <Skills skills={skills} />}

      </div>
  );
}

export default App
