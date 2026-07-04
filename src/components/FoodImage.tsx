type FoodImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function FoodImage({ src, alt, className = '' }: FoodImageProps) {
  return (
    <div className={`image-fallback ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}
