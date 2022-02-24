import { useState } from "react";
import data from "../../data/DataStep1.json";
import Buttons from "../inputs/Button/Buttons";
import ProgressBar from "../inputs/ProgressBar";
import RadioInput from "../inputs/RadioInput/RadioInput";

export default function Step1({ setTabActive, setFinalData, finalData }) {
  const [pose, setPose] = useState();
  const [lame, setLame] = useState();
  const [color, setColor] = useState();
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
                <ProgressBar step={1} />
                <h2>Détails pose/couleur</h2>
                <RadioInput
                  data={data[0]}
                  setResultData={setPose}
                  key={data[0].title}
                />

                <RadioInput
                  data={data[1]}
                  setResultData={setLame}
                  key={data[1].title}
                />

                <RadioInput
                  data={data[2]}
                  setResultData={setColor}
                  key={data[2].title}
                />
              </div>
            </div>
          </div>
          <Buttons
            step={1}
            setTabActive={setTabActive}
            setFinalData={setFinalData}
            finalData={finalData}
            resultData={[pose, lame, color]}
          />
        </div>
      </div>
    </>
  );
}
