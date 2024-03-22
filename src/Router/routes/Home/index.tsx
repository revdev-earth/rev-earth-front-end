import Intro from "./fragments/Intro"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade"

export default () => {
  const { t } = useTranslation()
  return (
    <div className="overflow-hidden w-full">
      <Intro />
      <div className="h-28 bg-slate-900" />
      <Fade bottom>
        <Link
          to="ideas"
          className="text-slate-950 dark:text-neutral-100 flex p-5 gap-5"
        >
          <div className="flex flex-col-reverse gap-5 ">
            <h2 className="text-3xl font-semibold">
              {t("home.section1.title")}
            </h2>
            <p>{t("home.section1.text")}</p>
          </div>
          <div>
            <img
              src={t("home.section1.img.src") as string}
              alt={t("home.section1.img.alt") as string}
            />
          </div>
        </Link>
      </Fade>
      <Fade bottom>
        <Link
          to="proyectos"
          className="text-slate-950 dark:text-neutral-100 flex p-5 gap-5"
        >
          <div>
            <img
              src={t("home.section2.img.src") as string}
              alt={t("home.section2.img.alt") as string}
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <h2 className="text-3xl font-semibold">
              {t("home.section2.title")}
            </h2>
            <p>{t("home.section2.text")}</p>
          </div>
        </Link>
      </Fade>
      <Fade bottom>
        <Link
          to="/"
          className="text-slate-950 dark:text-neutral-100 flex flex-col p-5 gap-5"
        >
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-3xl font-semibold">
              {t("home.section3.title")}
            </h2>
            <p>{t("home.section3.text")}</p>
          </div>
          <div>
            <img
              src={t("home.section3.img.src") as string}
              alt={t("home.section3.img.alt") as string}
            />
          </div>
        </Link>
      </Fade>
    </div>
  )
}
