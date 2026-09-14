import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Raptors = () => {
  return (
    <section
      id="raptors"
      className="raptor relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">RAPTORS</h1>

      <p className="rpt relative z-10">
        With extraordinary eyesight, powerful talons, and precise hunting
        abilities, raptors dominate the skies as some of nature's most efficient
        predators.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>BALD EAGLE</h4>
          <p>The iconic hunter of North America</p>
          <Link to="/raptors/BALD">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>GOLDEN EAGLE</h4>
          <p>The master of mountain skies</p>
          <Link to="/raptors/GOLDEN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>PEREGRINE FALCON</h4>
          <p>The fastest hunter on Earth</p>
          <Link to="/raptors/PEREGRINE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>HARPY EAGLE</h4>
          <p>The powerful predator of the rainforest</p>
          <Link to="/raptors/HARPY">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>RED-TAILED HAWK</h4>
          <p>The watchful hunter of open lands</p>
          <Link to="/raptors/REDTAIL">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>OSPREY</h4>
          <p>The specialist of fish-filled waters</p>
          <Link to="/raptors/OSPREY">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>GREAT HORNED OWL</h4>
          <p>The silent hunter of the night</p>
          <Link to="/raptors/HORNED">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>SECRETARY BIRD</h4>
          <p>The long-legged hunter of the plains</p>
          <Link to="/raptors/SECRETARY">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Raptors content will go here */}
    </section>
  );
};

export default Raptors;
