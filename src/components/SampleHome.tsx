import React from "react";
import { createSearchParams, Link } from "react-router-dom";

const SampleHome: React.VFC = () => {
  const params: string = createSearchParams({
    query1: "createQueryValue1",
    query2: "createQueryValue2",
  }).toString();

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
          <li>
            <Link to="page2?query1=directQueryValue1&query2=directQueryValue2">
              Sample Page 2 With Query1
            </Link>
          </li>
          <li>
            <Link to={`page2?${params}`}>Sample Page 2 With Query2</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SampleHome;
