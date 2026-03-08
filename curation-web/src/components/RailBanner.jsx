export default function RailBanner({ imageSrc, text }) {
  return (
    <div className="flex items-center justify-center gap-6 py-8">
      <img 
        src={imageSrc} 
        alt="마스코트" 
        className="w-48 h-48 md:w-64 md:h-64 object-contain"
      />
      <p 
        className="text-xl md:text-2xl text-purple-600"
        style={{ fontFamily: "'Jua', sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}
