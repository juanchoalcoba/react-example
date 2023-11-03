
const Navbar = () => {
  return (
    <div className="flex flex-row justify-around">
        <div className="flex flex-row">
            <img src="/12.png" className='w-[120px] rounded-xl opacity-3' alt="" />
            <img src="/gif.gif" className='w-[70px] opacity-7 ml-12' alt="" />
        </div>
       
        <div className="text-white">
            <ul className="flex cursor-pointer flex-row justify-center font-light text-[1.5rem] items-center">
                <li className="mr-8">CONTACTO</li>
                <li>SOBRE MI</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar