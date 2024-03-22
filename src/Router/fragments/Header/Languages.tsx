import { useState } from "react"
import { changeLanguage } from "i18"
import i18next from "i18next"
import { useTranslation } from "react-i18next"
import Select from "react-select"
import theme from "theme"

export default () => {
  const { t } = useTranslation()

  const options = [
    { value: "es", label: t("header.lenguages.es") },
    { value: "en", label: t("header.lenguages.en") },
    { value: "de", label: t("header.lenguages.de") },
  ]

  const [value, setValue] = useState<{ value: string; label: string }>(
    options.filter(option => {
      if (option.value === i18next.language.slice(0, 2)) return option
    })[0]
  )

  const newOptionSelected = (idioma: any) => {
    changeLanguage(idioma.value)
    setValue({ ...idioma, label: t(`header.lenguages.${idioma.value}`) })
  }

  return (
    <Select
      defaultValue={value}
      value={value}
      classNamePrefix="lenguages"
      options={options}
      onChange={newOptionSelected}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          border: 0,
          boxShadow: "0 0 0",
          background: theme.isDark() ? "#000000c9" : "#e1e6ec90",
          cursor: "pointer",
        }),
        input: b => ({ ...b, minWidth: "80px", cursor: "pointer" }),
        singleValue: b => ({
          ...b,
          textAlign: "center",
          color: theme.isDark() ? "#e1e6ec" : "#000000c9",
          cursor: "pointer",
        }),
        indicatorsContainer: () => ({ display: "none" }),
        menu: b => ({
          ...b,
          marginTop: "1px",
          background: theme.isDark() ? "#000000c9" : "#e1e6ec90",
          width: "100px",
          cursor: "pointer",
          borderRadius: "3px",
        }),
        menuList: b => ({
          ...b,
          padding: "0",
        }),
        option: (b, s) => ({
          ...b,
          cursor: "pointer",
          textAlign: "center",
          color: theme.isDark()
            ? s.isSelected || s.isFocused
              ? "#000000c9"
              : "#e1e6ec"
            : s.isSelected || s.isFocused
            ? "#e1e6ec"
            : "#000000c9",
          background: theme.isDark()
            ? s.isSelected
              ? "#e1e6ecc9"
              : s.isFocused
              ? "#e1e6ec99"
              : "#000000c9"
            : s.isSelected
            ? "#000000c9"
            : s.isFocused
            ? "#00000059"
            : "#e1e6ecc9",
        }),
      }}
    />
  )
}
