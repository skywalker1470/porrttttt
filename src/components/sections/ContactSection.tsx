import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Loader2, CheckCircle, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Reveal from "@/components/Reveal";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dvnsyaswanth@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get In Touch</h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                I'm currently looking for Master's thesis and internship opportunities in computer
                vision and deep learning. Whether you have a question or just want to say hi, feel
                free to reach out!
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <Reveal delay={60} className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:dvnsyaswanth@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-none bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        dvnsyaswanth@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+46793430467"
                    className="flex items-center gap-4 p-4 rounded-none bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        +46 793430467
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-none bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Karlskrona, Sweden</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/yaswanth-deevi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="https://github.com/skywalker1470"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={120} className="p-6 md:p-8 rounded-none bg-card border border-border">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 rounded-none bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <Button
                    variant="heroOutline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
