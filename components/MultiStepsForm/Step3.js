import data from "../../data/DataStep3.json";
import SelectInput from "../inputs/SelectInput";
import TextInput from "../inputs/TextInput";
import RadioInput from "../inputs/RadioInput/RadioInput";
import Buttons from "../inputs/Button/Buttons";
import ProgressBar from "../inputs/ProgressBar";

export default function Step3({ setTabActive }) {
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
                <SelectInput data={data[0]} />
                <h3>Dimensions en mm</h3>
                <TextInput title="Largeur (mm) " placeholder="1000" />
                <TextInput title="Hauteur (mm) " placeholder="1000" />
                <TextInput
                  title="Quantité (Nombre de volets roulants identiques) "
                  placeholder="1"
                />
                <RadioInput key={data[1].title} data={data[1]} />
                <RadioInput data={data[2]} />
              </div>
            </div>
          </div>
          <Buttons step="3" setTabActive={setTabActive} />
        </div>
      </div>
    </>
  );
}
