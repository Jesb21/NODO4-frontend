import React from 'react';

interface CardField {
  label: string;
  value: string | React.ReactNode;
  badge?: boolean;
}

interface CardProps {
  avatar: string;
  name: string;
  email: string;
  variant?: 'compact' | 'detailed';
  fields?: CardField[];
  actions?: React.ReactNode;
  menuIcon?: React.ReactNode;
  topRightContent?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  avatar,
  name,
  email,
  variant = 'compact',
  fields = [],
  actions,
  menuIcon,
  topRightContent,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
            {avatar}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {topRightContent}
          {menuIcon && (
            <button className="text-gray-800 hover:text-gray-900">
              {menuIcon}
            </button>
          )}
        </div>
      </div>

      {/* Fields */}
      {variant === 'compact' ? (
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={index} className="flex items-center justify-between py-1">
              <span className="text-gray-900 text-sm font-normal">{field.label}</span>
              {field.badge ? (
                <span className="bg-gray-500 text-white text-xs px-3 py-1 rounded-md font-medium">
                  data
                </span>
              ) : (
                <span className="text-gray-900 text-sm">{field.value}</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-5">
            {fields.map((field, index) => (
              <div key={index}>
                <p className="text-gray-400 text-sm mb-1">{field.label}</p>
                <p className="text-gray-900 text-base">{field.value}</p>
              </div>
            ))}
          </div>
          {actions && <div className="flex gap-3">{actions}</div>}
        </div>
      )}
    </div>
  );
};

export default Card;