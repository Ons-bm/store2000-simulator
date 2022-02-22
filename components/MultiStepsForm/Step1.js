import data from "../../data/DataStep1.json";

import CheckInput from "../inputs/CheckInput";
import Conditional from "../inputs/Conditional";
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
                <span className="step-no">Step 1</span>
                <h2>Détails pose/couleur</h2>
                {/* <Conditional data={data} /> */}
                {/* <CheckInput data={data} /> */}
                {data.map((data, id) => (
                  <RadioInput key={id} data={data} />
                ))}

                {/* <TextInput data={info2} />
                <SelectInput data={{title:"hdbchdbchd",options:["english","frensh"]}} />
                <CheckInput data={{title:"dsfdsvcdv",options:[{label:"dcdcv"},{label:"scsczscscs"}]}} /> */}
              </div>
            </div>
          </div>
          {/* /.inner */}
          <div className="actions">
            <ul>
              <li className="disable" aria-disabled="true">
                <span className="js-btn-next" title="NEXT">
                  Backward <i className="fa fa-arrow-right" />
                </span>
              </li>
              <li>
                <span
                  className="js-btn-next"
                  title="NEXT"
                  onClick={() => setTabActive(1)}
                >
                  NEXT <i className="fa fa-arrow-right" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
