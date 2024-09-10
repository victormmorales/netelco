import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import job from "../../../public/job.svg";
import meeting from "../../../public/meeting.svg";
import Image from "next/image";

const CTA = () => {
  return (
    <>
      <SectionWrapper id="cta" className="bg-gray-100">
        <div className="custom-screen">
          <div className="items-center gap-x-12 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <Image
                src={meeting}
                className="rounded-lg md:max-w-lg"
                alt="Grupo de profesionales"
              />
            </div>
            <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Bienvenido a Netelco
              </h2>
              <p className="mt-3 text-gray-600">
                En Netelco, somos un grupo integrado por profesionales con
                amplia experiencia en telecomunicaciones, electrónica, retail e
                ingeniería, unidos con el propósito de desarrollar este
                innovador proyecto. Nos especializamos en crear redes de venta y
                en ofrecerte asesoramiento experto para que tomes decisiones
                informadas sobre la mejor manera de avanzar.
                <br />
                <br />
                Nuestros miembros fundadores, Juan Boberg, Miguel Arévalo y
                Antonio Brugarolas, han reunido a un equipo diverso que incluye
                ingenieros, informáticos, especialistas en recursos humanos,
                economistas y abogados.
              </p>
              <NavLink
                href="/contacto"
                className="inline-block mt-4 font-medium text-sm text-white bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-800"
              >
                Contacta con nosotros
              </NavLink>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* SECTION 2 */}
      <SectionWrapper id="cta" className="bg-white">
        <div className="custom-screen">
          <div className="items-center gap-x-12 lg:flex">
            <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                ¿Quiénes Somos?
              </h2>
              <p className="mt-3 text-gray-600">
                Netelco es un equipo multidisciplinar y multigeneracional.
                Combinamos la versatilidad de la experiencia consolidada con la
                frescura de la innovación juvenil para proporcionar soluciones
                integrales a nuestros clientes.
                <br />
                <br />
                Nuestra misión es anticiparnos a las necesidades del mercado, ofreciendo servicios personalizados y de alta calidad. En Netelco, creemos en la colaboración constante y en la adaptación a los cambios tecnológicos para mantenernos a la vanguardia de la industria.
              </p>
            </div>
            <div className="flex-1 sm:hidden lg:block">
              <Image
                src={job}
                className="rounded-lg md:max-w-lg"
                alt="Grupo de profesionales"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CTA;
