import data from "../../data/DataStep1.json";
import Buttons from "../inputs/Button/Buttons";
import ProgressBar from "../inputs/ProgressBar";
import RadioInput from "../inputs/RadioInput/RadioInput";

export default function Step1({ setTabActive }) {
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
                {data.map((data, id) => (
                  <RadioInput key={id} data={data} />
                ))}
              </div>
            </div>
          </div>
          <Buttons step={1} setTabActive={setTabActive} />
        </div>
      </div>
    </>
  );
}
