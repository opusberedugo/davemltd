import React from 'react';

export default function Card3({ 
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
      {imageSrc && (
        <div className="w-full h-36 sm:h-40 xl:h-48 shrink-0">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="bg-white p-4 sm:p-5 xl:p-6 flex flex-col flex-1">
        {(overline || buttonText) && (
          <div className="flex items-center justify-between mb-3 xl:mb-4">
            {overline && <span className="text-xs sm:text-sm font-semibold text-slate-800">{overline}</span>}
            {buttonText && (
              <div>
                <button 
                  onClick={onButtonClick}
                  className="border border-gray-300 rounded-md px-2.5 py-1 text-[11px] sm:text-xs font-bold text-slate-800 hover:bg-gray-50 transition-colors uppercase tracking-wide">
                  {buttonText}
                </button>
              </div>
            )}
          </div>
        )}
        
        {(title || description) && (
          <div className="flex flex-col flex-1">
            {title && <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-900 mb-1.5 xl:mb-2">{title}</h3>}
            {description && <p className="text-slate-500 text-xs sm:text-sm xl:text-base leading-relaxed mb-2 flex-1">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
