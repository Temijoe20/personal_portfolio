import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Interior decoration Landing Page",
        description: "Bringing your dream to life with one-one design, hand picked products tailored to your style, space and budget.",
        image: "/projects/Interior-design_img.png",
        tags: ["React", "TailwindCSS", "Framer-motion"],
        demoUrl: "https://decoration-kappa.vercel.app/",
        githubUrl: "https://github.com/Temijoe20/decoration",
    },
    {
        id: 2,
        title: "Cryptocurrency Website Design",
        description: 
            "Trusted by 10M+ wallets. $30B+ in crypto transactions. Fast, secure, and easy to use.",
        image: "/projects/Crypto_img.png",
        tags: ["React", "TailwindCSS", "axios"],
        demoUrl: "https://landing-page-design-blond.vercel.app/",
        githubUrl: "https://github.com/Temijoe20/landing-page-design",
    },
    {
        id: 3,
        title: "Journey Worker Platform",
        description: 
        "Journeyworker is an on-demand platform that connects you with trusted building repair artisans nearby — fast, secure, and convenient.",
        image: "/projects/Journey-man_img.png",
        tags: ["React", "TailwindCSS", "HTML"],
        demoUrl: "https://journeyworker.vercel.app/",
        githubUrl: "https://github.com/Temijoe20/journeyworker",
    },
    {
        id: 4,
        title: "Fruit Selling Platform",
        description: 
        "Full-featured website for ordering fresh healthy fruits, healthy and yummy food for fresh morining breakfast. ",
        image: "/projects/Fruit-store_img.png",
        tags: ["React", "TailwindCSS", "Framer-motion"],
        demoUrl: "https://fruits-five-self.vercel.app/",
        githubUrl: "https://github.com/Temijoe20/fruits",
    },
    {
        id: 5,
        title: "E-learning tutorial Platform",
        description: 
        "Full-featured e-learning website for finding your perfect tutor for 1-on-1 lessons that is completely free and private .",
        image: "/projects/tutor-design_img.png",
        tags: ["React", "TailwindCSS", "Framer-motion"],
        demoUrl: "https://learn-site-seven.vercel.app/",
        githubUrl: "https://github.com/Temijoe20/learn-Site",
    },
    {
        id: 6,
        title: "Movie-app Platform",
        description: 
        "Getting a the latest blockbuster movies done by well-known and professional actors for an exclusive and all time entertainment.",
        image: "/projects/movie-design_img.png",
        tags: ["React", "API", "TailwindCSS"],
        demoUrl: "https://temia-tutor.vercel.app/",
        githubUrl: "https://github.com/Temijoe20/Temia-tutor",
    },
]
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary">Project</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-semibold">
                        Here are some of my recent projects. Each project was carefully 
                        crafted with attention to detail, performance, and user experience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                            <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary bg-secondary text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>
                                
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20}/>
                                            </a>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                         href="https://github.com/Temijoe20"
                        >
                            Check My Github <ArrowRight size={16}/>
                        </a>
                    </div>
            </div>

        </section>
    );
};
