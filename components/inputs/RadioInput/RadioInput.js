import { useState } from "react";
import Conditional from "../Conditional";
import SingleOption from "./SingleOption/SingleOption";

const RadioInput = ({ data, setResultData }) => {
  const { title, options } = data;
  const [activeOption, setActiveOption] = useState(0);
  const [conditional, setConditional] = useState(false);
  setResultData(`${title} : ${activeOption}`);

  return (
    <>
      {title ? <p>{title}</p> : null}

      <div className="step-box">
        <div className="row">
          {options?.length
            ? options.map((option, idx) => {
                return (
                  <SingleOption
                    key={idx}
                    data={option}
                    idx={idx}
                    setActiveOption={setActiveOption}
                    activeOption={activeOption}
                    setConditional={setConditional}
                  />
                );
              })
            : null}
        </div>
      </div>
      <Conditional data={conditional} />
    </>
  );
};

export default RadioInput;
