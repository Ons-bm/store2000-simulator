import Buttons from "../inputs/Button/Buttons";
import TextInput from "../inputs/TextInput";
import ProgressBar from "../inputs/ProgressBar";
import { useState } from "react";

export default function Step4({ setTabActive, setFinalData, finalData }) {
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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
                <ProgressBar step={4} />
                <h2>Détails Client</h2>

                <TextInput
                  title="Nom"
                  placeholder="Nom"
                  setResultData={setLastName}
                />
                <TextInput
                  title="Prénom"
                  placeholder="Prénom"
                  setResultData={setFisrtName}
                />
                <TextInput
                  title="Adresse"
                  placeholder="Adresse"
                  setResultData={setAddress}
                />
                <TextInput
                  title="Téléphone"
                  placeholder="Téléphone"
                  setResultData={setPhone}
                />
                <TextInput
                  title="E-mail"
                  placeholder="E-mail"
                  setResultData={setEmail}
                />
              </div>
            </div>
          </div>
          <Buttons
            step="4"
            setTabActive={setTabActive}
            setFinalData={setFinalData}
            resultData={[firstName, lastName, address, phone, email]}
            finalData={finalData}
          />
        </div>
      </div>
    </>
  );
}
