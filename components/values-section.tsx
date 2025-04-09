import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Lightbulb, Users } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Passion",
      description:
        "I approach every project with enthusiasm and dedication, putting my heart into creating exceptional work.",
    },
    {
      icon: <Target className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Precision",
      description:
        "I pay close attention to detail, ensuring that every aspect of a project meets the highest standards.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Innovation",
      description: "I constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Collaboration",
      description: "I believe in the power of teamwork and open communication to achieve the best possible outcomes.",
    },
  ]

  return (
    <section id="values" className="py-16 md:py-20 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
            My <span className="text-primary blue-highlight">Values</span> &{" "}
            <span className="text-primary blue-highlight">Goals</span>
          </h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">What drives me and where I'm headed</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md value-card transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center bg-gradient-to-br from-white to-primary-light/20 rounded-lg">
                <div className="mb-3 md:mb-4 p-3 bg-primary-light rounded-full">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 md:mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Card className="border-none shadow-lg blue-glow cursor-pointer">
            <CardContent className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-primary-light/10 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-primary">My Goals</h3>
              <div className="space-y-4 md:space-y-6">
                <p className="text-muted-foreground text-sm md:text-base">
                  My primary goal is to continue growing as a developer by staying current with emerging technologies
                  and best practices. I aim to create work that not only meets technical requirements but also delivers
                  exceptional user experiences.
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  In the long term, I aspire to contribute to projects that make a positive impact on people's lives and
                  to mentor other developers who are just starting their journey in the field.
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  I'm particularly interested in exploring the intersection of software development and emerging technologies
                  like AI and machine learning to create innovative solutions for complex problems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  )
}
