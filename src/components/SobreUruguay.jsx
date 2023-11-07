import { useEffect } from 'react';
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const SobreUruguay = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo('.probandoscroll', {
            opacity: 0, // Comienza completamente transparente
        }, {
            opacity: 1, // Se desvanecerá a completamente visible
            scrollTrigger: {
                trigger: '.probandoscroll',
                start: 'top center', // Inicia cuando el centro del elemento alcanza la parte superior de la ventana
                end: 'bottom center', // Finaliza cuando el centro del elemento alcanza la parte inferior de la ventana
                scrub: true, // Permite animaciones sincronizadas con el scroll
            },
        });

        tl.fromTo('.puntos-suspensivos', {
            opacity: 1, // Comienza completamente visible
        }, {
            opacity: 0, // Se desvanecerá a completamente transparente
            scrollTrigger: {
                trigger: '.puntos-suspensivos',
                start: 'top center', // Inicia cuando el centro del elemento alcanza la parte superior de la ventana
                end: 'bottom center', // Finaliza cuando el centro del elemento alcanza la parte inferior de la ventana
                scrub: true, // Permite animaciones sincronizadas con el scroll
            },
        });
    }, []);

    return (
        <div className="flex flex-row justify-around mt-24 probandoscroll" >
            <div>
                <img 
                className="w-[300px] border border-white rounded-2xl"
                src="/1.jpg" alt="" />
            </div>
            <div className="text-white" id="content" >
                <h1 className="text-7xl font-bold">EXPONENTE MUNDIAL</h1>
                <p className="text-xl mt-12 w-[500px] text-left">Uruguay ha experimentado un crecimiento significativo en la industria de exportación de software en los últimos años. Este país sudamericano ha emergido como un actor destacado en el mercado global de tecnología, atrayendo la atención de empresas internacionales y convirtiéndose en un hub de desarrollo de software.</p>
                <hr className="border border-gray-400 mt-6"/>
                <div className="mt-8 flex flex-row justify-around">
                <img
                className="w-[130px] mt-12"
                 src="./genexus.png" alt="" />
                 <img
                 className="w-[80px]"
                 src="./latu.png" alt="" />
                 <img
                className="w-[120px] mt-12"
                 src="./meli.png" alt="" />
                 
                 </div>
            </div>
            <div className="puntos-suspensivos text-white">...</div>
        </div>
    )
}

export default SobreUruguay;