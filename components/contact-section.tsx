import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-primary-light/30 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
            Get In <span className="text-primary blue-highlight">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <Card className="border-none shadow-md contact-card transition-all duration-300 animate-slide-up cursor-pointer">
              <CardContent className="p-4 md:p-6 flex items-center space-x-4 bg-gradient-to-br from-white to-primary-light/20 rounded-lg">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-primary">Email</h3>
                  <p className="text-muted-foreground text-xs md:text-sm break-all">rhythmsood1@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-md contact-card transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-4 md:p-6 flex items-center space-x-4 bg-gradient-to-br from-white to-primary-light/20 rounded-lg">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-primary">Phone</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">+61 450 294 324</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-md contact-card transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-4 md:p-6 flex items-center space-x-4 bg-gradient-to-br from-white to-primary-light/20 rounded-lg">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-primary">Location</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Sydney, Australia</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Card className="border-none shadow-lg blue-glow">
              <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-white to-primary-light/10 rounded-lg">
                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs md:text-sm font-medium text-primary">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="text-sm border-primary/20 focus:border-primary focus:ring-primary cursor-text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs md:text-sm font-medium text-primary">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="text-sm border-primary/20 focus:border-primary focus:ring-primary cursor-text"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs md:text-sm font-medium text-primary">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      required
                      className="text-sm border-primary/20 focus:border-primary focus:ring-primary cursor-text"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs md:text-sm font-medium text-primary">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      required
                      className="text-sm resize-y min-h-[100px] border-primary/20 focus:border-primary focus:ring-primary cursor-text"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 cursor-pointer"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
