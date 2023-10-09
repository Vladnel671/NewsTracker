// import React, {useState, useEffect} from 'react';
//
// interface ILazyImageProps {
//     src: string,
//     alt: string
// }
//
// export const LazyImage: React.FC<ILazyImageProps> = ({ src, alt }) => {
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//
//     useEffect(() => {
//         const loadImage = async () => {
//             const response = await fetch(src);
//             const blob = await response.blob();
//             const objectURL = URL.createObjectURL(blob);
//             setImageSrc(objectURL);
//         };
//
//         if (IntersectionObserver && src) {
//             const options = {
//                 root: null,
//                 rootMargin: '0px',
//                 threshold: 0.1  // Порог видимости изображения
//             };
//
//             const observer = new IntersectionObserver(([entry]) => {
//                 if (entry.isIntersecting) {
//                     loadImage();
//                     observer.unobserve(entry.target);
//                 }
//             }, options);
//
//             observer.observe(imageRef.current);
//
//             return () => {
//                 observer.unobserve(imageRef.current);
//             };
//         } else {
//             // Если Intersection Observer не поддерживается, загружаем изображение сразу
//             loadImage();
//         }
//     }, [src]);
//
//     return <img loading='lazy' ref={imageRef} src={imageSrc} alt={alt} />;
// }