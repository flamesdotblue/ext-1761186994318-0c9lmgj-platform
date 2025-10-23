import { useState } from 'react';
import { Menu, User, LogOut, Bell, Settings } from 'lucide-react';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import QuickActions from './components/QuickActions';
import ActivityFeed from './components/ActivityFeed';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 p-2 text-neutral-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle navigation"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-emerald-500/20 ring-1 ring-emerald-500/40" />
              <span className="font-semibold tracking-tight">Milk CMS</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md p-2 text-neutral-300 hover:bg-neutral-800">
              <Bell size={18} />
            </button>
            <button className="rounded-md p-2 text-neutral-300 hover:bg-neutral-800">
              <Settings size={18} />
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-800" />
            <button className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800">
              <User size={16} />
              <span className="hidden sm:inline">Admin</span>
            </button>
            <button className="rounded-md p-2 text-neutral-300 hover:bg-neutral-800">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? 'block' : 'hidden'} lg:block border-neutral-800/80 lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)] lg:py-6`}
        >
          <nav className="mt-4 space-y-1">
            {[
              { label: 'Dashboard', href: '#dashboard' },
              { label: 'Collections', href: '#collections' },
              { label: 'Farmers', href: '#farmers' },
              { label: 'Routes', href: '#routes' },
              { label: 'Reports', href: '#reports' },
              { label: 'Settings', href: '#settings' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
                onClick={() => setSidebarOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
            <p className="text-xs text-neutral-400">Daily Tip</p>
            <p className="mt-1 text-sm text-neutral-200">Keep lactometer calibrated and record SNF on-spot for accurate payouts.</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="pb-16">
          <section className="mb-8" id="dashboard">
            <Hero />
          </section>

          <section className="mb-8">
            <Metrics />
          </section>

          <section className="mb-8">
            <QuickActions />
          </section>

          <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
              <h3 className="mb-2 text-sm font-semibold tracking-tight text-neutral-200">Today’s Summary</h3>
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex items-center justify-between">
                  <span>Milk Collected</span>
                  <span className="font-medium text-white">1,240 L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg Fat</span>
                  <span className="font-medium text-white">4.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg SNF</span>
                  <span className="font-medium text-white">8.6%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Payout</span>
                  <span className="font-medium text-emerald-400">PKR 286,400</span>
                </div>
              </div>
              <div className="mt-4 h-24 w-full rounded-lg bg-gradient-to-r from-emerald-500/10 via-emerald-400/10 to-emerald-300/10 ring-1 ring-inset ring-emerald-500/20" />
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-neutral-800/80 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Milk Collection Management System — Empowering procurement with insight and speed.
      </footer>
    </div>
  );
}
