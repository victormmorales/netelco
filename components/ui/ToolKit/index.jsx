import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import wordpress from "../../../public/icons/wordpress.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import tailwind from "../../../public/icons/tailwind.svg";
import nodejs from "../../../public/icons/nodejs.svg";
import vercel from "../../../public/icons/vercel.svg";
import figma from "../../../public/icons/figma.svg";

const ToolKit = () => {
  const features = [
    {
      icon: wordpress,
      title: "Herramienta n",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: nextjs,
      title: "Herramienta n",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: tailwind,
      title: "Herramienta n",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: nodejs,
      title: "Herramienta n",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: vercel,
      title: "Herramienta n",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: figma,
      title: "Herramienta n",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
  ];

  return (
    <SectionWrapper className="bg-gray-100">
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 "
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Trabaja con el mejor kit de herramientas
          </h2>
          <p>Estas son algunas de nuestras favoritas.</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
