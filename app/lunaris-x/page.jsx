import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowLeft,
  Gauge,
  Orbit,
  Radar,
  Satellite,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Waves,
} from "lucide-react";

const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFMEY3RkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+";

export const metadata = {
  title: "Lunaris‑X | Aerovision Dynamics",
  description:
    "Lunaris‑X CanSat",
};

const stats = [
  {
    label: "Mass (ballasted)",
    value: "≥300 g",
    detail: "CF-reinforced PET-G shell + custom PCB, ballasted to the 300 g ESA minimum with margin.",
  },
  {
    label: "Avionics",
    value: "ESP32 @ 240 MHz",
    detail: "Dual-core 32-bit MCU with Wi‑Fi/BLE and 520 kB SRAM, MicroPython firmware.",
  },
  {
    label: "Sensing cadence",
    value: "10 Hz baro / 60 Hz IMU",
    detail: "High-resolution pressure + 9-axis IMU for smooth altitude and attitude reconstruction.",
  },
  {
    label: "Power budget",
    value: "1 A regulated rails",
    detail: "2000 mAh+ Li-Po (expandable) with buck/boost; over-specced current delivery for future payloads without redesign.",
  },
];

const subsystemHighlights = [
  {
    subsystem: "On-board computer",
    spec: "ESP32 dual-core 32-bit @ 240 MHz, 520 kB SRAM, 4 MB flash",
    advantage:
      "15× raw CPU speed, 32× RAM and built-in Wi‑Fi/BLE vs the 8-bit 16 MHz ATmega328P Arduino Uno R3 in the reference kit; enables higher-rate sensing, complex filtering and future payloads without board changes.",
  },
  {
    subsystem: "Primary-mission sensing",
    spec: "Bosch BMP280 barometric/temp sensor, sampled at 10 Hz",
    advantage:
      "10× the 1 Hz telemetry rule, giving smoother pressure-derived altitude traces than baseline kit logging.",
  },
  {
    subsystem: "Attitude & motion",
    spec: "9-axis IMU (accelerometer + gyro + magnetometer) sampled at ≥60 Hz",
    advantage:
      "60× the minimum 1 Hz telemetry requirement; captures fine vibrations and exports Euler angles for Blender-based 3-D trajectory reconstruction and aero analysis.",
  },
  {
    subsystem: "Power architecture",
    spec: "2000 mAh+ Li-Po (expandable) + high-efficiency buck/boost regulator (1 A shared on 5 V & 3.3 V rails)",
    advantage:
      "Rechargeable design eliminates disposable 9 V blocks (cuts e-waste) and massively increases current headroom (Arduino Uno limit 50 mA on 3.3 V); supports power-hungry upgrades such as LTE/5G radios or cameras without redesign.",
  },
  {
    subsystem: "Mass & structure",
    spec: "Carbon-fibre-reinforced PET-G airframe, custom PCB; ballasted to ≥300 g",
    advantage:
      "Rugged CF-PET-G shell keeps the stack light; ballast is added to hit ESA’s ≥300 g minimum and optimise CG/stability without overstressing the airframe.",
  },
  {
    subsystem: "Data integrity",
    spec: "Live 433 MHz radio down-link (primary) + mirrored logging to flash & Micro-SD (backup)",
    advantage:
      "Radio link remains the primary log path; mirrored flash/SD provides recovery if the signal is interrupted or the CanSat is lost.",
  },
  {
    subsystem: "Software stack",
    spec: "MicroPython on bare metal ESP-IDF",
    advantage:
      "Instant REPL debugging and no compile cycle accelerate iteration and lower barriers for future student teams.",
  },
  {
    subsystem: "Recovery & safety",
    spec: "Cross-form rip-stop parachute (0.072 m²) targets 7–8 m s⁻¹; piezo beeper auto-arms after 120 min",
    advantage:
      "Meets ESA’s recommended 8–11 m s⁻¹ descent range; audible beacon simplifies field retrieval.",
  },
];

const reasons = [
  "Second-generation architecture – departs from the Arduino-centric starter kit, leveraging a modern 32-bit SoC, custom PCB and high-rate sensors.",
  "Professional-grade data quality – 60 Hz inertial logging plus high-resolution pressure sensing enable flight-dynamics analyses usually reserved for CubeSats.",
  "Sustainability by design – rechargeable Li-Po, reusable airframe, in-print ballast and minimal wiring reduce consumables and waste.",
  "Platform-ready for future CanSats – over-specced 1 A rails, spare GPIOs, native Wi‑Fi/BLE and MicroPython let new teams bolt on cameras, GNSS-RTK or cellular links without touching the hardware.",
  "Robust telemetry and logging – 433 MHz radio downlink as primary path, mirrored to flash/SD for data survival even if the signal drops.",
];

const badges = [
  "Custom 2-layer PCB",
  "433 MHz downlink + mirrored logs",
  "Rechargeable Li-Po + buck/boost",
  "CF-reinforced PET-G airframe",
];

const gallery = [
  {
    title: "Lunaris visual placeholder",
    src: "/lunaris.webp",
    tag: "3D model",
    caption: "Render of the airframe and PCB.",
  },
  {
    title: "Think Ahead visual placeholder",
    src: "/think_ahead.webp",
    tag: "Think Ahead",
    caption: "Promotional poster.",
  },
];

const socialReel = {
  title: "Lunaris-X Instagram reel",
  src: "/IGREEL.mp4",
  poster: "/newvid.png",
  href: "https://www.instagram.com/p/DUAtgznAujM/",
};

const socialPosts = [
  {
    title: "Lunaris-X Instagram post image 1",
    src: "/IGpost1.jpeg",
    href: "https://www.instagram.com/p/DUTU-tgjNdY/?img_index=1",
  },
  {
    title: "Lunaris-X Instagram post image 2",
    src: "/IGpost2.jpeg",
    href: "https://www.instagram.com/p/DUTU-tgjNdY/?img_index=2",
  },
  {
    title: "Lunaris-X Instagram post image 3",
    src: "/IGpost3.jpg",
    href: "https://www.instagram.com/p/DUTU-tgjNdY/?img_index=3",
  },
  {
    title: "Lunaris-X Instagram post image 4",
    src: "/IGpost4.jpg",
    href: "https://www.instagram.com/p/DUTU-tgjNdY/?img_index=4",
  },
  {
    title: "Lunaris-X Instagram post image 5",
    src: "/IGpost5.jpg",
    href: "https://www.instagram.com/p/DUTU-tgjNdY/?img_index=5",
  },
];

export default function LunarisXPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="cosmic-gradient absolute inset-0" />
      <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-14 top-64 h-72 w-72 rounded-full bg-amber-300/12 blur-3xl" />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:border-white/30 hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
              <Sparkles className="h-3 w-3 text-amber-200" />
              Placeholder sprint
            </div>
          </div>

          <section className="mt-10 grid items-start gap-8 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  <Orbit className="h-4 w-4" />
                  Technical deck
                </div>
                <h1 className="font-moderniz text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  Lunaris-X CanSat
                </h1>
                <p className="max-w-2xl text-lg text-slate-200/85">
                  Ballasted-to-spec CanSat (≥300 g) that delivers laboratory-grade telemetry, exceeds ESA reliability guidelines, and serves as a platform future student teams can build on—thanks to overpowered power rails, light structure, and rechargeable, eco-friendly operation.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-2xl border border-white/10 bg-slate-900/40 p-4 shadow-inner transition hover:border-cyan-200/30 hover:bg-slate-900/60"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                        {item.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-950/40" />
              <Image
                src="/lunaris.webp"
                alt="Lunaris-X concept render"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                priority
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-200 backdrop-blur">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Preliminary render; avionics and comms stack shown to scale
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                  Lunaris-X
                </span>
              </div>
            </div>
          </section>

          <section className="mt-10 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                  Our final product
                </p>
                <h3 className="font-moderniz text-3xl text-white">
                  Renders while the full CanSat lands.
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
                Gallery
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {gallery.map((item) => (
                <figure
                  key={item.title}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur aspect-[16/10]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-950/50" />
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    className="object-cover"
                  />
                  <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-200 backdrop-blur">
                    <span className="inline-flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-200" />
                      {item.caption}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                      {item.tag}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-8 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                  From Instagram
                </p>
                <h3 className="font-moderniz text-3xl text-white">
                  Our socials
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
                Social
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <a
                href={socialReel.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur transition hover:border-cyan-200/30"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-950/40" />
                <div className="relative aspect-square w-full">
                  <Image
                    src={socialReel.poster}
                    alt={socialReel.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    className="object-cover transition duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-slate-950/60 text-white shadow-lg backdrop-blur">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-200 backdrop-blur">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-200" />
                    Reel highlight
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                    Watch on IG
                  </span>
                </div>
              </a>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-950/50" />
                <div className="relative">
                  <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth touch-pan-x overscroll-x-contain">
                    {socialPosts.map((post) => (
                      <a
                        key={post.title}
                        href={post.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative min-w-full snap-center"
                      >
                        <div className="relative aspect-square w-full">
                          <Image
                            src={post.src}
                            alt={post.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            placeholder="blur"
                            blurDataURL={DEFAULT_BLUR_DATA_URL}
                            className="object-cover"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-200 backdrop-blur">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-200" />
                    IG post carousel
                  </span>
                  <a
                    href={socialPosts[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-white/20"
                  >
                    View on IG
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                  Technical highlights
                </p>
                <h3 className="font-moderniz text-3xl text-white">
                  Subsystems vs the ESERO reference kit
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
                Competitive edge
              </span>
            </div>
            <div className="mt-6 divide-y divide-white/10">
              {subsystemHighlights.map((row) => (
                <div key={row.subsystem} className="grid gap-4 py-5 sm:grid-cols-[0.9fr,1fr,1.3fr] sm:items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Sub-system</p>
                    <p className="mt-1 text-lg font-semibold text-white">{row.subsystem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Key specification</p>
                    <p className="mt-2 text-sm text-slate-200/85">{row.spec}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Advantage</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{row.advantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/15 via-slate-900/70 to-amber-400/15 p-8 shadow-2xl backdrop-blur sm:p-10">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr,0.75fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-100">
                  Why Lunaris-X is ahead 🔭
                </p>
                <h4 className="font-moderniz text-3xl text-white">
                  Front-runner platform for the 2025–26 ESERO CanSat competition
                </h4>
                <ul className="space-y-3 text-slate-200/90">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" aria-hidden />
                      <span className="text-sm leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-slate-100 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                <p className="relative">
                  Net result: a ballasted (≥300 g) CanSat platform that delivers laboratory-grade telemetry, exceeds ESA reliability guidelines, stays eco-friendly via rechargeables, and keeps payload headroom for experimental missions while mirroring radio logs to onboard storage for resilience.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
