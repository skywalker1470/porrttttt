import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master's in Computer Science & Engineering",
    institution: "Blekinge Tekniska Högskola",
    location: "Sweden",
    period: "Expected July 2027",
    grade: null,
    current: true,
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "JNTUH",
    location: "India",
    period: "December 2025",
    grade: "GPA: 8.54",
    current: false,
  },
  {
    degree: "Intermediate (TSBIE)",
    institution: "Narayana",
    location: "India",
    period: "April 2022",
    grade: "94%",
    current: false,
  },
  {
    degree: "Secondary Education (CBSE)",
    institution: "Vignan's Bo Tree",
    location: "India",
    period: "December 2020",
    grade: "96%",
    current: false,
  },
];

const certifications = [
  {
    title: "Certificate of Merit - AI4ICPS",
    issuer: "IIT KGP (in collaboration with TCS Ion)",
    link: "https://github.com/skywalker1470/iitkgp.git",
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
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">05. Education</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Academic Background</h2>
          </div>

          {/* Education timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-full border-4 ${
                      edu.current
                        ? "bg-primary border-background animate-pulse"
                        : "bg-background border-border"
                    }`}
                  />

                  <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-primary mb-1">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {edu.current ? "Currently Pursuing" : edu.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                      {edu.grade && (
                        <span className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary font-semibold">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;