import Select from "react-select";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
  ];

  const currentLanguage = i18n.language;

  const handleChange = (selectedOption: any) => {
    console.log(selectedOption,"asafsaf")
    console.log(currentLanguage,"asafsaf")
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <Select
      placeholder={"Language"}
      value={null}
      options={languageOptions}
      onChange={handleChange}
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
      }}
      styles={selectStyles}
      isSearchable={false}
    />
  );
};

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "1px solid #34ad54", // Add border style here
    zIndex: 19999,
    backgroundColor: "#34ad54",
    color: "#fff !important",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#34ad54",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#34ad54",
      color: "#fff",
    },
    zIndex: 19999,
  }),
  menuList: (provided: any) => ({
    ...provided,
    zIndex: 19999,
    width: "100px",
    padding: "0px",
    margin: "0px",
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 19999,
    width: "100px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    font: "normal 600 16px Open Sans, sans-serif",
    letterSpacing: "0px",
    color: "#707070",
  }),
};

export default LanguageDropdown;
