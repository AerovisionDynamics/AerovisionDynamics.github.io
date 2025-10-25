import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPinned, Rocket, Shield, Wrench } from "lucide-react";

const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFMEY3RkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+";

export const metadata = {
  title: "Hermes-01 Project Brief | Aerovision Dynamics",
  description: "Humanitarian rocket concept blending low cost hardware, autonomous guidance, and field validated safeguards.",
};

const prototypeImage = {
  src: "/FinalProduct.webp",
  alt: "Completed Hermes-01 prototype standing on a launch fixture",
  width: 1600,
  height: 1200,
};

const astronautImage = {
  src: "/AndreKuipersSigningRocket.webp",
  alt: "André Kuipers autographing the Hermes-01 rocket at Vakkanjers Explorer",
  width: 1600,
  height: 1200,
};

const celebrationImage = {
  src: "/SecondPrizeGroupPic.webp",
  alt: "Aerovision Dynamics team celebrating second place with certificate and rocket",
  width: 1600,
  height: 1200,
};

const stabilizationVideo = "https://www.youtube.com/embed/73m7qyHiIqs?rel=0";

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

export default function Hermes01Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mt-10 space-y-4 text-slate-900">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            Concept mission
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hermes-01 Project Brief
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            Hermes-01 is a humanitarian payload rocket concept that delivers urgent medicine to clinics cut off by conflict.
            Open hardware, intelligent routing, and a rapid deployment workflow keep responders safe while expanding the reach of aid logistics.
          </p>
        </header>

        <figure className="mt-10 space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/Poster.webp"
              alt="Hermes-01 poster overview"
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={DEFAULT_BLUR_DATA_URL}
              className="object-cover"
            />
          </div>
          <figcaption className="text-xs uppercase tracking-widest text-slate-400">
            Hermes-01 mission poster overview
          </figcaption>
        </figure>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <IconSummary
            icon={Rocket}
            title="Humanitarian reach"
            body="Designed to push critical medicine into conflict disrupted zones without risking delivery crews."
          />
          <IconSummary
            icon={MapPinned}
            title="Integrated avionics"
            body="Arduino based control, GPS telemetry, servo actuation, and mission UI operate as one responsive stack."
          />
          <IconSummary
            icon={Shield}
            title="Autonomous guidance"
            body="Node based trajectory planning and fin control algorithms adapt to weather and shifting winds."
          />
          <IconSummary
            icon={Wrench}
            title="Recognized progress"
            body="Vakkanjers Explorer national finalist with a second place finish supporting ongoing development."
          />
        </div>

        <div className="mt-12 space-y-6">
          <Section title="Humanitarian Mission Brief">
            <p>
              Hermes-01 responds to medicine shortages in conflict regions where supply lines collapse overnight. Remote Ukrainian clinics
              highlighted the need for a responsive platform that can depart from a safe standoff location and land within a narrow relief corridor.
              The mission profile emphasizes civilian protection, rapid deployment, and post-impact retrieval that preserves sterile payloads.
            </p>
            <p>
              By pairing precise delivery with secure launch operations, the concept gives humanitarian teams a controllable option when roads,
              bridges, and airstrips are compromised.
            </p>
          </Section>

          <Section title="Integrated System Architecture">
            <p>
              The prototype integrates hardware and software into one modular stack that teams can replicate globally. A PVC fuselage and 3D printed
              airframe components keep fabrication costs low, while off-the-shelf electronics simplify repairs and scaling.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Hardware stack: Arduino Uno R3 flight computer, Neo-6M GPS, MPU6500 gyroscope, and quad SG90 servos work in sync with satellite links
                for telemetry and control.
              </li>
              <li>
                Software workflow: Custom UI mockups, telemetry dashboards, and weather feeds support launch go-no go decisions and post flight analysis.
              </li>
              <li>
                Fabrication approach: PLA prints, PVC tubing, and supermarket D-cell battery packs allow low cost assembly in resource constrained labs.
              </li>
            </ul>
            <figure className="mt-6 space-y-3">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src={prototypeImage.src}
                  alt={prototypeImage.alt}
                  width={prototypeImage.width}
                  height={prototypeImage.height}
                  className="w-full rounded-3xl"
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                />
              </div>
              <figcaption className="text-xs uppercase tracking-widest text-slate-400">
                Hermes-01 prototype with PVC fuselage and 3D printed structure
              </figcaption>
            </figure>
          </Section>

          <Section title="Simulation and Autonomous Control">
            <p>
              Trajectory planning is driven by simulation before a single launch occurs. OpenRocket studies established a 400 meter baseline with a
              conservative motor, while additional physics models explore higher energy stages. Virtual nodes map a parabolic flight path and give the
              control system waypoints to chase, allowing live course correction as winds shift.
            </p>
            <p>
              Fin actuation follows the Dynamic Angle method, scaling servo movement with airspeed to balance responsiveness and stability. The same
              algorithms feed into the mission UI so operators can audit every autonomous decision.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video">
                <iframe
                  src={stabilizationVideo}
                  title="Hermes-01 stabilization demo"
                  className="h-full w-full rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </Section>

          <Section title="Human Centered Safeguards">
            <p>
              The team validated visual identity choices with Ukrainian contacts who will view the rocket from the ground. Feedback from Vlad, a local
              volunteer, confirmed that an orange parachute and red cross markings communicate relief rather than risk. Color detection testing backed
              the decision by showing the orange canopy is spotted faster than green, white, or red in the mission UI. Failsafe bypass codes ensure
              only authorized responders can trigger a launch, reducing the risk of misuse in volatile regions.
            </p>
            <p>
              These measures keep the concept rooted in trust, clear intent, and civilian safety even as it operates autonomously.
            </p>
            <figure className="mt-6 space-y-3">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src={astronautImage.src}
                  alt={astronautImage.alt}
                  width={astronautImage.width}
                  height={astronautImage.height}
                  className="w-full rounded-3xl"
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                />
              </div>
              <figcaption className="text-xs uppercase tracking-widest text-slate-400">
                André Kuipers adding his signature to the Hermes-01 rocket during finals
              </figcaption>
            </figure>
          </Section>

          <Section title="Evidence and Next Steps">
            <p>
              Bench testing showed three of four servos hitting targets, flagging one unit for replacement before the next campaign. Satellite link
              checks confirmed GPS handshake reliability, and mock telemetry runs streamed speed, altitude, and weather data for post mission review.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Immediate actions: swap the failed servo, expand hardware-in-the-loop testing, and finalize the parachute visibility package.
              </li>
              <li>
                Midterm goals: document CAD and wiring for release, migrate simulations into the mission UI, and stage a guided drop rehearsal.
              </li>
              <li>
                Recognition: the project earned second place in the Vakkanjers Explorer national finals, reinforcing confidence in the roadmap.
              </li>
            </ul>
            <figure className="mt-6 space-y-3">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src={celebrationImage.src}
                  alt={celebrationImage.alt}
                  width={celebrationImage.width}
                  height={celebrationImage.height}
                  className="w-full rounded-3xl"
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                />
              </div>
              <figcaption className="text-xs uppercase tracking-widest text-slate-400">
                Aerovision Dynamics celebrating second place at the Vakkanjers Explorer finals
              </figcaption>
            </figure>
          </Section>
        </div>
      </div>
    </main>
  );
}
