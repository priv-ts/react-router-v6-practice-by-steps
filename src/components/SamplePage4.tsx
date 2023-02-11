import React from "react";
import {
  Outlet,
  useParams,
  useNavigate,
  NavigateFunction,
  NavLink,
} from "react-router-dom";

export const SamplePage4: React.VFC = () => {
  const active = {
    fontWeight: "bold",
    color: "#d57276",
  };

  const inActive = {
    fontWeight: "normal",
    color: "#65b2c6",
  };

  const linkStyle = (isActive: boolean) => {
    return isActive ? active : inActive;
  };

  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <h3>Sample Page 4</h3>
      <ul>
        <li>
          <NavLink to="child1" style={({ isActive }) => linkStyle(isActive)}>
            Show Child 1
          </NavLink>
        </li>
        <li>
          <NavLink to="child2" style={({ isActive }) => linkStyle(isActive)}>
            Show Child 2
          </NavLink>
        </li>
        <li>
          <NavLink to="123" style={({ isActive }) => linkStyle(isActive)}>
            Show Child 3
          </NavLink>
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
