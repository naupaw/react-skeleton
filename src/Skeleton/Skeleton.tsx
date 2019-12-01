import React, { CSSProperties } from "react";
import style from "./skeleton.css";

interface Props {
  width?: number;
  height?: number;
  round?: boolean;
  square?: boolean;
  style?: CSSProperties;
  className?: string;
  dark?: boolean;
}

const Skeleton: React.FC<Props> = props => {
  const propStyle: CSSProperties = {
    maxWidth: props.width,
    width: props.round || props.square ? props.width : "none",
    height: props.round || props.square ? props.width : props.height,
  };

  let innerClassName = [style.skeleton, props.className];
  if (props.round) {
    innerClassName.push(style.round);
  }

  if (props.dark) {
    innerClassName.push(style.dark);
  } else {
    innerClassName.push(style.light);
  }

  return (
    <div
      className={innerClassName.join(" ")}
      style={{ ...propStyle, ...props.style }}
    ></div>
  );
};

export default Skeleton;
