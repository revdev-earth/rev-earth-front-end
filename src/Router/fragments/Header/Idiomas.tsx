import { changeLanguage } from "i18"
import i18next from "i18next"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import Select from "react-select"
import theme from "theme"

export default () => {
  const { t } = useTranslation()

  const options = [
    { value: "es", label: t("header.idiomas.es") },
    { value: "en", label: t("header.idiomas.en") },
    { value: "de", label: t("header.idiomas.de") }
  ]

  const [value, setValue] = useState<{ value: string; label: string }>(
    options.filter((option) => {
      if (option.value === i18next.language.slice(0, 2)) return option
    })[0]
  )

  const newOptionSelected = (idioma: any) => {
    changeLanguage(idioma.value)
    setValue({ ...idioma, label: t(`header.idiomas.${idioma.value}`) })
  }

  return (
    <Select
      defaultValue={value}
      value={value}
      classNamePrefix="idiomas"
      options={options}
      onChange={newOptionSelected}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          border: 0,
          boxShadow: "0 0 0",
          background: "transparent",
          cursor: "pointer"
        }),
        input: (b) => ({ ...b, minWidth: "80px", cursor: "pointer" }),
        singleValue: (b) => ({
          ...b,
          textAlign: "center",
          color: theme.isDark() ? "white" : "black",
          cursor: "pointer"
        }),
        indicatorsContainer: () => ({ display: "none" }),
        menu: (b) => ({
          ...b,
          marginTop: "-2px",
          background: "#ffffff90",
          width: "100px",
          cursor: "pointer"
        }),
        option: (b, s) => ({
          ...b,
          textAlign: "center",
          color: s.isSelected || s.isFocused ? "black" : "black",
          cursor: "pointer",
          "&:hover": {
            color: theme.isDark() ? "black" : "black"
          }
        })
      }}
    />
  )
}
