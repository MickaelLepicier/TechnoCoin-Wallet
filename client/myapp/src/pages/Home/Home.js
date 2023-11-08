import Buttons from "../../components/buttons/Buttons";
import Graph from "../../components/graph/Graph";
import "./Home.css";

export function Home() {
  return (
    <div className="home-container">
      {/* <h2>HomePage</h2> */}
      <Buttons />
      <Graph />
    </div>
  );
}

// export default Home;
