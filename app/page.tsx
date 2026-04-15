import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";

const links = {
  github: "https://github.com/ibbydiggy250",
  linkedin: "https://www.linkedin.com/in/ibrahim-quaizar-708138304/",
  email: "mailto:imibrahimq@gmail.com",
  resume: "/Ibrahim-Quaizar-Resume.pdf",
};

const navItems = ["About", "Projects", "Experience", "Contact"];

const orbitWords = ["AI Systems", "Full-Stack", "Product-Minded", "Builder", "Curious"];

const projects = [
  {
    title: "MatchedIn",
    label: "AI Matching Platform",
    summary:
      "A retrieval-first recruiting platform for finding stronger candidate and recruiter matches.",
    description:
      "MatchedIn treats networking like a relevance problem: preprocess profiles, rank matches with embeddings and KNN, then use Gemini to turn the result into targeted outreach.",
    tech: ["React", "FastAPI", "Python", "KNN", "Embeddings", "Gemini API", "Parquet"],
    highlights: [
      "Shipped a React and FastAPI workflow around Python matching logic",
      "Processed 50K+ profiles into searchable features",
      "Ranked profile similarity with embeddings and KNN",
      "Generated personalized outreach with Gemini API",
      "Optimized the flow around relevant, usable recommendations",
    ],
    github: "https://github.com/ibbydiggy250/Matchedin?tab=readme-ov-file",
  },
  {
    title: "Hands-Up",
    label: "Real-Time ASL to Speech",
    summary:
      "A live computer vision system that converts ASL gestures into spoken output.",
    description:
      "Hands-Up connects webcam input, landmark detection, CNN inference, and speech synthesis into one low-latency accessibility pipeline.",
    tech: ["TensorFlow", "OpenCV", "MediaPipe", "CNN", "Python", "ElevenLabs"],
    highlights: [
      "Captured hand landmarks with OpenCV and MediaPipe",
      "Trained a custom TensorFlow CNN on gesture data",
      "Used normalization and dropout to improve generalization",
      "Reached 94% accuracy with sub-100ms latency",
      "Connected live inference to speech output through ElevenLabs",
    ],
    github: "https://github.com/ibbydiggy250/Hands-Up",
  },
  {
    title: "Warehouse Forecasting Dashboard",
    label: "Data + Forecasting",
    summary:
      "A forecasting dashboard for turning warehouse storage history into planning insight.",
    description:
      "Built from real Northwell Health operations data, the workflow moves from SQL and Excel cleanup to Streamlit dashboards and Prophet-based demand forecasts.",
    tech: ["Python", "Pandas", "NumPy", "Prophet", "SQL", "Streamlit", "Excel"],
    highlights: [
      "Prepared 2+ years of storage data with SQL, Excel, and Python",
      "Modeled warehouse demand with Prophet",
      "Built Streamlit views for trend exploration",
      "Visualized item patterns with pandas, NumPy, and Matplotlib",
      "Converted operational data into planning-ready signals",
    ],
    github: "https://github.com/ibbydiggy250/Prophet_Analytics",
    demo: "https://prophetprediction.streamlit.app",
  },
];

const experience = [
  {
    role: "Web Developer Intern",
    company: "NexSav",
    dates: "May 2025 - November 2025",
    description:
      "Built production websites for NYC public schools with an emphasis on accessible interfaces and maintainable frontend systems.",
    points: [
      "Developed 8+ production sites with React, TypeScript, HTML, and CSS",
      "Supported web experiences serving 5,000+ students",
      "Used ShadCN and TailwindCSS to speed up UI development by 30%",
      "Built modern web presences for schools without current sites",
      "Applied accessibility considerations aligned with WCAG standards",
    ],
  },
  {
    role: "Student Aide / Intern",
    company: "Northwell Health",
    dates: "June 2024 - September 2024",
    description:
      "Turned historical warehouse data into analysis, dashboards, and forecasting workflows for operational planning.",
    points: [
      "Cleaned and analyzed historical datasets with SQL, Excel, and Python",
      "Built Streamlit dashboards for trend analysis",
      "Applied time-series forecasting to support planning decisions",
      "Focused on reliable workflows for real organizational data",
    ],
  },
];

const leadership = [
  {
    role: "President",
    organization: "Herricks Rube Goldberg",
    dates: "September 2023 - June 2025",
    description:
      "Led a student engineering team through system design, prototyping, integration, and competition execution.",
    points: [
      "Directed a 50-member team building a 20-stage mechanical system",
      "Used prototyping and failure analysis to improve reliability",
      "Coordinated parallel workstreams across a large build team",
      "Won 1st place at the 2024 regional competition, the club's first",
    ],
  },
  {
    role: "Secretary",
    organization: "Herricks Muslim Student Association",
    dates: "September 2023 - June 2025",
    description:
      "Supported club communication, event logistics, and consistent member coordination.",
    points: [
      "Coordinated meeting and event logistics",
      "Helped track participation and support communication across members",
      "Contributed to organized events and consistent engagement",
    ],
  },
];

const skillGroups = [
  { title: "Languages", skills: ["Python", "TypeScript", "SQL", "Embedded C"] },
  { title: "Frontend", skills: ["React", "HTML", "CSS", "TailwindCSS", "ShadCN"] },
  { title: "Backend / Data", skills: ["FastAPI", "Pandas", "NumPy", "Streamlit", "Excel"] },
  { title: "ML / AI", skills: ["TensorFlow", "CNNs", "KNN", "MediaPipe", "Embedding retrieval", "Gemini API"] },
  { title: "Tools", skills: ["Git", "GitHub", "Parquet", "OpenCV", "Matplotlib"] },
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase text-sky-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 leading-7 text-zinc-400">{intro}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollReveal />
      <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Ibrahim Quaizar home">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-zinc-700/80 bg-zinc-900 text-sm font-bold text-sky-300 shadow-[0_0_28px_rgba(125,211,252,0.12)]">
              IQ
            </span>
            <span className="hidden text-sm font-medium text-zinc-100 sm:block">
              Ibrahim Quaizar
            </span>
          </a>
          <div className="flex max-w-[68vw] items-center gap-1 overflow-x-auto md:max-w-none">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-100"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-74px)] max-w-[1100px] content-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="pointer-events-none absolute right-8 top-28 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="fade-slide relative max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase text-sky-300">
              AI systems / Full-stack products
            </p>
            <h1 className="text-5xl font-bold text-zinc-50 sm:text-6xl lg:text-7xl">
              Ibrahim Quaizar
            </h1>
            <p className="mt-5 text-xl font-medium text-zinc-300">
              Computer Engineering @ Stony Brook
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I build AI and full-stack systems that move from idea to working product, with a focus on speed, usability, and real-world constraints.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#projects" className="w-full sm:w-auto">View Projects</ButtonLink>
              <ButtonLink href={links.resume} variant="secondary" className="w-full sm:w-auto" download>
                Resume
              </ButtonLink>
              <ButtonLink href={links.github} variant="secondary" external className="w-full sm:w-auto">
                GitHub
              </ButtonLink>
              <ButtonLink href={links.linkedin} variant="secondary" external className="w-full sm:w-auto">
                LinkedIn
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost" className="w-full sm:w-auto">
                Contact
              </ButtonLink>
            </div>
          </div>

          <div className="fade-slide-delay portrait-float orbit-system relative mx-auto h-[27rem] w-full max-w-[27rem] lg:mx-0">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/10 blur-3xl" />
            {orbitWords.map((word, index) => (
              <div
                key={word}
                className={`orbit-track orbit-track-${index + 1}`}
                aria-hidden="true"
              >
                <span className="orbit-token">{word}</span>
              </div>
            ))}
            <div className="absolute inset-0 z-10 grid place-items-center">
              <div className="portrait-shell relative h-64 w-64 rounded-full border border-sky-300/20 bg-zinc-950/76 p-3 shadow-[0_28px_96px_rgba(0,0,0,0.34),0_0_70px_rgba(125,211,252,0.09)] backdrop-blur-xl sm:h-72 sm:w-72">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
                  <Image
                    src="/image.png"
                    alt="Ibrahim Quaizar"
                    fill
                    priority
                    sizes="(min-width: 1024px) 288px, 70vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" data-reveal className="reveal mx-auto max-w-[1100px] border-t border-zinc-800/60 px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-zinc-400">
          <p>
            I&apos;m a Computer Engineering student at Stony Brook University building across AI, data, and web systems. Most of my work starts with a practical problem, then becomes a pipeline, interface, or product that someone can actually use.
          </p>
          <p>
            Recently, that has meant matching 50K+ professional profiles, translating ASL gestures in real time, forecasting warehouse demand, and shipping production websites for schools. I like the engineering space where model quality, frontend polish, and user value all have to meet.
          </p>
        </div>
      </section>

      <section id="projects" data-reveal className="reveal mx-auto max-w-[1100px] border-t border-zinc-800/60 px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          intro="Machine learning and product-focused builds with real datasets, live interfaces, and measurable constraints."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} data-reveal className="reveal-card flex h-full flex-col p-6">
              <p className="mb-3 text-sm font-medium text-sky-300">{project.label}</p>
              <h3 className="text-2xl font-semibold text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-4 font-medium leading-7 text-zinc-200">{project.summary}</p>
              <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-zinc-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                <ButtonLink href={project.github} variant="secondary" size="sm" external className="w-full sm:w-auto">
                  GitHub
                </ButtonLink>
                {project.demo ? (
                  <ButtonLink href={project.demo} variant="ghost" size="sm" external className="w-full sm:w-auto">
                    Demo
                  </ButtonLink>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" data-reveal className="reveal mx-auto max-w-[1100px] border-t border-zinc-800/60 px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          intro="Applied work across frontend development, forecasting workflows, and production-minded engineering."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((item) => (
            <Card key={item.company} data-reveal className="reveal-card p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-sky-300">{item.company}</p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-50">{item.role}</h3>
                </div>
                <p className="text-sm text-zinc-500">{item.dates}</p>
              </div>
              <p className="mt-5 leading-7 text-zinc-400">{item.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section id="leadership" data-reveal className="reveal mx-auto max-w-[1100px] border-t border-zinc-800/60 px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="Leadership" />
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item) => (
            <Card key={item.organization} data-reveal className="reveal-card p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-sky-300">{item.organization}</p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-50">{item.role}</h3>
                </div>
                <p className="text-sm text-zinc-500">{item.dates}</p>
              </div>
              <p className="mt-5 leading-7 text-zinc-400">{item.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" data-reveal className="reveal mx-auto max-w-[1100px] border-t border-zinc-800/60 px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Skills" title="Technical Toolkit" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} data-reveal className="reveal-card p-6">
              <h3 className="font-semibold text-zinc-50">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" data-reveal className="reveal mx-auto max-w-[1100px] border-t border-zinc-800/60 px-5 py-24 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-sky-300/15 bg-zinc-950/72 p-8 shadow-[0_24px_88px_rgba(0,0,0,0.32),0_0_55px_rgba(125,211,252,0.07)] sm:p-10">
          <p className="mb-3 text-sm font-medium uppercase text-sky-300">
            Contact
          </p>
          <h2 className="text-4xl font-semibold text-zinc-50">
            Let&apos;s Build Something Useful
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            I&apos;m always interested in new opportunities, ambitious projects, and conversations around AI, software, and product-driven engineering.
          </p>
          <a
            href={links.email}
            className="mt-5 inline-flex text-sm font-medium text-zinc-200 transition hover:text-sky-300"
          >
            imibrahimq@gmail.com
          </a>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={links.email} className="w-full sm:w-auto">Email</ButtonLink>
            <ButtonLink href={links.github} variant="secondary" external className="w-full sm:w-auto">
              GitHub
            </ButtonLink>
            <ButtonLink href={links.linkedin} variant="secondary" external className="w-full sm:w-auto">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={links.resume} variant="secondary" className="w-full sm:w-auto" download>
              Resume
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1100px] flex-col gap-2 border-t border-zinc-800/60 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Ibrahim Quaizar</p>
        <p>Built with Next.js and TailwindCSS</p>
      </footer>
    </main>
  );
}
