export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 text-stone-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0zNiAxNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 backdrop-blur-sm rounded-full text-sm font-medium text-amber-800">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span>'김미정' 회원님 감사합니다</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block">PUZZL</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-stone-600 text-lg leading-relaxed">
            퍼즐을 이용해주셔서 감사합니다.
            <br />
            감사한 마음을 담아 5% 추가 할인 코드 <span className="text-amber-600 font-semibold">'formijung'</span> 을 발급하였으며
            <br />
            12-14세 남아를 위한 인기 추천 상품을 골라보았습니다.
            <br />
            즐거운 쇼핑되세요!
          </p>
          
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
    </header>
  );
}
