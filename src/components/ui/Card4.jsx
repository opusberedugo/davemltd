import React from 'react';

export default function Card4({ 
  overline, 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  buttonText, 
  onButtonClick,
  className = ''
}) {
  return (
    <div className={`rounded-2xl shadow-sm overflow-hidden flex flex-col ${className}`}>
      <div className="bg-white p-6 flex flex-col flex-1">
        {(overline || buttonText) && (
          <div className="flex items-center justify-between mb-4">
            {overline && <span className="text-sm font-semibold text-slate-800">{overline}</span>}
            {buttonText && (
              <div>
                <button 
                  onClick={onButtonClick}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-gray-50 transition-colors uppercase tracking-wide">
                  {buttonText}
                </button>
              </div>
            )}
          </div>
        )}
        
        {(title || description) && (
          <div className="flex flex-col flex-1">
            {title && <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>}
            {description && <p className="text-slate-500 text-base leading-relaxed mb-2 flex-1">{description}</p>}
          </div>
        )}
      </div>

      {imageSrc && (
        <div className="w-full h-48 shrink-0">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
