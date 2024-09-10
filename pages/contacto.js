import { useRef, useState } from "react";
import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import emailjs from "emailjs-com";
import { CookiesBanner } from "../components/ui/Cookies";

//TODO:
// export default function GetStarted() {
export default function Contacto() {
  const [disable, setDisable] = useState(false);
  const [message, setMessage] = useState(null);
  const form = useRef();
  const servicesItems = [
    "Servicios de telecomunicaciones para empresas",
    "Software de gestión para establecimientos de alimentación",
    "Termo climatización",
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setDisable(true);
    setMessage(null);

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    // emailjs.sendForm("service_3gg65wk", "template_r6hg2rt", form.current, "fKHf0zFzLUQu8xERI")
    emailjs
    .sendForm("service_87na0za", "template_vqsiby3", form.current, "dqGHYGIateUnXordc")
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "¡Mensaje enviado! En breve, nos pondremos en conctato contigo"
          );
          setMessage(
            "¡Mensaje enviado! En breve, nos pondremos en contacto contigo"
          );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Disculpa, ha habido un error. Inténtalo más tarde");
          setMessage("Disculpa, ha habido un error. Inténtalo más tarde");
        }
      )
      .finally(() => setDisable(false));
  };

  return (
    <>
      <Head>
        <title>Netelco | Contacto</title>
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg sm:text-center lg:text-left">
              <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Contáctanos
              </h1>
              <p className="mt-3">
                Si deseas saber más sobre nosotros y las actividades que
                realizamos, no dudes en ponerte en contacto con nosotros.
                Estamos aquí para ayudarte a alcanzar tus objetivos con el mejor
                asesoramiento y soluciones del mercado.
                <br />
                <br />
                Si lo prefieres puedes enviarnos un correo a {" "}
                {/* Estamos aquí para ayudar. Póngase en contacto con nuestro equipo
                y haznos saber cómo podemos ayudarte, o envíenos un correo
                electrónico a{" "} */}
                <a
                  href="mailto:info@netelco.es"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-500 hover:text-cyan-700 font-medium duration-150"
                >
                  info@netelco.es.
                </a>
              </p>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
              {message && (
                <div className="m-4 text-center text-sm text-cyan-600">
                  {message}
                </div>
              )}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5 font-medium"
              >
                <div>
                  <label className="cursor-pointer" htmlFor="user_name">
                    Nombre
                  </label>
                  <Input
                    aria-label="Full name"
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="mt-2 focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="cursor-pointer" htmlFor="email">
                    Email
                  </label>
                  <Input
                    aria-label="Email"
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="mt-2 focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="cursor-pointer" htmlFor="user_phone">
                    Teléfono
                  </label>
                  <Input
                    aria-label="phone"
                    type="tel"
                    name="user_phone"
                    id="user_phone"
                    required
                    className="mt-2 focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="cursor-pointer" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    aria-label="Message"
                    name="message"
                    id="message"
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                {/* <div>
                  <label>¿Qué servicio te interesa?</label>
                  <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16">
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className="flex gap-x-2 items-center">
                        <Checkbox id={`service-${idx}`} name={`service-${idx}`} />
                        <label htmlFor={`service-${idx}`} className="text-sm">
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    className={`w-full text-white ${
                      disable
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-600"
                    } ring-offset-2 ring-cyan-700 focus:ring`}
                  >
                    {disable ? "Enviando..." : "Enviar"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CookiesBanner />
    </>
  );
}
