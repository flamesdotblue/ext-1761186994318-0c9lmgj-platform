import { Milk, Wallet, Gauge, Droplets } from 'lucide-react';

const cards = [
  {
    title: 'Total Milk Collected',
    value: '12,480 L',
    delta: '+3.1% vs last week',
    icon: Milk,
    accent: 'from-emerald-500/20 to-emerald-400/10',
  },
  {
    title: 'Average Fat',
    value: '4.2%',
    delta: '+0.2%',
    icon: Gauge,
    accent: 'from-sky-500/20 to-sky-400/10',
  },
  {
    title: 'Average SNF',
    value: '8.6%',
    delta: '+0.1%',
    icon: Droplets,
    accent: 'from-violet-500/20 to-violet-400/10',
  },
  {
    title: 'Total Payouts',
    value: 'PKR 2.86M',
    delta: '+5.4%',
    icon: Wallet,
    accent: 'from-amber-500/20 to-amber-400/10',
  },
];

export default function Metrics() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.title}
          className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4"
        >
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.accent}`} />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">{c.title}</p>
              <p className="mt-2 text-2xl font-bold text-white">{c.value}</p>
              <p className="mt-1 text-xs text-emerald-400">{c.delta}</p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-200">
              <c.icon size={20} />
            </div>
          </div>
          <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-neutral-800">
            <div className="h-full w-2/3 rounded-full bg-emerald-500/70" />
          </div>
        </div>
      ))}
    </div>
  );
}
