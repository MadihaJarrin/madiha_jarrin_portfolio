import SkillCard from '../../Components/SkillCard/SkillCard'

const skills = [
  { title: "Programming Language", items: ["Python", "JavaScript", "C++", "HTML", "CSS"] },
  { title: "Frameworks & Libraries", items: ["React.js", "Node.js", "Bootstrap", "Tailwind", "Daisy UI"] },
  { title: "Databases", items: ["MongoDB", "SQL", "Firebase"] },
  { title: "Simulation", items: ["AutoCAD", "Logisim"] },
  { title: "Tools", items: ["Git & GitHub", "MS Office", "VS Code", "Code::Blocks", "Figma"] },
  { title: "Hard Skills", items: ["MS Office", "Graphics Design (Illustrator & Canva-Pro)", "Video Editing (Capcut Pro, Filmora)"] },
  { title: "Soft Skills", items: ["Leadership", "Team-work", "Time management", "Communication", "Collaboration", "Critical thinking"] },
  { title: "AI Companions", items: ["Chatgpt", "Adobe podcast", "Eleven Labs", "Notion AI", "Tome AI", "Jasper.ai"] },

]

const Skills = () => {
  return (
     <section id="skills" className="w-full bg-gray-900 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          My Skills
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} title={skill.title} items={skill.items} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
