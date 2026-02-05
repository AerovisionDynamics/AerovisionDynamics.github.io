import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Lunaris‑X",
  description: "Lunaris‑X name usage disclaimer.",
};

export default function LunarisXDisclaimerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16 sm:py-20">
        <Link
          href="/lunaris-x"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          ← Back to Lunaris‑X
        </Link>
        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Disclaimer
        </div>
        <div className="space-y-5 text-base leading-relaxed text-slate-800">
          <p>
            The “Lunaris-X” name is used strictly for our satellite. For our
            Lunaris-X satellite project, a team member unfortunately changed the
            team name from “Aerovision Dynamics” to “Lunaris-X” without our
            permission.
          </p>
          <p>
            This member has also been claiming to be the project leader, which
            was disagreed upon by our team. Some promotional posters and videos
            have been modified to feature the unofficial “Lunaris-X” logo and an
            unofficial website. We worked very hard on our CanSat and we do not
            support
          </p>
          <p>We do not support this.</p>
          <p className="font-semibold text-slate-900">
            TL;DR: We are not affiliated with the team called “Lunaris-X”. The
            name remains reserved as our satellite name, not the team name.
            The person claiming to be the team/project leader is NOT accepted in our team.
          </p>
        </div>
      </div>
    </main>
  );
}
