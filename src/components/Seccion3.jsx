import './Seccion3.css'
const Seccion3 = () => {
    return (
        <div className='text-white mt-24 rounded-xl flex flex-row justify-around backgroundimagen'>
            <img 
            className='imagen'
            src="./bandera.webp" alt="" />
            <div className="ml-12">
                <h1 className="text-8xl font-bold ">SIGUE AVANZANDO</h1>
                <p className="w-[500px] text-2xl mt-12 text-gray-300"> Este progreso tecnológico ha sido impulsado por el talento local en ingeniería de software y por un ambiente favorable para la innovación y la inversión en tecnología. </p>
            </div>
            <div className='mr-12'>
                <img 
                className="w-[600px] border border-white rounded-2x"
                src="./prog.webp" alt="" />
                
            </div>
        </div>
    )
}

export default Seccion3