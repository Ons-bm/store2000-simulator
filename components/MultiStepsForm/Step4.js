import Buttons from "../inputs/Button/Buttons";
import TextInput from "../inputs/TextInput";
import ProgressBar from "../inputs/ProgressBar";
import { useEffect, useState } from "react";
import data1 from "../../data/DataStep1.json";
import data2 from "../../data/DataStep2.json";

export default function Step4({ setTabActive, setFinalData, finalData }) {
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);

  // const CalculDevis = (finalData, price, setPrice) => {
  //   for (let index = 0; index < 3; index++) {
  //     setPrice(
  //       price +
  //         Number(
  //           data1[index].options.find(
  //             (o) =>
  //               o.label ==
  //               finalData[index + 1].substring(
  //                 finalData[index + 1].indexOf(":") + 2
  //               )
  //           ).price
  //         )
  //     );
  //   }

  //   setPrice(
  //     price +
  //       Number(
  //         data2[0].options.find(
  //           (o) =>
  //             o.label == finalData[4].substring(finalData[4].indexOf(":") + 2)
  //         ).price
  //       )
  //   );
  //   finalData[11].substring(finalData[11].indexOf(":") + 2) == "Avec livraison"
  //     ? setPrice(price + 15.0)
  //     : null;
  //   finalData[10].substring(finalData[10].indexOf(":") + 2)
  //     ? setPrice(
  //         price *
  //           Number(finalData[10].substring(finalData[10].indexOf(":") + 2))
  //       )
  //     : null;
  //   console.log(price);
  //   return price;
  // };

  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)");
    for (let index = 0; index < 3; index++) {
      price +
        Number(
          data1[index].options.find(
            (o) =>
              o.label ==
              finalData[index + 1].substring(
                finalData[index + 1].indexOf(":") + 2
              )
          ).price
        );
    }

    price +
      Number(
        data2[0].options.find(
          (o) =>
            o.label == finalData[4].substring(finalData[4].indexOf(":") + 2)
        ).price
      );

    // finalData[11].substring(finalData[11].indexOf(":") + 2) == "Avec livraison"
    //   ? setPrice(price + 15.0)
    //   : null;
    // finalData[10].substring(finalData[10].indexOf(":") + 2)
    //   ? setPrice(
    //       price *
    //         Number(finalData[10].substring(finalData[10].indexOf(":") + 2))
    //     )
    //   : null;
    console.log(
      price +
        Number(
          data2[0].options.find(
            (o) =>
              o.label == finalData[4].substring(finalData[4].indexOf(":") + 2)
          ).price
        )
    );
    const totalPrice = `TOTAL TTC LIVRE : ${price} €`;
    console.log(totalPrice);
  }, [finalData]);

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
