import { useRef } from 'react';
import ProductCard from './ProductCard';

export default function ProductRail({ title, subtitle, products, accentColor = "stone" }) {
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
    </section>
  );
}
