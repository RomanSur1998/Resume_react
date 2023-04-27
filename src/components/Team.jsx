import React from "react";
import w14 from "./assets/w-14.jpeg";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={w14} alt="" />
      <div className="main__block_centre">
        <div className="block__table_centre">
          <table>
            <tr>
              <td>2023</td>
              <td>
                Formula One: Mercedes-AMG PETRONAS Formula One Team - Car No 44
              </td>
            </tr>
            <tr>
              <td>2023</td>
              <td>Formula One: Mercedes-AMG PETRONAS Formula One Team -P6</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Formula One: Mercedes-AMG PETRONAS Formula One Team – P2</td>
            </tr>
            <tr>
              <td>2020</td>
              <td>
                Formula One: Mercedes-AMG PETRONAS Formula One Team – Champion
              </td>
            </tr>
            <tr>
              <td>2019</td>
              <td>Formula One: Mercedes-AMG PETRONAS Motorsport – Champion</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
