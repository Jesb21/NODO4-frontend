import React from 'react';

interface CountingCardProps {
  title: string;
  count: string | number;
  subtitle1: string;
  subtitle2: string;
  iconSrc?: "/Countingcar/Icon.png";
}

const CountingCard: React.FC<CountingCardProps> = ({
  title,
  count,
  subtitle1,
  subtitle2,
  iconSrc,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-500 text-sm">{title}</span>
        {iconSrc && (
          <img src={iconSrc} alt="" className="w-6 h-6 opacity-60" />
        )}
      </div>

      {/* Count */}
      <div className="mb-2">
        <h2 className="text-5xl font-bold text-gray-900">{count}</h2>
      </div>

      {/* Subtitles */}
      <div className="space-y-0">
        <p className="text-gray-600 text-sm">{subtitle1}</p>
        <p className="text-gray-600 text-sm">{subtitle2}</p>
      </div>
    </div>
  );
};

export default CountingCard;