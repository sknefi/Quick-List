import IconPicker from "react-icons-picker";
import { useState } from "react";
import "./IconPickerComponent.css"

const IconPickerComponent = () => {
  const [value, setValue] = useState("FaUsers");

  return (
    <div >
      <IconPicker className=".show-icons-modal" value={value} onChange={(v) => setValue(v)} />
    </div>
  );
};

export default IconPickerComponent;
