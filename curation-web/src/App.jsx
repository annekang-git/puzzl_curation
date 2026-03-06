import Header from './components/Header';
import Footer from './components/Footer';
import ProductRail from './components/ProductRail';
import { curatedProducts } from './data/products';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4">
        <section id="tops" className="pt-8">
          <ProductRail 
            title="👕 12-14세 남아 인기 상의" 
            subtitle="스타일리시한 데일리 룩의 시작"
            products={curatedProducts.boysTops}
            accentColor="blue"
          />
        </section>

        <div className="my-12 border-t border-stone-200"></div>

        <section id="bottoms">
          <ProductRail 
            title="👖 12-14세 남아 하의" 
            subtitle="편안함과 스타일을 동시에"
            products={curatedProducts.boysBottoms}
            accentColor="emerald"
          />
        </section>

        <div className="my-12 border-t border-stone-200"></div>

        <section id="sale" className="pb-12">
          <ProductRail 
            title="🔥 특가 상품" 
            subtitle="놓치면 후회할 특별 할인"
            products={curatedProducts.onSale}
            accentColor="rose"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App
