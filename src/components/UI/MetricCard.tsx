import React from "react";

export function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-col p-4 bg-neutral-800   rounded-xl">
      <div className="flex items-center gap-2 text-slate-400 text-sm">
        {icon} <span>{label}</span>
      </div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}
