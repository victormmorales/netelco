import NavLink from "../NavLink";

const Hero = () => (
  // <section>
  <section className="hero-section">
    <div className="hero-overlay"></div>
    <div className="custom-screen py-28 text-gray-600 relative z-10">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mt-10">
          <img src="/logo-netelco.svg" alt="Netelco logo" className="h-[20vh] animate-fadeInUp"/>
        </div>
        <h1 className="text-4xl text-cyan-600 font-extrabold mx-auto sm:text-4xl">
          Construye y escala tu próxima
        </h1>
        <h2 className="text-3xl text-cyan-900 font-extrabold mx-auto sm:text-3xl">
          idea de negocio.
        </h2>
        {/* <p className="max-w-l mx-auto">
          Un texto con menos potencia y un poco descriptivo
        </p> */}
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/contacto"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
          >
            Contacto
          </NavLink>
          <NavLink
            href="#cta"
            className="text-cyan-700 border hover:bg-cyan-500 hover:text-white"
            scroll={false}
          >
            Saber más
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
