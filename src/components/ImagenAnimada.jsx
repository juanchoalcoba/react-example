import { gsap } from "gsap";
import { useEffect } from "react";

const ImagenAnimada = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Anima el componente para que inicie pequeño y se agrande rápidamente
    tl.fromTo('.section', {
        scale: 0.1, // Comienza con un tamaño muy pequeño
        opacity: 0, // Comienza completamente transparente
    }, {
        scale: 1, // Escala al tamaño original
        opacity: 1, // Se desvanecerá a completamente visible
        duration: 2, // Duración de la animación
        ease: 'power1.inOut', // Curva de animación
    });
}, []);


  return (
    <div className="flex items-center justify-around mt-24 section">
      <div className="">
        <h1 className="text-[#77b7db]  font-bold text-8xl title-animation">URU<span className="text-[#2c678a]">GUAY</span> <br/> <span><span className="text-[#2c678a]">TEC</span>NOLOGIA</span></h1>
        <p className="text-[#c0dad4] w-[500px] font-bold mt-8 text-xl">Bievenidos al primer sitio uruguayo donde la tecnología esta en un mismo lugar!</p>
        
        <div className="mt-8">
        <button className="text-white border border-white px-8 py-3 rounded-2xl">PROXIMAMENTE</button>
        <button className="text-white border border-white px-8 py-3 ml-8 rounded-2xl">TENDENCIAS</button>
        </div>
      </div>

      <div style={{ opacity: '0.8' }}>
  <video autoPlay muted loop className="w-[600px] rounded-xl" controls>
    <source src="/uruguaynatural.mp4" type="video/mp4" />
    Tu navegador no soporta videos en HTML5.
  </video>
</div>
    </div>
  )
}

export default ImagenAnimada;

