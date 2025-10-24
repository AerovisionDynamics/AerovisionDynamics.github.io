"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Satellite, Cog, CircuitBoard, Star, ShieldCheck, ArrowUpRight, BookOpen, FlaskConical, ChevronRight, Sparkles } from "lucide-react";

// Lightweight UI primitives (swap with shadcn/ui if available)
const Button = ({ className = "", children, as = "button", ...props }) => {
  const Comp = as;
  return (
    <Comp
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-sky-400 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white/60 backdrop-blur shadow-sm ${className}`}>{children}</div>
);

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ${className}`}>{children}</span>
);

// Data: student-led projects over time (no launches)

const navItems = [
  { href: "#about", label: "About" },
  { href: "#goals", label: "Goals" },
  { href: "#labs", label: "Labs" },
  { href: "#awards", label: "Awards" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
];

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <div className="mb-3">
        <Badge>
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </Badge>
      </div>
    )}
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

const LogoMark = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-300/50 to-blue-500/30 blur-md" />
      <div className="relative grid h-9 w-9 place-items-center rounded-full bg-white shadow ring-1 ring-slate-200">
        <GraduationCap className="h-5 w-5 text-sky-600" />
      </div>
    </div>
    <span className="text-lg font-semibold tracking-tight text-slate-900">
      Aerovision <span className="text-sky-700">Dynamics</span>
      <span className="ml-2 rounded-full bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700 ring-1 ring-sky-200">Keizer Karel College</span>
    </span>
  </div>
);

const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <LogoMark />
      <nav className="hidden gap-6 md:flex">
        {navItems.map((n) => (
          <a key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-sky-700">
            {n.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button as="a" href="#goals" className="bg-sky-600 text-white hover:bg-sky-700">
          Explore our mission
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
    {/* Background accents */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-100 blur-3xl" />
      <svg
        className="absolute -right-40 top-20 h-[28rem] w-[28rem] opacity-40"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
        <path
          fill="url(#g1)"
          d="M53.9,-59.1C68.8,-46.6,79.5,-28.2,80.4,-9.1C81.2,10.1,72.1,29.8,58.1,44.1C44.1,58.4,25.2,67.2,5.9,68.5C-13.4,69.7,-26.9,63.4,-40.6,52.9C-54.3,42.5,-68.2,27.9,-73.1,9.8C-78,-8.3,-73.8,-29.9,-61.7,-43C-49.6,-56.1,-29.8,-60.7,-10.5,-62C8.7,-63.4,17.4,-61.6,53.9,-59.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Badge className="mb-3">Vision shapes the next leap.</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          We engineer <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">the next leap.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Aerovision Dynamics is a student-led division at the Keizer Karel College, focusing on anything that flies.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button className="bg-sky-600 text-white hover:bg-sky-700" as="a" href="#projects">
            See our projects <ChevronRight className="h-4 w-4" />
          </Button>
          <Button className="bg-white text-sky-700 ring-1 ring-slate-200 hover:bg-sky-50" as="a" href="#about">
            Learn more
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sky-600" /> Award-winning</div>
          <div className="flex items-center gap-2"><Star className="h-4 w-4 text-sky-600" /> Established since 2024</div>
          <div className="flex items-center gap-2"><CircuitBoard className="h-4 w-4 text-sky-600" /> Advanced prototyping</div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
        <Card className="p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100"><BookOpen className="h-5 w-5 text-sky-700"/></div>
            <div>
              <p className="text-sm font-medium text-slate-700">Quick facts</p>
              <p className="text-xs text-slate-500">Overview at a glance</p>
            </div>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Team led by Technasium students</li>
            <li>Founded in 2024</li>
            <li>We prototype, simulate, and bench‑test</li>
          </ul>
        </Card>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Members", value: "6" },
            { label: "Projects", value: "1" },
            { label: "Started", value: "2024" },
          ].map((s) => (
            <Card key={s.label} className="p-4">
              <div className="text-2xl font-bold text-slate-900">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        eyebrow="Who we are"
        title="Precision builders."
        subtitle="We are an ambitious student team at Keizer Karel College, passionate about aerospace engineering and hands-on learning."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          { icon: Satellite, title: "Solutions", text: "Concepts for affordable and accessible aid in conflicts." },
          { icon: Cog, title: "Systems", text: "Aero simulations, purpose-built manufacturing machines, and realistic renders." },
          { icon: CircuitBoard, title: "Avionics", text: "Reliable flight computers, sensor integration, and optimized code." },
        ].map(({ icon: Icon, title, text }) => (
          <Card key={title} className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100">
                <Icon className="h-5 w-5 text-sky-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="text-sm text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Goals = () => (
  <section id="goals" className="relative py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        eyebrow="This is what we aim for"
        title="Our mission"
        subtitle="We are a group of students inspired by flight and innovation. Our mission is to design, build, and test aerospace systems that either benefit soceity or useless stuff we find cool. Through hands-on projects, we aim to develop practical skills, foster teamwork, and ignite a passion for aerospace engineering among our peers."
      />
    </div>
  </section>
);

const Labs = () => (
  <section id="labs" className="relative py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        eyebrow="Where we build"
        title="Labs & workshops"
        subtitle="Safety‑first spaces for fabrication, electronics, and testing."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Fabrication Lab 1", body: "Laser cutters, enclosed 3D printers, and storage for electronics. This lab is located at our school's TOA room.", accent: "from-sky-500 to-blue-600", icon: FlaskConical },
          { title: "Fabrication Lab 2", body: "Purpose made 3D printer (originally made for the Hermes-01). This is where the coding takes place. Located at Jiarui Yu's room.", accent: "from-cyan-500 to-sky-600", icon: CircuitBoard },
          { title: "Assembly", body: "Hand soldering, precision wiring, and small-scale assembly for the airframe. Located at the Technasium Workshop.", accent: "from-indigo-500 to-blue-600", icon: ShieldCheck },
        ].map((l) => (
          <Card key={l.title} className="group overflow-hidden">
            <div className={`h-32 w-full bg-gradient-to-tr ${l.accent}`} />
            <div className="p-6">
              <Badge className="mb-2">Equipped</Badge>
              <h3 className="text-lg font-semibold text-slate-900">{l.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{l.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Awards = () => (
  <section id="awards" className="relative py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        eyebrow="Recognition"
        title="Awards & honors"
        subtitle="Proud moments."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Vakkanjers Explorer",
            year: 2025,
            body: "Second place nationally, joined and recgonized by former astronaut, André Kuipers. This contest was joined by almost 13000 students across the country.",
            imageSrc: "/IMG_0578.jpeg",
          },
        ].map((a) => (
          <Card key={a.title} className="p-6">
            <img
              src={a.imageSrc}
              alt={`${a.title} placeholder image`}
              className="mb-4 h-40 w-full rounded-xl object-cover"
              loading="lazy"
            />
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100"><Trophy className="h-5 w-5 text-amber-600"/></div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{a.title}</p>
                <p className="text-xs text-slate-500">{a.year}</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">{a.body}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="relative py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        eyebrow="What we build"
        title="Our projects"
        subtitle="Our current and past projects."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            tag: "Research concept",
            title: "Hermes‑01",
            body: "A conceptual rocket used for delivering medical supplies to remote areas.",
            accent: "from-sky-500 to-blue-600",
          },
        ].map((p) => (
          <Card key={p.title} className="group overflow-hidden">
            <div className={`h-32 w-full bg-gradient-to-tr ${p.accent}`} />
            <div className="p-6">
              <Badge className="mb-2">{p.tag}</Badge>
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                Project brief <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="relative py-20">
    <div className="mx-auto max-w-7xl px-4">
      <SectionTitle
        eyebrow="Our people"
        title="Team"
        subtitle="Six motivated members at Keizer Karel College (two co‑founders). Here’s what each person has contributed."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Narein, Founder",
            role: "Modeling / Research",
            projects: ["Hermes‑01"],
            tasks: [
              "CAD modeling",
              "Customer research & interviews",
              "Design documentation",
            ],
          },
          {
            name: "Jiarui, Founder",
            role: "Avionics / Firmware",
            projects: ["Hermes‑01"],
            tasks: [
              "CAD modeling",
              "Blender modeling",
              "Software and hardware development",
            ],
          },
                    {
            name: "Soumil, Co-Founder",
            role: "To be decided",
            projects: ["To be decided"],
            tasks: [
              "To be decided",
            ],
          },
          {
            name: "Kurt",
            role: "Recovery Systems",
            projects: ["Hermes‑01"],
            tasks: [
              "Free fall simulations",
              "Parachute design & selection",
              "Recovery system integration",
            ],
          },
          {
            name: "Jelle",
            role: "Test & Data",
            projects: ["Hermes-01"],
            tasks: [
              "Data review and analysis",
              "Emotional support",
              "Advanced data analysis and visualization",
            ],
          },
          {
            name: "Kris",
            role: "To be decided",
            projects: ["To be decided"],
            tasks: [
              "To be decided",
            ],
          },
        ].map((m) => (
          <Card key={m.name} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="text-sm text-slate-600">{m.role}</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-600"><span className="font-semibold text-slate-800">Projects:</span> {m.projects.join(", ")}</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {m.tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative border-t border-slate-200 bg-white py-10">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-6 md:grid-cols-2">
        <LogoMark />
        <div className="md:justify-self-end">
          <div className="flex gap-6 text-sm text-slate-600">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-sky-700">{n.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Aerovision Dynamics. All rights reserved.</div>
    </div>
    <a href="#top" className="fixed bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 hover:bg-sky-50" aria-label="Back to top">
      ↑
    </a>
  </footer>
);

export default function AerovisionDynamicsSchoolHome() {
  return (
    <main id="top" className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <About />
      <Goals />
      <Labs />
      <Awards />
      <Projects />
      <Team />
      <Footer />
    </main>
  );
}
