import React from "react";

type Props = {
  Message: string;
};

const SamplePage3: React.VFC<Props> = (props) => {
  return <p>{props.Message}</p>;
};

export default SamplePage3;
