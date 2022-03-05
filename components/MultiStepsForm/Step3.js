import data from "../../data/DataStep3.json";
import SelectInput from "../inputs/SelectInput";
import TextInput from "../inputs/TextInput";
import RadioInput from "../inputs/RadioInput/RadioInput";
import Buttons from "../inputs/Button/Buttons";
import ProgressBar from "../inputs/ProgressBar";
import { useState } from "react";

export default function Step3({ setTabActive, setFinalData, finalData }) {
  const [side, setSide] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState("");
  const [delivery, setDelivery] = useState("");
  const [coffre, setCoffre] = useState("");
  const manoeuvre = ["Tirage", "Radio", "Connecté IO"];
  const typeCoffre = ["Livré Sans-Coffre", "Livré Sans Coffre"];

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
                <ProgressBar step={3} />
                <h2>Détails Dimensions</h2>
                <div
                  hidden={manoeuvre.includes(
                    finalData[4].substring(finalData[4].indexOf(":") + 2)
                  )}
                >
                  <SelectInput data={data[0]} setResultData={setSide} />
                </div>
                <h3>Dimensions en mm</h3>
                <TextInput
                  title="Largeur (mm) "
                  placeholder="1000"
                  setResultData={setWidth}
                />
                <TextInput
                  title="Hauteur (mm) "
                  placeholder="1000"
                  setResultData={setHeight}
                />
                <TextInput
                  title="Quantité (Nombre de volets roulants identiques) "
                  placeholder="1"
                  setResultData={setQuantity}
                />
                <div
                  hidden={typeCoffre.includes(
                    finalData[1].substring(finalData[1].indexOf(":") + 2)
                  )}
                >
                  <RadioInput
                    key={data[1].title}
                    data={data[1]}
                    setResultData={setCoffre}
                  />
                </div>
                <RadioInput data={data[2]} setResultData={setDelivery} />
              </div>
            </div>
          </div>
          <Buttons
            step="3"
            setTabActive={setTabActive}
            setFinalData={setFinalData}
            resultData={[side, height, width, coffre, quantity, delivery]}
            finalData={finalData}
          />
        </div>
      </div>
    </>
  );
}
