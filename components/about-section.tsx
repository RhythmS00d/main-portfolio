import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 w-full blue-gradient-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
            About <span className="text-primary blue-highlight">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Get to know me better
          </p>
        </div>

        <Card className="border-none shadow-lg animate-slide-up blue-glow">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                  My Story
                </h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base text-justify">
                  I am a software engineer with over six months of experience at
                  IBM, specialising in web development, object-oriented
                  programming, and AI-powered cloud technologies. I have worked
                  with industry-grade technologies, contributing to innovative
                  solutions that enhance efficiency, scalability, and user
                  experience.
                </p>
                <p className="text-muted-foreground text-sm md:text-base text-justify">
                  One of my greatest strengths is my ability to communicate
                  effectively with fellow team members and build strong,
                  meaningful connections. I have a natural talent for crafting
                  strategic technology solutions that drive innovation and
                  efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 mt-6 md:mt-0 text-primary">
                  Personal Info
                </h3>
                <ul className="space-y-3">
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold sm:w-24 text-sm md:text-base">
                      Name:
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      Rhythm Sood
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold sm:w-24 text-sm md:text-base">
                      Email:
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base break-all">
                      rhythmsood1@gmail.com
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold sm:w-24 text-sm md:text-base">
                      Phone:
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      +61 450 294 324
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold sm:w-24 text-sm md:text-base">
                      Location:
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      Sydney, Australia
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold sm:w-24 text-sm md:text-base">
                      Experience:
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      1 Year
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold sm:w-24 text-sm md:text-base">
                      Freelance:
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  );
}
