import { H1, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Github from "@/assets/github.svg";
import Gmail from "@/assets/gmail.svg";
import Linkedin from "@/assets/linkedin.svg";

const redirect = (url: string) => {
  window.location.href = url;
};

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-20">
        <section id="home" className="text-center space-y-4">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Your Image"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
          <H1>Jakob Tøssebro</H1>
          <P>
            Computer Science Student | Deep Learning Enthusiast | Web Developer
          </P>
        </section>

        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <P>
            My name is Jakob Tøssebro and I am a Computer Science student at
            NTNU in Trondheim.
          </P>
        </section>

        <section id="projects" className="space-y-4">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardContent className="p-4 space-y-2">
                  <img
                    src={`/placeholder.svg?height=200&width=300&text=Project+${project}`}
                    alt={`Project ${project}`}
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                  <h3 className="text-xl font-semibold">Project {project}</h3>
                  <P>
                    A brief description of project {project} and the
                    technologies used.
                  </P>
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-4">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <P>
            Feel free to reach out to me through any of the following channels:
          </P>
          <div className="flex space-x-4">
            <Button
              onClick={() => redirect("mailto:jakob.tossebro@gmail.com")}
              variant="outline"
              size="icon"
            >
              <img src={Gmail} alt="Email" className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Button
              onClick={() => redirect("https://www.github.com/jatobro/")}
              variant="outline"
              size="icon"
            >
              <img src={Github} alt="Linkedin" className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              onClick={() =>
                redirect("https://www.linkedin.com/in/jakob-toessebro/")
              }
              variant="outline"
              size="icon"
            >
              <img src={Linkedin} alt="Linkedin" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jakob Tøssebro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
