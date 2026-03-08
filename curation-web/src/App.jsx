import Header from './components/Header';
import Footer from './components/Footer';
import ProductRail from './components/ProductRail';
import RailBanner from './components/RailBanner';
import { curatedProducts } from './data/products';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4">
        <section id="tops" className="pt-8">
          <RailBanner 
            imageSrc="/mascot-tops.png" 
            text="요즘 아이들이 제일 좋아하는 상의들이에요!" 
          />
          <ProductRail 
            title="👕 12-14세 남아 인기 상의" 
            subtitle="스타일리시한 데일리 룩의 시작"
            products={curatedProducts.boysTops}
            accentColor="blue"
          />
        </section>

        <div className="my-12 border-t border-stone-200"></div>

        <section id="bottoms">
          <RailBanner 
            imageSrc="/mascot-bottoms.png" 
            text="딱 맞는 사이즈만 골라왔어요!" 
          />
          <ProductRail 
            title="👖 12-14세 남아 하의" 
            subtitle="편안함과 스타일을 동시에"
            products={curatedProducts.boysBottoms}
            accentColor="emerald"
          />
        </section>

        <div className="my-12 border-t border-stone-200"></div>

        <section id="scarves">
          <RailBanner 
            imageSrc="/mascot-scarves.png" 
            text="엄마도 예뻐질 시간! 💕" 
          />
          <ProductRail 
            title="🧣 엄마를 위한 봄맞이 스카프" 
            subtitle="봄 스타일을 완성하는 럭셔리 스카프"
            products={curatedProducts.scarves}
            accentColor="rose"
          />
        </section>

        <div className="my-12 border-t border-stone-200"></div>

        <section id="crossbags">
          <RailBanner 
            imageSrc="/mascot-crossbags.png" 
            text="아빠한테도 센스있게 한 개!" 
          />
          <ProductRail 
            title="🎒 아빠를 위한 크로스백" 
            subtitle="실용적이고 세련된 데일리 백"
            products={curatedProducts.crossbags}
            accentColor="stone"
          />
        </section>

        <div className="my-12 border-t border-stone-200"></div>

        <section id="versace-home" className="pb-12">
          <RailBanner 
            imageSrc="/mascot-living.png" 
            text="집도 럭셔리하게! 베르사체 홈이에요 ✨" 
          />
          <ProductRail 
            title="🏠 럭셔리 리빙 아이템" 
            subtitle="베르사체 홈 컬렉션"
            products={curatedProducts.versaceHome}
            accentColor="amber"
            showCTA={true}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App
