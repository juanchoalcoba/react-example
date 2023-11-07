import  { useEffect } from 'react';
import './Departamentos.css'; 

const Departamentos = () => {
  const handleScroll = () => {
    const cards = document.querySelectorAll('.card-animation');

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);

      if (isVisible) {
        card.classList.add('animate');
      } else {
        card.classList.remove('animate');
      }
    });
  };

  useEffect(() => {
    handleScroll(); 

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="departamentos-container mt-24">
      {/* Tarjeta 1 */}
      <div className="card-animation w-[20rem] rounded-xl flex flex-col justify-around border border-gray-400 sm:flex sm:flex-col">
        <div className="text-white">
          <h2 className="text-2xl text-center">Montevideo</h2>
          <p className="p-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quas!</p>
        </div>
        <div className="flex justify-center">
          <img className="w-[20rem] p-2" src="montevideo.png" alt="" />
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="card-animation w-[20rem] rounded-xl flex flex-col justify-around border border-gray-400">
        <div className="text-white">
          <h2 className="text-2xl text-center">Fray Bentos</h2>
          <p className="p-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quas!</p>
        </div>
        <div className="flex justify-center">
          <img className="w-[18rem] p-2" src="rionegro.png" alt="" />
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="card-animation w-[20rem] rounded-xl flex flex-col justify-around border border-gray-400">
        <div className="text-white">
          <h2 className="text-2xl text-center">Durazno</h2>
          <p className="p-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quas!</p>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[16rem] p-2 rounded-3xl" src="durazno.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Departamentos;