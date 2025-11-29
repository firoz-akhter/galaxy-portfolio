import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Student Registration Form",
    description:
      "Responsive student registration form with validation and clean UI for collecting and managing student details.",
    image: "/projects/project-ss/student-registration-form.gif",
    tags: ["React", "JavaScript", "CSS", "Forms"],
    githubUrl: "https://github.com/firoz-akhter/Student-Registration-Form",
    demoUrl: "https://student-registration-form-sooty.vercel.app/",
  },
  {
    id: 2,
    title: "ShoppyGlobe E-commerce App",
    description:
      "Full-featured e-commerce application with product listings, search, cart functionality, and modern UI.",
    image: "/projects/project-ss/e-commerce.gif",
    tags: ["React", "Redux", "JavaScript", "CSS"],
    githubUrl: "https://github.com/firoz-akhter/ShoppyGlobe",
    demoUrl: "https://shoppy-globe-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Kanban Drag & Drop Board",
    description:
      "Interactive Kanban board with drag-and-drop functionality for managing tasks and visualizing workflows.",
    image: "/projects/project-ss/kanban-dnd.gif",
    tags: ["React", "Drag and Drop", "JavaScript", "CSS"],
    githubUrl: "https://github.com/firoz-akhter/kanban-dnd",
    demoUrl: "https://kanban-dnd-xi.vercel.app/",
  },
  {
    id: 4,
    title: "React Form Builder",
    description:
      "Dynamic form builder that allows users to create, customize, and preview forms with multiple input types.",
    image: "/projects/project-ss/form-builder.gif",
    tags: ["React", "TypeScript", "Tailwind CSS", "Forms"],
    githubUrl: "https://github.com/firoz-akhter/react-form-builder-frontend",
    demoUrl: "https://react-form-builder-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Food Blog Website",
    description:
      "Modern food blog website showcasing recipes and food content with a clean and responsive layout.",
    image: "/projects/project-ss/food-blog.gif",
    tags: ["React", "JavaScript", "CSS", "Vite"],
    githubUrl: "https://github.com/firoz-akhter/food-blog",
    demoUrl: "https://food-blog-weld.vercel.app/",
  },
  {
    id: 6,
    title: "Sorting Algorithm Visualizer",
    description:
      "Interactive sorting algorithm visualizer that demonstrates how different sorting algorithms work using real-time animations.",
    image: "/projects/project-ss/sorting-visualizer.gif",
    tags: ["React", "JavaScript", "Algorithms", "Visualization"],
    githubUrl: "https://github.com/firoz-akhter/sorting-visualizer",
    demoUrl: "https://sorting-visualizer-sooty.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of responsive and interactive web applications, including
          tools, dashboards, and landing pages—some built as part of coding
          challenges. Each project reflects a focus on clean design and user
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/firoz-akhter"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
