import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Reeflifes = () => {
  return (
    <section
      id="reeflifes"
      className="reeflife relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">REEF LIFE</h1>

      <p className="refl relative z-10">
        A vibrant underwater world where colorful fish, intricate corals, and
        remarkable creatures live together in one of the ocean's richest
        ecosystems.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>CLOWNFISH</h4>
          <p>The colorful resident of the anemone</p>
          <Link to="/reeflifes/CLOWNFISH">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>PARROTFISH</h4>
          <p>The reef's colorful algae grazer</p>
          <Link to="/reeflifes/PARROTFISH">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>BUTTERFLYFISH</h4>
          <p>The delicate explorer of coral gardens</p>
          <Link to="/reeflifes/BUTTERFLYFISH">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>LIONFISH</h4>
          <p>The striking hunter of the reef</p>
          <Link to="/reeflifes/LIONFISH">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>MANTIS SHRIMP</h4>
          <p>The tiny powerhouse of the reef</p>
          <Link to="/reeflifes/MANTISSHRIMP">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>BLUE TANG</h4>
          <p>The vibrant grazer of coral reefs</p>
          <Link to="/reeflifes/BLUETANG">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>SEA HORSE</h4>
          <p>The delicate wanderer of shallow reefs</p>
          <Link to="/reeflifes/SEAHORSE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>STARFISH</h4>
          <p>The fascinating wanderer of the seafloor</p>
          <Link to="/reeflifes/STARFISH">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Reeflifes content will go here */}
    </section>
  );
};

export default Reeflifes;
