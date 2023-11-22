'use client';
import Cards from './Card';

export default function Gallery() {
  return (
    <div className="flex flex-row justify-center gap-6 mt-16">
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
