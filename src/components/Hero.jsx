import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div className="relative h-[56vh] w-full md:h-[64vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.08),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
              Milk Collection Management System
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300 md:text-base">
              A responsive, modern dashboard for end-to-end milk procurement: collections, farmer payouts, route summaries, and AI-assisted insights.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#collections"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Rocket size={16} />
                New Collection
              </a>
              <a
                href="#reports"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Download size={16} />
                Download Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
