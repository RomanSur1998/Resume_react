import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div>
      <section className="main__block_table">
        <div className="main__text_portrait">
          <h2 id="portrait_logo">Portrait</h2>
        </div>
        <div className="main__block_tab">
          <div className="block__table_left">
            <table>
              <tr>
                <td>Nationality:</td>
                <td>British</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>7 January 1985</td>
              </tr>
              <tr>
                <td>Place of Birth:</td>
                <td>Stevenage, UK</td>
              </tr>
              <tr>
                <td>Lives:</td>
                <td>Monaco</td>
              </tr>
              <tr>
                <td>Height:</td>
                <td>1.74m</td>
              </tr>
            </table>
          </div>
          <div className="block__table_right">
            <table>
              <tr>
                <td>Debut:</td>
                <td>Australia, 18 March 2007</td>
              </tr>
              <hr />
              <tr>
                <td>Best Championship:</td>
                <td>
                  World Champion – 2008, 2014, 2015, 2017, 2018, 2019, 2020
                </td>
              </tr>
              <tr>
                <td>First Win:</td>
                <td>Canada, 10 June 2007</td>
              </tr>
              <tr>
                <td>Last Win:</td>
                <td>Saudi Arabia, December 5 2021</td>
              </tr>
              <tr>
                <td>Wins:</td>
                <td>103</td>
              </tr>
              <tr>
                <td>Podiums:</td>
                <td>191</td>
              </tr>
              <tr>
                <td>Pole positions:</td>
                <td>103</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
