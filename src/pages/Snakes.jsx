import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Snakes = () => {
  return (
    <section
      id="snakes"
      className="snake relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Snakes</h1>

      <p className="snk relative z-10">
        Silent hunters shaped by speed, stealth, venom, and remarkable survival
        instincts across forests, deserts, rivers, and grasslands.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>KING COBRA</h4>
          <p>The formidable master of the hood</p>
          <Link to="/snakes/king">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>GREEN ANACONDA</h4>
          <p>The heavyweight hunter of the waters</p>
          <Link to="/snakes/anaconda">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>BLACK MAMBA</h4>
          <p>The swift predator of the savanna</p>
          <Link to="/snakes/blackmamba">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>RETICULATED PYTHON</h4>
          <p>The giant constrictor of the wild</p>
          <Link to="/snakes/reticulate">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>RATTLESNAKE</h4>
          <p>The warning sound of the desert</p>
          <Link to="/snakes/rattle">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>BOA CONSTRICTOR</h4>
          <p>The powerful constrictor of the Americas</p>
          <Link to="/snakes/boa">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>GABOON VIPER</h4>
          <p>The master of camouflage</p>
          <Link to="/snakes/gaboonv">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>GREEN TREE PYTHON</h4>
          <p>The emerald hunter of the canopy</p>
          <Link to="/snakes/greenpy">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Snakes content will go here */}
    </section>
  );
};

export default Snakes;
