import React from "react";
import lw from "./assets/main_foto.jpeg";
import "./Portrait.css";

const Portrait = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={lw} alt="" />
      <main className="main__block">
        <div className="main__block_title">
          <h2 id="career_logo">Career</h2>
        </div>
        <section className="main__block_text">
          <div className="main__block_left">
            <p>
              A seven-time world champion. The most wins, pole positions, and
              podium finishes in Formula One history. An environmentalist,
              social activist, fashion designer, musician, and a force for
              global change in combating racism and pushing for increased
              diversity in motorsport. Knighted in the New Year Honours and
              named as one of Time Magazine’s 100 most influential people in
              2020. There are many sides to Sir Lewis Hamilton. Few sportspeople
              have had the impact that he has had not only in his own sport but
              beyond, and at 38 he is still hungry to achieve and deliver more.
              A sensation in karting, Lewis’ enormous talent was recognised
              early in his career by Mercedes-Benz who began sponsoring him from
              a young age. He climbed the karting ladder quickly, joining the
              McLaren Mercedes Young Driver Programme in 1997 before embarking
              on single-seaters. Success followed swiftly with titles in Formula
              Renault UK, the Formula 3 Euro Series and a dominant rookie
              campaign in the 2006 GP2 Series securing his promotion to F1 with
              McLaren Mercedes. Making his debut at the age of just 22,
              alongside reigning World Champion Fernando Alonso, Lewis’ maiden
              F1 season was a remarkable one. He remained in title contention
              until the very last round and narrowly missed out on the title by
              just one point. The world championship would become his the very
              next year though, sealing the crown in one of the most dramatic
              title deciders in the sport’s history.
            </p>
          </div>
          <div className="main__block_right">
            <p>
              After six seasons with McLaren, he sought a new challenge for 2013
              and joined the works Mercedes team. A single victory that year
              said little of what was to come. In 2014, with the dawn of a new
              era in the sport owing to a major Power Unit change, a second
              Drivers’ Championship followed. 10 wins and 17 total podiums in
              2015 netted a third world title before Lewis narrowly missed out
              on retaining his crown in 2016. Bouncing back in 2017, Lewis
              secured the title with two rounds to spare and began a run of four
              consecutive Drivers’ Championships. En route, he shattered many of
              the most prestigious records in the sport including surpassing
              Michael Schumacher’s tally of F1 race wins in 2020. At the Turkish
              Grand Prix that same year, he matched Michael’s record of world
              titles with his seventh championship. An intense 2021 season saw
              Lewis became the first driver to reach both 100 wins and 100 pole
              positions in the sport’s history. After a year-long battle, he
              narrowly lost out to Red Bull’s Max Verstappen in controversial
              circumstances but still helped Mercedes to its eighth consecutive
              Constructors’ title. Last year proved less successful on track for
              the Team with a difficult car to get on top of. However, Lewis is
              as determined as ever for the season ahead. “I feel calm, I feel
              energised, and my focus is sharpened.”
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portrait;
