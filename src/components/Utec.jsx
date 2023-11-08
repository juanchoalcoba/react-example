const Utec = () => {
    return (
      <div className="flex flex-row justify-around mt-48 m-4">
        <div className="flex flex-row space-between items-center ">
          <img
            src="/utec.jpg"
            className="w-[20rem] rounded-2xl opacity-70"
            alt=""
          />
          <a href="https://utec.edu.uy/es/" target="_blank" rel="noopener noreferrer">
            <img
              src="/utec2.jpg"
              className="w-[24rem] ml-4 rounded-2xl opacity-80"
              alt=""
            />
          </a>
        </div>
      
        <div className="text-white">
          <h1 className="text-8xl font-bold">UTEC</h1>
          <p className="text-xl w-[25rem] mt-8">
            La UTEC de Uruguay es una institución educativa líder en tecnología e innovación, formando profesionales de alto nivel globalmente competitivos.
          </p>
        </div>



        <img
        className="absolute opacity-20  rounded-2xl z-[-1]"
        src="estudiantes.png" alt="" />
      </div>
    );
  };
  
  export default Utec;