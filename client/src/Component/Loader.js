import React, { useState } from "react";
import { HourGlass } from "react-awesome-spinners";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  return loading && <HourGlass size={60} color={"hsl(258deg,100%,50%)"} />;
};

export default Loader;
