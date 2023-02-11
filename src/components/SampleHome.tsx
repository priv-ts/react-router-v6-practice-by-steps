import React from "react";
import { Link } from "react-router-dom";

const SampleHome: React.VFC = () => {
  return (
    <>
      <h1>Sample Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="page1">Sample Page 1</Link>
          </li>
          <li>
            <Link to="page2">Sample Page 2</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SampleHome;
