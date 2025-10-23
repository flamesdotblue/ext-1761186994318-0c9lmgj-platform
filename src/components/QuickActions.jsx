import { PlusCircle, FileText, Users, RefreshCw } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-tight text-neutral-200">Quick Actions</h3>
        <span className="text-xs text-neutral-400">Streamline your daily workflow</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <ActionButton icon={PlusCircle} label="New Collection" href="#collections" variant="primary" />
        <ActionButton icon={Users} label="Add Farmer" href="#farmers" />
        <ActionButton icon={FileText} label="Generate Report" href="#reports" />
        <ActionButton icon={RefreshCw} label="Sync Data" href="#sync" />
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, label, href, variant = 'default' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-500';
  const styles =
    variant === 'primary'
      ? 'border-emerald-600 bg-emerald-500 text-black hover:bg-emerald-400'
      : 'border-neutral-800 bg-neutral-950 text-white hover:bg-neutral-900';

  return (
    <a className={`${base} ${styles}`} href={href}>
      <Icon size={18} />
      {label}
    </a>
  );
}
