import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPinned, Rocket, Shield, Wrench } from "lucide-react";

const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFMEY3RkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+";

export const metadata = {
  title: "Octo-Underwater Defender | Aerovision Dynamics",
  description: "Autonomous underwater vehicle prototype for monitoring submarine cables with satellite integration.",
};

const prototypeImage = {
  src: "/Octodefender.webp",
  alt: "Octo-Underwater Defender prototype in water test",
  width: 1600,
  height: 1200,
};

const Section = ({ title, children }) => (
  <section className="space-y-3 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
    <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
    <div className="text-sm leading-relaxed text-slate-600">{children}</div>
  </section>
);

const IconSummary = ({ icon: Icon, title, body }) => (
  <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100">
      <Icon className="h-5 w-5 text-sky-700" />
    </div>
    <div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
    </div>
  </div>
);

export default function OctoUnderwaterDefenderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mt-10 space-y-4 text-slate-900">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            Research concept
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Octo-Underwater Defender Project Brief
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            Octo Underwater Defender is an autonomous robot that protects subsea cables from threats. 
            Using sensors and satellite alerts, it patrols routes and responds to disturbances, providing fast, 
            scalable underwater security for Europe’s digital and energy networks.
          </p>
        </header>

        <figure className="mt-10 space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={prototypeImage.src}
              alt={prototypeImage.alt}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={DEFAULT_BLUR_DATA_URL}
              className="object-cover"
            />
          </div>
          <figcaption className="text-xs uppercase tracking-widest text-slate-400">
            We are still working on this part of the site
          </figcaption>
        </figure>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <IconSummary
            icon={Rocket}
            title="Autonomous Navigation"
            body="Built-in algorithms allow precise maneuvering under changing water conditions."
          />
          <IconSummary
            icon={MapPinned}
            title="Satellite Connectivity"
            body="Telemetry and data collection are transmitted in real-time via satellite links."
          />
          <IconSummary
            icon={Shield}
            title="Cable Protection"
            body="Designed to detect anomalies and protect subsea cables from damage."
          />
          <IconSummary
            icon={Wrench}
            title="System Integration"
            body="Arduino, servos, and sensors manage guidance, communication, and monitoring as a unified responsive system."
          />
        </div>

        <div className="mt-12 space-y-6">
          <Section title="Strategic Context">
            <p>
              Modern society relies on thousands of kilometers of undersea cables that transport data and electricity between continents. 
              Recent incidents of intentional cable damage have revealed how vulnerable this infrastructure is, threatening connectivity, trade, and defense communication alike.
            </p>
            <p>
          This page is still being developed, we apologize for the inconvenience. Additional information about the Octo-Underwater Defender project will be available soon.
            </p>
          </Section>

        </div>
      </div>
    </main>
  );
}
