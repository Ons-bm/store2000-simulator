import { useState } from "react";
import { toppings } from "./utils/toppings";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function Checkbox() {
  const [total, setTotal] = useState(0);

  return (
    <div >
      <h3>Select Toppings</h3>
      <ul>
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div>{getFormattedPrice(price)}</div>
                
              </div>
            </li>
          );
        })}
        <li>
        <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
        </div>
        </li>
      </ul>
    </div>
  );
}
