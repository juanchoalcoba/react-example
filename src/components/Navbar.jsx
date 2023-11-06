import FechaHoraActual from "./FechaHora"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around">
        <div className="flex flex-row">
            <img src="/12.png" className='w-[80px] rounded-xl opacity-3' alt="" />
        </div>
       
        <div className="text-white">
            <ul className="flex cursor-pointer flex-row justify-center font-semibold text-[1.5rem] items-center">
                <li className="mr-8">CONTACTO</li>
                <li>SOBRE MI</li>
            </ul>
        </div>
                <FechaHoraActual />
      
    </div>
  )
}

export default Navbar