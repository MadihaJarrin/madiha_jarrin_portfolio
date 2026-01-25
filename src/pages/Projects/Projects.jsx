import ProjectCard from "./ProjectCard";
import thesisPdf from "../../assets/project/pdf/499B-Final-Report.pdf"


// Example project data
const projectsData = [
   {
    title: "Context segmentation and Retrieval-Augmented Generation in generative AI (Thesis)",
    // description:
    //   "Applied context segmentation and RAG (Retrieval-Augmented Generation) in generative AI to create visuals that improve video comprehension.",
    features: [
      "Speech-to-Visual Storytelling system",
      "Automatically generates contextual background images",
      "Reduces manual effort for video creators",
    ],
    tools: ["RAG", "Explainable AI", "LLM", "OpenAI API", "FAISS", "Python"],
    // image: "https://via.placeholder.com/600x400",
    pdf: thesisPdf,
    github: "https://github.com/username/ai-project",
    live: "",
  },
    {
    title: "Digital Health Services",
     description:
      "This project allows users to take digital services and The platform is fully SPA with smooth navigation using React-Router without page reloads.",
    features: [
      "Booking services from doctors by seeing their available schedules",
      "Users can view their service details after Google sign-in",
      "Smooth SPA navigation using Navbar",
    ],
    tools: ["JavaScript","firebase", "React Router", "Bootstrap"],
    // image: "https://via.placeholder.com/600x400",
    pdf: "/reports/speech-to-visual.pdf",
    github: "https://github.com/username/mern-ecommerce",
    live: "https://ecommerce.vercel.app",
  },
    {
    title: "Weakly Supervised Deep Segmentation of Immunofluorescence Modalities Via Translation and Mask Fusion",
    // image: "/projects/groovestyle.png", // add project screenshot / Canva design
    // description:
    //   "GrooveStyle is an innovative E-commerce website aiming to revolutionize online shopping. Our platform improves the shopping experience by offering advanced features to cater to modern consumer needs. Join us in creating a modern & personalized journey.",
    features: [
  "Translate IHC images to multiple fluorescence modalities",
  "Accurate cell-level nuclei segmentation",
  "Weakly supervised learning with minimal annotations",
  "Explainable predictions with Grad-CAM & attention maps",
  "Comparison of advanced deep learning architectures"
],
tools: ["UNet", "UNet++", "ResNet", "SwinUNet", "AttentionUNet", "DuckNet", "CBAM", "SE", "Dice/IoU/AJI/MSE Losses", "Adam Optimizer"],
    // live: "https://groovestyle-live.vercel.app/", 
    github: "https://github.com/MadihaJarrin/groovestyle", 
    github_server: "https://github.com/MadihaJarrin/groovestyle-server", 
  },
  {
    title: "E-commerce Platform | GrooveStyle",
    // image: "/projects/groovestyle.png", // add project screenshot / Canva design
    description:
      "GrooveStyle is an innovative E-commerce website aiming to revolutionize online shopping. Our platform improves the shopping experience by offering advanced features to cater to modern consumer needs. Join us in creating a modern & personalized journey.",
    features: [
      "User login & registration with Google & Email",
      "Purchase products with cart system",
      "User can write product reviews from dashboard",
      "Admin dashboard to manage all products, users and orders",
    ],
    tools: [
      "React Js", "Node js",  "MongoDB" , "Express", 
      "Google OAuth", "MongoDB", "TailwindCSS", "DaisyUI",
    ],
    // live: "https://groovestyle-live.vercel.app/", 
    github: "https://github.com/MadihaJarrin/groovestyle", 
    github_server: "https://github.com/MadihaJarrin/groovestyle-server", 
  },

];


const Projects = () => {
  return (
       <section id="projects" className="w-full bg-gray-900 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          Projects
        </h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>


        <div className="flex flex-col gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}

        </div>
      </div>

    </section>
   

  )
}

export default Projects
