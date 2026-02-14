"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Orbit, Sparkles } from "lucide-react";

const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFMEY3RkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+";

const stats = [
  {
    label: "Reliability",
    value: "Custom PCB",
    detail:
      "Custom designed circuit board with carefully soldered joints using the Nan Ya NP-140F as material with 0.05-0.10% moisture absorption. Extremely resistant against forces and vibrations.",
  },
  {
    label: "Airframe",
    value: "Reinforced Airframe",
    detail:
      "Airframe designed with thick layer walls. Outer layers are designed with pure durability in mind, unused space internally is filled with impact absorbing infill.",
  },
  {
    label: "Proven durability",
    value: "Advanced stress testing methods",
    detail:
      "Vibration and G-force tests simultaneously performed by our custom test vehicle. Other tests include shock loads and drop tests.",
  },
  {
    label: "Built, not bought",
    value: "Custom designed 8.8dbi Yagi antenna",
    detail:
      "The ground station features this custom purpose-built antenna, proven to reliably recieve signals from the quarter wave antenna up to 1km under heavy vibrations.",
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
    spec: "High efficiency BMP280 barometric/temp sensor. Calibrated for precision.",
    advantage: "Allows for estimation of altitude with precision.",
  },
  {
    subsystem: "Attitude & motion",
    spec: "9-axis IMU (accelerometer + gyro + magnetometer) sampled at ≥60 Hz",
    advantage:
      "60× the minimum 1 Hz telemetry requirement. Recieves all data necessary to reconstruct the orientation with a visual flight path",
  },
  {
    subsystem: "Power architecture",
    spec: "2000 mAh+ Li-Po (expandable) + high-efficiency switching regulator (1 A shared on 5 V & 3.3 V rails)",
    advantage:
      "Rechargeable design eliminates disposable 9 V blocks (cuts e-waste) and massively increases current headroom (Arduino Uno limit 50 mA on 3.3 V); supports power-hungry upgrades such as LTE/5G radios or cameras without redesign.",
  },
  {
    subsystem: "Mass & structure",
    spec: "Carbon-fibre-reinforced PET-G airframe, custom PCB; ballasted to ≥300 g",
    advantage:
      "Rugged CF-PET-G shell keeps the stack light. Ballast is added to hit ESA’s ≥300 g minimum and optimise CG/stability without overstressing the airframe.",
  },
  {
    subsystem: "Data integrity",
    spec: "Live 433 MHz radio down-link (primary) + mirrored logging to flash & Micro-SD (backup)",
    advantage:
      "Radio remains the primary way to communicate. Micro SD allows us to capture data during launch when the CanSat's radio waves are shielded by the metal rocket body.",
  },
  {
    subsystem: "Software stack",
    spec: "MicroPython",
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
  "Next-generation architecture – departs from the Arduino-centric starter kit, leveraging a modern 32-bit Soc and custom PCB",
  "Sustainability by design – rechargeable Li-Po, reusable airframe and minimal wiring reduce consumables and waste while increasing reliability.",
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

export default function LunarisXNewPage() {
  const lines = useMemo(
    () => [
      "➜ boot sequence: OK",
      "→ Welcome, user.",
      "→ Mission: Build a satellite.",
      "→ Aerovision Dynamics online.",
      "→ Challenge accepted.",
    ],
    []
  );

  const [typedCount, setTypedCount] = useState(0);
  const [caretOn, setCaretOn] = useState(true);
  const [hidden, setHidden] = useState(false);

  const fullText = useMemo(() => lines.join("\n"), [lines]);

  const [stars, setStars] = useState([]);

  // Starfield (generated after mount to avoid SSR hydration mismatch)
  useEffect(() => {
    const count = 90;
    const generated = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() < 0.85 ? 1 : 2;
      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        opacity: 0.25 + Math.random() * 0.65,
        twinkleDur: 1.6 + Math.random() * 3.2,
        driftDur: 18 + Math.random() * 32,
        delay: Math.random() * 4,
      };
    });
    setStars(generated);
  }, []);

  useEffect(() => {
    const totalDurationMs = 3000;
    const totalChars = fullText.length;
    const intervalMs = Math.max(
      20,
      Math.floor(totalDurationMs / Math.max(1, totalChars))
    );
    let index = 0;

    const typer = setInterval(() => {
      index += 1;
      setTypedCount(index);
      if (index >= totalChars) clearInterval(typer);
    }, intervalMs);

    const caret = setInterval(() => setCaretOn((p) => !p), 450);

    const fade = setTimeout(() => setHidden(true), totalDurationMs);

    return () => {
      clearInterval(typer);
      clearInterval(caret);
      clearTimeout(fade);
    };
  }, [fullText]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.9)_70%)]" />

        <div className="absolute inset-0">
          {stars.map((s) => (
            <span
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.opacity,
                animation: `lx-twinkle ${s.twinkleDur}s ease-in-out ${s.delay}s infinite alternate, lx-drift ${s.driftDur}s linear ${s.delay}s infinite`,
                filter:
                  s.size === 2
                    ? "drop-shadow(0 0 6px rgba(255,255,255,0.35))"
                    : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`pointer-events-none fixed inset-0 z-20 flex items-center justify-center transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">
          <h1 className="font-moderniz text-4xl font-semibold tracking-tight text-white animate-[lx-text-glow_3.6s_ease-in-out_infinite] sm:text-6xl lg:text-7xl">
            Lunaris-X
          </h1>
          <p className="font-moderniz mt-4 text-base font-medium text-slate-300 sm:text-lg">
            By team Aerovision Dynamics
          </p>

          <div className="mt-6 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm text-slate-200 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <pre
              className="whitespace-pre-wrap"
              style={{
                fontFamily:
                  "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace",
              }}
            >
              {fullText.slice(0, typedCount)}
              {caretOn && typedCount < fullText.length ? "█" : ""}
            </pre>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 transition-opacity duration-1000 ease-in-out ${
          hidden ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:py-20">
          <section className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:border-white/30 hover:bg-white/15"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                <Sparkles className="h-3 w-3 text-amber-200" />
                Official Lunaris-X page by Aerovision Dynamics
              </div>
            </div>

            <div className="relative flex w-full items-center justify-center">
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ transform: "translateY(-30%)" }}
              >
                <span className="mx-auto text-center font-moderniz text-3xl uppercase tracking-[0.3em] text-white animate-[lx-text-glow_3.6s_ease-in-out_infinite] sm:text-4xl lg:text-5xl">
                  Introducing lunaris-x
                </span>
              </div>
              <Image
                src="/PCB.webp"
                alt="Lunaris-X PCB render"
                width={1600}
                height={900}
                className="relative h-auto w-full max-w-4xl object-cover drop-shadow-[0_35px_120px_rgba(0,0,0,0.75)]"
                priority
              />
            </div>
          </section>

          <section className="grid items-start gap-8 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  <Orbit className="h-4 w-4" />
                  Technical deck
                </div>
                <h2 className="font-moderniz text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  Lunaris-X CanSat
                </h2>
                <div className="max-w-2xl space-y-3 text-lg text-slate-200/85">
                  <p>
                    Primary mission: Use the BMP280 sensor to measure temperature and air pressure. Air pressure can be calculated to accurately determine altitude.
                  </p>
                  <p>
                    Secondary mission: Use a custom Python script to convert raw data into keyframes, then apply a machine‑learning LLM algorithm to smooth out imperfections and fine‑tune the data as an additional calibration step after receiving it.
                  </p>
                </div>
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

          <section className="flex items-center gap-10">
            <div className="flex w-1/4 shrink-0 justify-center lg:justify-start">
              <div
                className="relative w-full max-w-[320px] sm:max-w-[360px]"
                style={{
                  "--overlay-x": "0%",
                  "--overlay-y": "0%",
                  "--overlay-scale": 1,
                  "--overlay-rotate": "0deg",
                  "--overlay-opacity": 1,
                  "--glow-opacity-min": 0.7,
                  "--glow-opacity-max": 0.9,
                  "--glow-speed": "4.5s",
                  "--glow-color-1": "76, 80, 255",
                  "--glow-color-2": "86, 35, 160",
                  "--glow-alpha-1": 0.7,
                  "--glow-alpha-2": 0.7,
                  "--glow-alpha-1-peak": 0.9,
                  "--glow-alpha-2-peak": 0.9,
                  "--glow-size-1": "14px",
                  "--glow-size-2": "34px",
                  "--glow-size-1-peak": "22px",
                  "--glow-size-2-peak": "58px",
                }}
              >
                <Image
                  src="/newesp.webp"
                  alt="ESP32 module"
                  width={620}
                  height={1024}
                  className="h-auto w-full object-contain drop-shadow-[0_35px_120px_rgba(0,0,0,0.75)]"
                />
                <Image
                  src="/espoverlay.webp"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 360px, 320px"
                  className="pointer-events-none object-contain mix-blend-screen"
                  style={{
                    transform:
                      "translate(var(--overlay-x), var(--overlay-y)) scale(var(--overlay-scale)) rotate(var(--overlay-rotate))",
                    opacity: "var(--overlay-opacity)",
                    animation: "lx-esp-glow var(--glow-speed) ease-in-out infinite",
                  }}
                />
                <Image
                  src="/espoverlay.webp"
                  alt="ESP32 overlay details"
                  fill
                  sizes="(min-width: 640px) 360px, 320px"
                  className="object-contain"
                  style={{
                    transform:
                      "translate(var(--overlay-x), var(--overlay-y)) scale(var(--overlay-scale)) rotate(var(--overlay-rotate))",
                  }}
                />
              </div>
            </div>
            <div className="min-w-0 w-3/4 space-y-4 pr-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                  On-board computer
                </p>
                <h3 className="font-moderniz text-3xl text-white">
                  ESP32 vs Arduino Uno R3
                </h3>
              </div>
              <div className="grid gap-4 text-sm text-slate-200/90">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    CPU + clock
                  </p>
                  <p className="mt-1">
                    ESP32: dual‑core 32‑bit @ 240 MHz • Arduino Uno R3 (ATmega328P):
                    8‑bit @ 16 MHz
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Memory
                  </p>
                  <p className="mt-1">
                    ESP32: 520 kB SRAM • Arduino Uno R3: 2 kB SRAM
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Flash storage
                  </p>
                  <p className="mt-1">
                    ESP32: 4 MB flash • Arduino Uno R3: 32 kB flash
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Connectivity
                  </p>
                  <p className="mt-1">
                    ESP32: native Wi‑Fi + BLE • Arduino Uno R3: no native wireless
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Outcome
                  </p>
                  <p className="mt-1">
                    More compute headroom, higher‑rate sensing, and easier expansion
                    without redesign.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
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
                  className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
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

          <section className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                  From Instagram
                </p>
                <h3 className="font-moderniz text-3xl text-white">Our socials</h3>
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

          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
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
                <div
                  key={row.subsystem}
                  className="grid gap-4 py-5 sm:grid-cols-[0.9fr,1fr,1.3fr] sm:items-start"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                      Sub-system
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {row.subsystem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                      Key specification
                    </p>
                    <p className="mt-2 text-sm text-slate-200/85">
                      {row.spec}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-200">
                      Advantage
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
                      {row.advantage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/15 via-slate-900/70 to-amber-400/15 p-8 shadow-2xl backdrop-blur sm:p-10">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr,0.75fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-100">
                  Why Lunaris-X is ahead
                </p>
                <h4 className="font-moderniz text-3xl text-white">
                  Overbuilt platform for future CanSats.
                </h4>
                <ul className="space-y-3 text-slate-200/90">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex gap-3">
                      <span
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-slate-100 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                <p className="relative">
                  Net result: A highly reliable, overbuilt and modern platform for future CanSats.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @keyframes lx-twinkle {
          0% {
            transform: scale(1);
            opacity: 0.25;
          }
          100% {
            transform: scale(1.25);
            opacity: 1;
          }
        }
        @keyframes lx-drift {
          0% {
            transform: translate3d(0px, 0px, 0);
          }
          100% {
            transform: translate3d(-80px, 60px, 0);
          }
        }
        @keyframes lx-esp-glow {
          0%,
          100% {
            opacity: var(--glow-opacity-min);
            filter: drop-shadow(
                0 0 var(--glow-size-1) rgba(var(--glow-color-1), var(--glow-alpha-1))
              )
              drop-shadow(
                0 0 var(--glow-size-2) rgba(var(--glow-color-2), var(--glow-alpha-2))
              );
          }
          50% {
            opacity: var(--glow-opacity-max);
            filter: drop-shadow(
                0 0 var(--glow-size-1-peak)
                  rgba(var(--glow-color-1), var(--glow-alpha-1-peak))
              )
              drop-shadow(
                0 0 var(--glow-size-2-peak)
                  rgba(var(--glow-color-2), var(--glow-alpha-2-peak))
              );
          }
        }
      `}</style>
    </main>
  );
}
