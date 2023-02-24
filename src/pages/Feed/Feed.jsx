import React from "react";
import { Link } from "react-router-dom";
import "./Feed-Styles.css";
import Publisher from "../../components/Publisher/Publisher";
import { ImLinkedin2,ImGithub ,ImEvil2} from "react-icons/im";

function Feed() {

  return (
    <div className="container container-feed col-10 ">
      <div className="col col-2 column-hashes">
      
        <div className=" title-hash "> #Explorar </div>
        <Link to={"https://www.linkedin.com/in/gerhpagano/"}>
          <div className="hash-container ">
            <div className="full-vw">#Linkedin</div>
            <div className="min-vw">
              <ImLinkedin2 />
            </div>{" "}
          </div>
        </Link>
        <Link to={"https://german-pagano-portfolio.netlify.app/index.html"}>
          <div className="hash-container ">
            <div className="full-vw">#Portfolio</div>
            <div className="min-vw"><ImEvil2/></div>
          </div>
        </Link>
        <Link to={"https://github.com/GermanPagano"}>
          <div className="hash-container">
            <div className="full-vw">#Git</div> <div className="min-vw"><ImGithub/></div>
          </div>
        </Link>
      </div>
        
      <Publisher className="publisher-container" />

      <div className="col col-3 data-user ">info</div>
    </div>
  );
}

export default Feed;
