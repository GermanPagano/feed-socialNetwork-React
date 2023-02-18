import React from "react";
import { Link } from "react-router-dom";
import "./Feed-Styles.css";
import Publisher from "../../components/Publisher/Publisher";

function Feed() {
  return (
    <div className="container container-feed col-10 ">

      <div className="col col-2 ">
        <div className=" title-hash ">#Explorar</div>
        <Link to={"https://www.linkedin.com/in/gerhpagano/"}>
          <div className="hash-container ">#Linkedin</div>
        </Link>
        <Link to={"https://german-pagano-portfolio.netlify.app/index.html"}>
          <div className="hash-container ">#Portfolio</div>
        </Link>
        <Link to={"https://github.com/GermanPagano"}>
          <div className="hash-container">#Git</div>
        </Link>
        <Link to={"https://git.com"}>
          <div className="hash-container">#otrohash</div>
        </Link>
        <Link to={"https://git.com"}>
          <div className="hash-container">#unomas</div>
        </Link>
      </div>

      <Publisher/>

      <div className="col col-3 data-user ">info</div>

    </div>
  );
}

export default Feed;
