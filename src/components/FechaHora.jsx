import { useState, useEffect } from 'react';

const FechaHoraActual = () => {
  const [fechaHora, setFechaHora] = useState(new Date());
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let frameId;

    const updateFechaHora = () => {
      setFechaHora(new Date());
      frameId = requestAnimationFrame(updateFechaHora);
    };

    frameId = requestAnimationFrame(updateFechaHora);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const fechaHoraFormateada = fechaHora.toLocaleDateString('es-ES', options).toUpperCase();
  const fechaHoraFormateadaEn = fechaHora.toLocaleDateString('en-US', options).toUpperCase();

  return (
    <div
      className="border border-white flex flex-col items-center w-[520px] justify-center ml-36 bg-gray-200 bg-opacity-10 text-white px-8 rounded-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-xl text-blue-200">
        {hovered ? fechaHoraFormateadaEn : fechaHoraFormateada}
      </p>
    </div>
  );
}

export default FechaHoraActual;