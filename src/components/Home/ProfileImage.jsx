export function ProfileImage({ src, alt }) {
  return (
    <div className="relative w-96 h-96 overflow-hidden rounded-lg shadow-xl">
      {/* Image Element */}
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}