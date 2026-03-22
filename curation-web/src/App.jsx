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
        <section id="moncler-kids-size4" className="pt-8">
          <RailBanner 
            imageSrc="/mascot-tops.png" 
            text="몽클레어 키즈 4사이즈 모음! 👶" 
          />
          <ProductRail 
            title="🧸 몽클레어 키즈 4사이즈" 
            subtitle="프리미엄 키즈 컬렉션 12종"
            products={curatedProducts.monclerKidsSize4}
            accentColor="blue"
          />
        </section>

        <section id="moncler-kids-size14">
          <RailBanner 
            imageSrc="/mascot-bottoms.png" 
            text="몽클레어 키즈 14사이즈 모음! 🧒" 
          />
          <ProductRail 
            title="👕 몽클레어 키즈 14사이즈" 
            subtitle="프리미엄 키즈 컬렉션 19종"
            products={curatedProducts.monclerKidsSize14}
            accentColor="emerald"
          />
        </section>

        <section id="other-kids" className="pb-12">
          <RailBanner 
            imageSrc="/mascot-scarves.png" 
            text="다양한 브랜드 키즈 4/14 사이즈! ✨" 
          />
          <ProductRail 
            title="🌟 기타 브랜드 키즈 4/14사이즈" 
            subtitle="켄조, 발망, 베르사체, 스톤아일랜드 등 37종"
            products={curatedProducts.otherKidsSize4_14}
            accentColor="violet"
            showCTA={true}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App
