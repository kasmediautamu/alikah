import { useCallback, useState } from "react";
import SearchField from "./SearchField/Index";
import DropdownSelect from "../FormFields/Select";
import Button from "../FormFields/Button";
import s from './Banner.module.scss';
const Banner = () => {
  const [searchValue, setSearchValue] = useState("");
  const [Location, setLocation] = useState("");

  const onChangeValueInSearchField = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.currentTarget.value);
    },
    []
  );
  const onKeyDownInSearchField = () => {
    console.log("key press");
  };
  return (
    <div className={s.banner}>
      <div className={s.searchArea}>
      <SearchField
        value={searchValue}
        onChange={onChangeValueInSearchField}
        // onKeyDown={onKeyDownInSearchField}
      />
      </div>
      <div className={s.location}>
      <DropdownSelect
        items={["Pretoria", "Soweto", "Bloemfonteim"]}
        value={Location === "" ? "Select Location" : Location}
        onChange={(value: string) => {
          setLocation(value);
        }}
      />
      </div>
    </div>
  );
};
export default Banner;
