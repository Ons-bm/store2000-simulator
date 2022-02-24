import { useState } from "react";
import Conditional from "../Conditional";
import Checkbox from "./Checkbox";

const CheckInput = ({ data }) => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  console.log(data);
  const { title, options } = data;
  const [activeOption, setActiveOption] = useState([options[0].label]);
  const [conditionel, setConditionel] = useState(
    options[0]?.conditional ? [options[0]?.conditional] : false
  );
  const handleChange = (e, conditional) => {
    const { name, value } = e.target;
    let tabAO = activeOption ?? [];

    if (activeOption.includes(value)) {
      tabAO.splice(tabAO.indexOf(value), 1);
    } else {
      if (conditional) {
        setConditionel([conditional]);
      } else {
        setConditionel(false);
      }

      tabAO.push(value);
    }
    setActiveOption(tabAO);
  };

  console.log(tabAO);
  return (
    <>
      <div className="budget-area">
        {title ? <p>{title}</p> : null}
        <div className="col-md-4">
          <Checkbox />
        </div>
        <div className="opti-list">
          <ul className="d-flex">
            {options.map(({ label, conditional }, index) => {
              return (
                <li key={index}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={label}
                        value={label}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>
                        {label}
                      </label>
                    </div>
                  </div>
                </li>
              );
            })}
            {/*  {
                        options?.length?
                            options.map((option,idx)=>{
                                const {label,conditional} = option;
                                
                                return(
                                    <li 
                                        key={idx} 
                                        className={`bg-white ${activeOption.includes(label)?"active":""}`}
                                    >
                                        <label  className="label-checkbox" htmlFor={"checkbox"+idx}>
                                            <input
                                                id={"checkbox"+idx} 
                                                type="checkbox" 
                                                name="code_opti1" 
                                                defaultValue={label}
                                                defaultChecked={activeOption.includes(label)}
                                                onChange={(e)=>handleChange(e,conditional)}
                                            />
                                            {label}
                                        </label>
                                    </li>
                                )
                            })
                            :null
                    } */}
          </ul>
        </div>
      </div>
      <Conditional data={conditionel} />
    </>
  );
};

export default CheckInput;
