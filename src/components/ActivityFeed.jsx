import { Truck, FlaskConical, DollarSign, UserPlus } from 'lucide-react';

const items = [
  {
    icon: Truck,
    title: 'Route R2 completed',
    desc: 'Collected 420 L across 12 farmers',
    time: '10 min ago',
  },
  { icon: FlaskConical, title: 'QC Update', desc: 'Fat 4.5%, SNF 8.8%', time: '24 min ago' },
  { icon: DollarSign, title: 'Payouts processed', desc: 'PKR 120,400 disbursed', time: '1 hr ago' },
  { icon: UserPlus, title: 'New farmer added', desc: 'Farmer ID F-204 (Village Kotli)', time: '2 hr ago' },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
      <h3 className="mb-3 text-sm font-semibold tracking-tight text-neutral-200">Recent Activity</h3>
      <ul className="space-y-3">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-200">
              <it.icon size={16} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white">{it.title}</p>
                <span className="text-xs text-neutral-400">{it.time}</span>
              </div>
              <p className="text-sm text-neutral-300">{it.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
