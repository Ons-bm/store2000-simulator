import axios from "axios";
const Buttons = ({
  step,
  resultData,
  setTabActive,
  setFinalData,
  finalData,
}) => {
  const result = finalData.concat(resultData);

  const Result = () => {
    setTabActive(step);
    setFinalData(result);
    console.log(result);
  };

  const SendMail = async (e) => {
    e.preventDefault();
    const email = resultData[4].substring(resultData[4].indexOf(":") + 1);
    const emailMsg = result.join("\n");

    axios
      .post("http://localhost:3000/api/email", { email, emailMsg })
      .then((res) => {
        alert("Send Mail To You");
      })
      .catch((e) => console.log(e));
    setTabActive(0);
    setFinalData("");
  };
  return (
    <div className="actions">
      <ul>
        {step != "1" ? (
          <li>
            <span
              className="js-btn-prev"
              title="Précedent"
              onClick={() => setTabActive(step)}
            >
              <i className="fa fa-arrow-left" />
              Précedent
            </span>
          </li>
        ) : null}

        {step == "4" ? (
          <li>
            <span className="js-btn-next" title="Envoyer" onClick={SendMail}>
              Envoyer
              <i className="fa fa-arrow-right" />
            </span>
          </li>
        ) : (
          <li>
            <span className="js-btn-next" title="Suivant" onClick={Result}>
              Suivant
              <i className="fa fa-arrow-right" />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Buttons;
