import React from "react";
import audio from "./Welcome.mp3";

const Audio = (props, ref) => {
  return <audio src={audio} ref={ref} controls />;
};

export default React.forwardRef(Audio);
