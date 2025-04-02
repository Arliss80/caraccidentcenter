import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto'
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <picture>
      <source
        srcSet={`${imgSrc}?format=webp`}
        type="image/webp"
      />
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        loading={loading}
        fetchpriority={fetchpriority}
      />
    </picture>
  );
}