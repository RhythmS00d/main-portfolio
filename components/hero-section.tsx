import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center py-12 overflow-hidden w-full bg-gradient-to-b from-primary-light/30 to-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-light/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 text-center lg:text-left animate-fade-in">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-light text-primary rounded-full mb-2">
              Software Engineer
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
              Hi, I'm{" "}
              <span className="text-primary blue-highlight">Rhythm Sood</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
              I create creative, functional websites and applications that help
              businesses grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-300 cursor-pointer"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-primary text-primary hover:bg-primary-light/50 transition-all duration-300 cursor-pointer"
              >
                <Link href="/resume.pdf" target="_blank" download>Download Resume</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mt-6 lg:mt-0 animate-fade-in blue-glow cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-lg"></div>
            <Image
              src="/profile_pic.png"
              alt="Rhythm Sood"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce text-primary hover:bg-primary-light/50 cursor-pointer"
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
