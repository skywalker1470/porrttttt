import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Github, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

type Status = "loading" | "error" | "done";

const resolveAssetUrl = (src: string | undefined, baseUrl: string | undefined): string | undefined => {
  if (!src || !baseUrl) return src;
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return src;
  try {
    return new URL(src, baseUrl).toString();
  } catch {
    return src;
  }
};

const ProjectReadme = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const assetBaseUrl = project?.readmeUrl?.slice(0, project.readmeUrl.lastIndexOf("/") + 1);

  const [content, setContent] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!project?.readmeUrl) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setContent(null);

    fetch(project.readmeUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch README");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, [project?.readmeUrl]);

  useEffect(() => {
    const previousTitle = document.title;
    if (project) document.title = `${project.title} | Yaswanth Deevi`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
            <Link to="/#projects" className="text-primary hover:underline">
              Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>

            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-3">
                <project.icon className="w-7 h-7 text-primary" />
                <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} repository on GitHub`}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repo
                </a>
              )}
            </div>
            <span className="text-xs text-primary font-mono">{project.subtitle}</span>

            <div className="flex flex-wrap gap-2 mt-6 mb-10">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-secondary text-secondary-foreground font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="border-t border-border pt-10">
              {status === "loading" && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading README from GitHub...
                </div>
              )}

              {status === "error" && (
                <div className="text-muted-foreground">
                  Couldn't load the README automatically.{" "}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View it directly on GitHub
                    </a>
                  )}
                  .
                </div>
              )}

              {status === "done" && content && (
                <article
                  className="prose prose-invert max-w-none
                    prose-headings:font-semibold prose-headings:tracking-tight
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-code:text-primary prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-none
                    prose-img:rounded-none prose-blockquote:border-primary prose-hr:border-border"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ src, alt, ...imgProps }) => (
                        <img
                          src={resolveAssetUrl(typeof src === "string" ? src : undefined, assetBaseUrl)}
                          alt={alt ?? ""}
                          loading="lazy"
                          {...imgProps}
                        />
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </article>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectReadme;
