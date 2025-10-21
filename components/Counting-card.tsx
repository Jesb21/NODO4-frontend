import { ReactNode } from "react";

interface CountingCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  percentage?: string;
  icon?: ReactNode;
}

export default function CountingCard({
  title,
  value,
  subtitle,
  percentage,
  icon,
}: CountingCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-64 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon && <div className="text-purple-600 text-lg">{icon}</div>}
      </div>

      {/* Value */}
      <div className="mt-3">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>

      {/* Footer */}
      {percentage && (
        <div className="mt-3 text-xs text-gray-400">
          {percentage}
        </div>
      )}
    </div>
  );
}