import { GraduationCap, Award, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";

const education = [
  {
    degree: "M.S. in Computer Science & Engineering",
    institution: "Blekinge Tekniska Högskola",
    location: "Sweden",
    period: "Expected July 2027",
    grade: null,
    coursework:
      "Research Methodologies, Advanced Machine Learning, Deep Learning, Decision Support Systems",
    current: true,
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "JNTUH",
    location: "India",
    period: "December 2025",
    grade: "GPA: 9.105",
    coursework:
      "Machine Learning, Data Structures and Algorithms, Computer Networks, Object Oriented Programming, Python Programming",
    current: false,
  },
  {
    degree: "Intermediate (TSBIE)",
    institution: "Narayana",
    location: "India",
    period: "April 2022",
    grade: "94%",
    coursework: null,
    current: false,
  },
  {
    degree: "Secondary Education (CBSE)",
    institution: "Vignan's Bo Tree",
    location: "India",
    period: "December 2020",
    grade: "96%",
    coursework: null,
    current: false,
  },
];

const certifications = [
  {
    title: "Runner-up, PEMA Ottonel Popesco Student Challenge 2025/2026",
    issuer: "Reached the finals representing JNTU Hyderabad",
    link: "https://github.com/skywalker1470/PEMA-_cerificate_and_report",
  },
  {
    title: "Certificate of Merit - AI4ICPS",
    issuer: "IIT KGP (in collaboration with TCS Ion)",
    link: "https://github.com/skywalker1470/iitkgp",
  },
  {
    title: "Certificate of Completion",
    issuer: "Smart Interviews",
    link: "https://smartinterviews.in/certificate/384afcb7",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Academic Background</h2>
            </div>
          </Reveal>

          {/* Education timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-none border-4 ${
                      edu.current
                        ? "bg-primary border-background"
                        : "bg-background border-border"
                    }`}
                  />

                  <Reveal delay={index * 80}>
                    <div className="p-6 rounded-none bg-background border border-border hover:border-primary/30 transition-colors duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-primary mb-1">
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {edu.current ? "Currently Pursuing" : edu.period}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">
                            {edu.institution}, {edu.location}
                          </p>
                          {edu.coursework && (
                            <p className="text-sm text-muted-foreground mt-2">
                              <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                            </p>
                          )}
                        </div>
                        {edu.grade && (
                          <span className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary font-semibold">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <Reveal>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) =>
                  cert.link ? (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-none bg-background border border-border hover:border-primary/50 transition-colors duration-300"
                    >
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </a>
                  ) : (
                    <div key={index} className="p-4 rounded-none bg-background border border-border">
                      <h4 className="font-medium">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
