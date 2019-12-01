import React, { CSSProperties } from "react";
interface Props {
    width?: number;
    height?: number;
    round?: boolean;
    square?: boolean;
    style?: CSSProperties;
    className?: string;
    dark?: boolean;
}
declare const Skeleton: React.FC<Props>;
export default Skeleton;
