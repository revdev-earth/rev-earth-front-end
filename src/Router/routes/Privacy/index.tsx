import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()
  console.log({ text: t("esta.intro.descripcion") })

  const secciones = [
    "intro",
    "admision",
    "regimen",
    "prohibiciones",
    "derechos",
    "obligaciones",
    "miscelania"
  ]

  return (
    <div className=" p-16  flex flex-col gap-8 ">
      {/*  */}

      {secciones.map((seccion) => (
        <div key={seccion} className="flex flex-col gap-4">
          <h3 className="text-3xl">{t(`privacy.${seccion}.titulo`)}</h3>
          <div className="whitespace-break-spaces">
            {t(`privacy.${seccion}.descripcion`)}
          </div>
        </div>
      ))}

      {/* {data.map((section: any) => (
        <div key={Math.random()}>
          <h2>{section.title}</h2>
          {section.texts.map((text: string) => (
            <p key={Math.random()}>{text}</p>
          ))}
        </div>
      ))} */}
    </div>
  )
}
