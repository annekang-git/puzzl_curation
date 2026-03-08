export default function RailBanner({ imageSrc, text }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 px-4">
      <img 
        src={imageSrc} 
        alt="마스코트" 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain flex-shrink-0"
      />
      <div className="relative">
        {/* Speech bubble */}
        <div 
          className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl px-5 py-4 sm:px-8 sm:py-5 shadow-lg border-2 border-purple-200"
        >
          {/* Bubble tail - hidden on mobile, shown on sm+ */}
          <div className="hidden sm:block absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-r-[16px] border-r-purple-200 border-b-[12px] border-b-transparent"></div>
            <div className="absolute top-1/2 left-[3px] -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[14px] border-r-purple-100 border-b-[10px] border-b-transparent"></div>
          </div>
          {/* Bubble tail - shown on mobile only (pointing up) */}
          <div className="block sm:hidden absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[16px] border-b-purple-200 border-r-[12px] border-r-transparent"></div>
            <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-b-[14px] border-b-purple-100 border-r-[10px] border-r-transparent"></div>
          </div>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 font-medium text-center sm:text-left whitespace-pre-wrap break-keep"
            style={{ fontFamily: "'Jua', sans-serif" }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
