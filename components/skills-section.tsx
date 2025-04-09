import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", image: "/html.png" },
    { name: "CSS3", image: "/css.png" },
    { name: "JavaScript", image: "/js.png" },
    { name: "Java", image: "/java.png" },
    { name: "Python", image: "/python.png" },
    { name: "React", image: "/react.png" },
    { name: "Database Management", image: "/dbs.png" },
    { name: "AI & related", image: "/ai.png" },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
            My <span className="text-primary blue-highlight">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 skill-card cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center bg-gradient-to-br from-white to-primary-light/20 rounded-lg">
                <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4">
                  <Image src={skill.image || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
                </div>
                <h3 className="font-medium text-sm md:text-base text-center">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  )
}
