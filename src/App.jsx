import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Animals from "./pages/Animals";
import Reptiles from "./pages/Reptiles";
import Birds from "./pages/Birds";
import Marine from "./pages/Marine";

import Bigcat from "./pages/Bigcat";
import Canines from "./pages/Canines";
import Primates from "./pages/Primates";
import Giants from "./pages/Giants";

import Snakes from "./pages/Snakes";
import Crocodiles from "./pages/Crocodiles";
import Lizards from "./pages/Lizards";
import Turtles from "./pages/Turtles";

import Raptors from "./pages/Raptors";
import Songbirds from "./pages/Songbirds";
import Waterfowl from "./pages/Waterfowl";
import Exoticbirds from "./pages/Exotic";

import Oceangiants from "./pages/Oceangiants";
import Apex from "./pages/Apex";
import Reeflifes from "./pages/Reef";
import Deepsea from "./pages/Deepsea";

import Creature from "./pages/Creature";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/reptiles" element={<Reptiles />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/marine" element={<Marine />} />

        {/* inner pages of a particular card like animal */}
        <Route path="/bigcat" element={<Bigcat />} />
        <Route path="/canine" element={<Canines />} />
        <Route path="/primates" element={<Primates />} />
        <Route path="/giants" element={<Giants />} />

        {/* inner pages of a particular card like reptiles */}
        <Route path="/snakes" element={<Snakes />} />
        <Route path="/crocodiles" element={<Crocodiles />} />
        <Route path="/lizards" element={<Lizards />} />
        <Route path="/turtles" element={<Turtles />} />

        {/* inner pages of a particular card like birds */}
        <Route path="/raptors" element={<Raptors />} />
        <Route path="/songbirds" element={<Songbirds />} />
        <Route path="/waterfowl" element={<Waterfowl />} />
        <Route path="/exoticbirds" element={<Exoticbirds />} />

        {/* inner pages of a particular card like ocean */}
        <Route path="/oceangiants" element={<Oceangiants />} />
        <Route path="/apex" element={<Apex />} />
        <Route path="/reeflifes" element={<Reeflifes />} />
        <Route path="/deepsea" element={<Deepsea />} />

        {/* Creature Detail Page start here for the routing its an animal section */}
        <Route path="/bigcat/:animal" element={<Creature />} />
        <Route path="/canines/:animal" element={<Creature />} />
        <Route path="/primates/:animal" element={<Creature />} />
        <Route path="/giants/:animal" element={<Creature />} />

        {/* Creature Detail Page start here for the routing its an reptile section*/}
        <Route path="/snakes/:reptile" element={<Creature />} />
        <Route path="/crocodiles/:reptile" element={<Creature />} />
        <Route path="/lizards/:reptile" element={<Creature />} />
        <Route path="/turtles/:reptile" element={<Creature />} />

        {/* Creature Detail Page start here for the routing its an birds section*/}
        <Route path="/raptors/:bird" element={<Creature />} />
        <Route path="/songbirds/:bird" element={<Creature />} />
        <Route path="/waterfowls/:bird" element={<Creature />} />
        <Route path="/exoticbirds/:bird" element={<Creature />} />

        {/* Creature Detail Page start here for the routing its an marine section*/}
        <Route path="/oceangiants/:marine" element={<Creature />} />
        <Route path="/apex/:marine" element={<Creature />} />
        <Route path="/reeflifes/:marine" element={<Creature />} />
        <Route path="/deepsea/:marine" element={<Creature />} />
      </Routes>

      {/* Footer of the project */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
