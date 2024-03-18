"use client";

import { ComponentType, FC } from "react";

const StarWrapper = <P extends object>(
  Component: ComponentType<P>,
  idName: string
): FC<P> => {
  // Return the HOC component
  const HOC: FC<P> = (props) => {
    return <Component {...props} />;
  };

  return HOC;
};

export default StarWrapper;
