import data from "../../data/DataStep2.json";
import RadioInput from "../inputs/RadioInput/RadioInput";
import Buttons from "../inputs/Button/Buttons";
import ProgressBar from "../inputs/ProgressBar";
import { useState } from "react";

export default function Step2({ setTabActive, setFinalData, finalData }) {
  const [manoeuvre, setManoeuvre] = useState();

  return (
    <>
      <div
        className="multisteps-form__panel js-active"
        data-animation="slideHorz"
      >
        <div className="wizard-forms">
          <div className="inner pb-100 clearfix">
            <div className="form-content pera-content">
              <div className="step-inner-content">
                <ProgressBar step={2} />
                <h2>Détails Manoeuvre</h2>
                {data.map((data, id) => (
                  <RadioInput
                    key={id}
                    data={data}
                    setResultData={setManoeuvre}
                  />
                ))}
              </div>
            </div>
          </div>
          <Buttons
            step="2"
            setTabActive={setTabActive}
            setFinalData={setFinalData}
            resultData={[manoeuvre]}
            finalData={finalData}
          />
        </div>
      </div>
    </>
  );
}
