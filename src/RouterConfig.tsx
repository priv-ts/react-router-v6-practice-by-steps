import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import SampleHome from "./components/SampleHome";
import SamplePage1 from "./components/SamplePage1";
import SamplePage2 from "./components/SamplePage2";
import SamplePage3 from "./components/SamplePage3";
import {
  SamplePage4,
  SamplePage4Child1,
  SamplePage4Child2,
  SamplePage4Child3,
} from "./components/SamplePage4";

const RouterConfig: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SampleHome />} />
          <Route path="page1" element={<SamplePage1 />} />
          <Route path="page2" element={<SamplePage2 />} />
          <Route
            path="page3_hello"
            element={<SamplePage3 Message="Hello Router" />}
          />
          <Route
            path="page3_hi"
            element={<SamplePage3 Message="Hi Router" />}
          />
          <Route path="page4" element={<SamplePage4 />}>
            <Route index />
            <Route path="child1" element={<SamplePage4Child1 />} />
            <Route path="child2" element={<SamplePage4Child2 />} />
            <Route path=":childId" element={<SamplePage4Child3 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
