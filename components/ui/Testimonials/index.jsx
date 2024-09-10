import SectionWrapper from "../../SectionWrapper"

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "/images/juan.jpg",
            name: "Juan Boberg",
            title: "CEO",
            quote: "Ha demostrado una trayectoria destacada en ventas y liderazgo, abarcando desde la gestión de equipos comerciales hasta la dirección estratégica como CEO. Su habilidad para implementar estrategias innovadoras y su enfoque en la mejora continua han sido fundamentales para el éxito de las empresas en las que ha trabajado."
        },
        {
            avatar: "/images/antonio.jpg",
            name: "Antonio Brugarolas",
            title: "Head of Sales",
            quote: "Director de Ventas de Netelco SL con una destacada experiencia en el sector de las telecomunicaciones. A lo largo de su carrera, ha liderado equipos de alto rendimiento, desarrollado relaciones sólidas con clientes clave y mejorado continuamente los procesos internos."
        },
        {
            avatar: "/images/miguel.jpg",
            name: "Miguel Arévalo",
            title: "CFO",
            quote: "Es el Director Financiero de Netelco SL, con una destacada trayectoria en el sector de la automoción y las telecomunicaciones. Con una sólida formación en finanzas y una habilidad excepcional para la planificación estratégica, ha gestionado proyectos complejos y liderado iniciativas que mejoran la eficiencia operativa y la rentabilidad."
        },
        {
            avatar: "/images/enrique.jpg",
            name: "Enrique Flores",
            title: "Area Director",
            quote: "Area Director, con una larga trayectoria en el sector de la nuevas tecnologías. Liderando equipos y gestionando proyectos educativos."
        },
        {
            avatar: "/images/victor.jpg",
            name: "Víctor Morales",
            title: "Web Developer",
            quote: "Apasionado por el desarrollo de software que busca seguir creciendo dentro del sector IT. Su deseo es aportar toda su dedicación así como conocimientos y habilidades a tu proyecto ¡Disfruta haciendo lo que le apasiona!"
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Equipo
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Conócenos.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-14 h-14 object-cover rounded-full" alt={item.name} />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials