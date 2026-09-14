import React from "react";
import { Link } from "react-router-dom";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const Reptiles = () => {
  return (
    <section
      id="reptile"
      className="sec relative h-screen w-full overflow-hidden before:absolute before:inset-0 before:bg-[url('./public/images/Reptile_bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:scale-105"
    >
      <h1 className="relative z-10 text-6xl">Reptiles</h1>

      <p className="top relative z-10 ">
        From ancient survivors to stealthy hunters, discover the remarkable
        reptiles that have mastered life across some of Earth's harshest
        environments.
      </p>

      <div className="container z-10">
        <div id="box1" className="boxes ">
          <span>01</span>
          <h4>SNAKES</h4>
          <p>Silent hunters.</p>
          <Link to="/snakes">
            <i>↗</i>
          </Link>
        </div>
        <div id="box2" className="boxes ">
          <span>02</span>
          <h4>CROCODILES</h4>
          <p>Ancient predators.</p>
          <Link to="/crocodiles">
            <i>↗</i>
          </Link>
        </div>
        <div id="box3" className="boxes ">
          <span>03</span>
          <h4>LIZARDS</h4>
          <p>Masters of adaptation.</p>
          <Link to="/lizards">
            <i>↗</i>
          </Link>
        </div>
        <div id="box4" className="boxes ">
          <span>04</span>
          <h4>TURTLES</h4>
          <p>Armored survivors.</p>
          <Link to="/turtles">
            <i>↗</i>
          </Link>
        </div>
      </div>

      <h3 className="relative z-10 text-3xl">LIFE BEFORE TIME</h3>

      <p className="down relative z-10 ">
        For millions of years, reptiles have adapted, evolved, and endured. From
        silent snakes and armored crocodiles to agile lizards and ancient
        turtles, they continue to thrive in some of the world's most diverse
        habitats.
      </p>
    </section>
  );
};

export default Reptiles;
