import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, GithubIcon } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Wordle Clone",
      description:
        "Engineered a Wordle clone using React and MobX, achieving high-speed rendering and an engaging user interface.",
      image: "/wordle.png",
      tags: ["React", "Node.js", "MobX"],
      liveLink: "https://wordle-clone-peach-zeta.vercel.app/",
      githubLink: "https://github.com/RhythmS00d/wordle-clone",
    },
    {
      title: " Terminal Portfolio",
      description:
        "A terminal based portfolio, where a user can input commands to get information.",
      image: "/terminal.png",
      tags: ["Next.js", "Tailwind CSS", "Javascript", "Redux"],
      liveLink: "https://terminal-portfolio-seven-xi.vercel.app",
      githubLink: "https://github.com/RhythmS00d/terminalPortfolio",
    },
    {
      title: "Task Manager",
      description:
        "An application where user can manage tasks, find new quotes, news and check weather.",
      image: "/tm.png",
      tags: ["React", "APIs", "TailwindCSS", "TypeScript"],
      liveLink: "https://task-manager-eight-fawn.vercel.app",
      githubLink: "https://github.com/RhythmS00d/task-manager",
    },
    {
      title: "2D Dino Game",
      description:
        "An interactive Dino Game clone with interesting sounds and game physics.",
      image: "/dino.png",
      tags: ["JavaScript", "Animation", "Canvas"],
      liveLink: "https://kreativstorm-dino-game.vercel.app",
      githubLink: "https://github.com/RhythmS00d/kreativstorm-dino-game",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-primary-light/30 w-full"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
            My <span className="text-primary blue-highlight">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg transition-all duration-300 project-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={project.liveLink} target="_blank" className="block">
                <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden group cursor-pointer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
              <CardContent className="p-4 sm:p-6 bg-white">
                <Link href={project.liveLink} target="_blank">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary cursor-pointer hover:underline">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary-light text-primary text-xs md:text-sm rounded-full cursor-pointer hover:bg-primary-light/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 flex gap-3 md:gap-4 flex-wrap bg-white">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-xs md:text-sm border-primary text-primary hover:bg-primary-light cursor-pointer"
                  >
                    <GithubIcon className="h-3 w-3 md:h-4 md:w-4" />
                    Code
                  </Button>
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="inline-block"
                >
                  <Button
                    size="sm"
                    className="flex items-center gap-2 text-xs md:text-sm bg-primary hover:bg-primary/90 cursor-pointer"
                  >
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  );
}
