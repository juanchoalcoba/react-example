import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ImagenAnimada = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const tl = gsap.timeline();

    tl.fromTo(section, {
      scale: 1, // Inicia con el tamaño original
      opacity: 1, // Inicia completamente visible
    }, {
      scale: 0.1, // Se reduce ligeramente
      opacity: 0.8, // Se vuelve un poco menos visible
      duration: 0.5, // Duración de la animación
      ease: 'power1.inOut', // Curva de animación
      scrollTrigger: {
        trigger: section,
        start: 'top center', // Comienza la animación cuando el centro de la sección llega al top del viewport
        end: 'bottom top', // Termina la animación cuando el centro de la sección llega al bottom del viewport
        scrub: 1, // Anima la propiedad en relación con el scroll
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-around mt-24 section" ref={sectionRef}>
      <div className="">
        <h1 className="text-[#b0c1ca] font-bold text-8xl title-animation"><span className="text-yellow-400">U</span>RU<span className="text-[#6b91a5]">GUAY</span> <br /> <span><span className="text-[#6b91a5]">TEC</span>NOLOGIA</span></h1>
        <p className="text-[#c0dad4] w-[500px] font-light mt-8 text-4xl">Bievenidos al primer sitio uruguayo donde la tecnología esta en un mismo lugar!</p>
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