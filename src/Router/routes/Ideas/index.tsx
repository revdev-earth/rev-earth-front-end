import { useState } from "react"
import Modal from "./Modal"

export default function () {
  const contenido = "flex flex-col gap-8 flex-1"

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="text-slate-950 dark:text-neutral-100 flex flex-col gap-4 items-center p-5">
      <svg
        width={100}
        height={100}
        className="dark:fill-slate-950 fill-neutral-100"
      >
        <circle cx={50} cy={50} r={50}></circle>
      </svg>

      <Modal isOpen={isModalOpen}>
        <div className="flex text-slate-950 md:flex-row flex-col gap-4 md:gap-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Ticket 1 vez</h3>
            <p>
              "Descubre la emoción de la aventura con nuestros Vale de 1 vez.
              Experimenta la adrenalina y la emoción de probar algo nuevo en una
              experiencia única que nunca olvidarás. ¡Compra ya tu ticket y vive
              la aventura!"
            </p>
            <a
              className="text-center"
              href="https://buy.stripe.com/test_9AQdS0dt3ebidWwfZ1"
              target="_blank"
            >
              A verlo!
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Vale Subscripcion</h3>
            <p>
              "¿Quieres disfrutar de nuestras atracciones durante todo el año?
              ¡Suscríbete a nuestros Vale de suscripción! Con acceso ilimitado a
              todas nuestras atracciones, podrás disfrutar de la diversión y la
              emoción cada vez que visites nuestro parque. ¡No pierdas la
              oportunidad de suscribirte ahora!"
            </p>
            <a
              className="text-center"
              href="https://buy.stripe.com/test_aEUbJSbkVd7e6u46oq"
              target="_blank"
            >
              Subscripcion!
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center">Vale Master</h3>
            <p>
              "¿Eres un verdadero fanático de la emoción? ¡Nuestros Vale Master
              son para ti! Obtén acceso exclusivo a nuestras atracciones más
              emocionantes, así como a beneficios especiales y ofertas
              exclusivas. ¡Compra ahora tu ticket Master y conviértete en un
              verdadero maestro de la diversión!"
            </p>
            <a
              className="text-center"
              href="https://buy.stripe.com/test_3csaFOcoZffm2dO145"
              target="_blank"
            >
              Obtenlo!
            </a>
          </div>
          <button onClick={closeModal}>Cierra</button>
        </div>
      </Modal>

      <h2 className="text-2xl">Ideas</h2>

      <div className="flex md:flex-row flex-col gap-12 md:gap-4">
        <div className={contenido}>
          <h3 className=" text-xl">Vales</h3>
          <p>
            Si quieres ayudar a los demás mientras obtienes algo que necesitas,
            nuestros Vale son la opción perfecta. Al comprar un Vale, estás
            apoyando a un miembro de nuestra comunidad que ofrece un servicio o
            producto. ¡Y lo mejor es que no tienes que intercambiarlos!
            Simplemente disfruta de tu compra, sabiendo que estás ayudando a
            alguien más a la vez.
          </p>
          <button
            className="text-slate-950 dark:text-slate-950"
            onClick={openModal}
          >
            open Modal
          </button>
        </div>
        <div className={contenido}>
          <h3 className=" text-xl">Participacion</h3>
          <p>
            Únete a nuestra comunidad comprometida con el cuidado del medio
            ambiente y el desarrollo sostenible. Con nuestra opción de
            participación, puedes involucrarte en proyectos que te interesen,
            colaborar con otros miembros de la comunidad y contribuir
            activamente a nuestra causa. Tenemos varios subniveles de
            participación, como grupos, ideas, iniciativas, colaboraciones e
            intereses, para que encuentres la opción que mejor se adapte a tus
            intereses y habilidades.
          </p>
          <button
            className="text-slate-950 dark:text-slate-950"
            onClick={openModal}
          >
            Se parte
          </button>
        </div>
        <div className={contenido}>
          <h3 className=" text-xl">Voluntariado</h3>
          <p>
            Únete a nuestro programa de voluntariado y conviértete en parte
            fundamental de nuestra comunidad. Los voluntarios son la columna
            vertebral de Rev Earth, y su compromiso y dedicación son
            fundamentales para lograr nuestros objetivos. Al unirte a nuestro
            programa de voluntariado, puedes trabajar en proyectos emocionantes,
            colaborar con otros miembros comprometidos y tener un impacto
            positivo en el medio ambiente y la comunidad. ¡Únete hoy y ayuda a
            crear un futuro más sostenible y justo para todos!
          </p>
          <button
            className="text-slate-950 dark:text-slate-950"
            onClick={openModal}
          >
            Bienvenid@
          </button>
        </div>
      </div>
    </div>
  )
}
