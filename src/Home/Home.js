import React from "react";
import giphy from "./giphy.gif";
const Home = () => {
  return (
    <div>
      <p className="tc fw6 f-subheadline lh-solid ttu tracked-tight red">
        Asish <span className="yellow">Kumar</span>
      </p>

      <p className="tc f1 fw5 lh-solid ttu light-red animated bounceInLeft">
        Developer
      </p>
      <div className="tc">
        <img src={giphy} alt="as" title="presentation" frameBorder="0" />
      </div>
    </div>
  );
};

export default Home;
