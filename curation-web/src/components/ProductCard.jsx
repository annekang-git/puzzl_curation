import { getProductUrl } from '../data/products';

export default function ProductCard({ product }) {
  const hasDiscount = product.discount && product.discount !== "";
  
  return (
    <a 
      href={getProductUrl(product.productNo)}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card block group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase rounded-full">
            New
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">
            {product.discount} OFF
          </span>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <span className="brand-tag">{product.brand}</span>
        <h3 className="font-medium text-stone-800 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="price-tag">{product.finalPrice}</span>
          {hasDiscount && (
            <span className="discount-price">{product.regularPrice}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {product.sizes.slice(0, 3).map((size) => (
            <span 
              key={size} 
              className="px-2 py-0.5 text-xs bg-stone-100 text-stone-600 rounded"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
