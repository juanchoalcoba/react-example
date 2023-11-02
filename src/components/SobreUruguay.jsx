
const SobreUruguay = () => {
    return (
        <div className="flex flex-row justify-around mt-24">
            <div>
                <img 
                className="w-[300px] border border-white rounded-2xl"
                src="/1.jpg" alt="" />
            </div>
            <div className="text-white">
                <h1 className="text-7xl font-bold">EXPONENTE MUNDIAL</h1>
                <p className="text-xl mt-12 w-[500px] text-left">Uruguay ha experimentado un crecimiento significativo en la industria de exportación de software en los últimos años. Este país sudamericano ha emergido como un actor destacado en el mercado global de tecnología, atrayendo la atención de empresas internacionales y convirtiéndose en un hub de desarrollo de software.</p>
                <hr className="border border-gray-400 mt-6"/>
                <div className="mt-8 flex flex-row justify-around">
                <img
                className="w-[150px] mt-12"
                 src="./genexus.png" alt="" />
                 <img
                 className="w-[100px]"
                 src="./latu.png" alt="" />
                 <img
                className="w-[150px] mt-12"
                 src="./meli.png" alt="" />
                 
                 </div>
            </div>

        </div>
    )
}

export default SobreUruguay