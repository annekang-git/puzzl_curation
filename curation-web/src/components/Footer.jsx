export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">PUZZL</h3>
            <p className="text-stone-400">Premium Kids Fashion</p>
          </div>
          
          <div className="flex justify-center gap-6 text-sm text-stone-400">
            <a href="https://puzzl.kr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              공식 웹사이트
            </a>
            <span>|</span>
            <a href="https://puzzl.kr/board/contact.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              고객센터
            </a>
          </div>
          
          <div className="pt-6 border-t border-stone-800 text-sm text-stone-500">
            <p>© 2026 PUZZL. All rights reserved.</p>
            <p className="mt-2">본 페이지의 상품 이미지 및 정보는 참고용이며, 실제 상품과 다를 수 있습니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
