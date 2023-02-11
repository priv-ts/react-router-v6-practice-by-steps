import React from "react";
import {
  Outlet,
  Link,
  useParams,
  useNavigate,
  NavigateFunction,
} from "react-router-dom";

export const SamplePage4: React.VFC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <h3>Sample Page 4</h3>
      <ul>
        <li>
          <Link to="child1">Show Child 1</Link>
        </li>
        <li>
          <Link to="child2">Show Child 2</Link>
        </li>
        <li>
          <Link to="123">Show Child 3</Link>
        </li>
      </ul>
      <Outlet />
      <button onClick={() => navigate("")}>clear</button>
    </>
  );
};

export const SamplePage4Child1: React.VFC = () => {
  return <h3>Sample Page 4 Child 1</h3>;
};

export const SamplePage4Child2: React.VFC = () => {
  return <h3>Sample Page 4 Child 2</h3>;
};

export const SamplePage4Child3: React.VFC = () => {
  type Param = {
    childId?: string;
  };

  const params: Param = useParams<Param>();

  return (
    <>
      <h3>Sample Page 4 Child 3</h3>
      <p>{`childId=${params?.childId}`}</p>
    </>
  );
};
