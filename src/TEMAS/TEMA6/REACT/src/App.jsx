import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [showSkills, setShowSkills] = useState(false);

    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"];

    return (
        <div>
            <Header />

            <Profile
                name="Alex"
                age={28}
                profession="Desarrolladora web"
            />

            <h3>Habilidades principales</h3>
            <ul>
                <Skill text="JavaScript" />
                <Skill text="React" />
                <Skill text="Angular" />
            </ul>

            <button onClick={() => setShowSkills(!showSkills)}>
                {showSkills ? "Ocultar habilidades" : "Mostrar habilidades"}
            </button>

            {showSkills && <Skills skills={skills} />}

            <Contact
                email="aledomjua@alu.edu.gva.es"
                phone="123456789"
            />

            <Footer />
        </div>
    );
}

export default App;
