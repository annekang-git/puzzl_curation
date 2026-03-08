import { useRef } from 'react';
import ProductCard from './ProductCard';

export default function ProductRail({ title, subtitle, products, accentColor = "stone", showCTA = false }) {
  const scrollRef = useRef(null);
  
  const colorClasses = {
    stone: "from-stone-900",
    amber: "from-amber-600",
    rose: "from-rose-600",
    emerald: "from-emerald-600",
    blue: "from-blue-600"
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-1 h-8 bg-gradient-to-b ${colorClasses[accentColor]} to-transparent rounded-full`}></div>
            <h2 className="rail-title mb-0">{title}</h2>
          </div>
          {subtitle && (
            <p className="text-stone-500 ml-4 pl-3">{subtitle}</p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-stone-100 transition-colors"
            aria-label="이전"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-stone-100 transition-colors"
            aria-label="다음"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div ref={scrollRef} className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4 md:gap-6" style={{ width: 'max-content' }}>
          {products.map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[160px] md:w-[200px] lg:w-[240px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA with mascot - only on last rail */}
      {showCTA && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
          <img 
            src="/puzzle-mascot.png" 
            alt="퍼즐 마스코트" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain flex-shrink-0"
          />
          <div className="relative">
            <a 
              href="https://puzzl.kr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl px-5 py-4 sm:px-8 sm:py-5 shadow-lg border-2 border-purple-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
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
                퍼즐의 18,000 개 상품 더 구경하러 가기! <span className="text-amber-500 animate-pulse">Click!</span>
              </p>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
