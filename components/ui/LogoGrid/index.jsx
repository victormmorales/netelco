import Image from "next/image";
import servicios from "../../../public/icons/servicios.svg";
import climatizacion from "../../../public/icons/climatizacion.svg";
import software from "../../../public/icons/software.svg";

const logos = [
  {
    src: servicios,
    alt: "servicios",
    text: "Servicios de Telecomunicaciones para Empresas",
  },
  {
    src: climatizacion,
    alt: "sendgrid",
    text: "Termo climatización",
  },
  {
    src: software,
    alt: "layers",
    text: "Software de Gestión para Establecimientos de Alimentación",
  },
];

const textAreas = "Nuestras Áreas de Actividad";

const LogoGrid = () => (
  <div className="mt-10">
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        {textAreas.toUpperCase()}
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li key={idx} className="flex flex-col items-center justify-center">
              <Image src={item.src} alt={item.alt} />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
