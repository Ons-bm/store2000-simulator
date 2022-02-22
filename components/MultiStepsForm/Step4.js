import Buttons from "../inputs/Button/Buttons";
import TextInput from "../inputs/TextInput";
import ProgressBar from "../inputs/ProgressBar";
export default function Step4({ setTabActive }) {
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
                <TextInput title="Nom" placeholder="1000" />
                <TextInput title="Prénom" placeholder="1000" />
                <TextInput title="Adresse" placeholder="1000" />
                <TextInput title="Téléphone" placeholder="1000" />
                <TextInput title="E-mail" placeholder="1000" />
              </div>
            </div>
          </div>
          <Buttons step="4" setTabActive={setTabActive} />
        </div>
      </div>
    </>
  );
}
