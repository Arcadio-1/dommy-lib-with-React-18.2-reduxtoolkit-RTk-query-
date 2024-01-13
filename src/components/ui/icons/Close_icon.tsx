import React from "react";
import { cn } from "../../../lib/utils";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Close_icon = ({ className }: Props) => {
  return (
    <svg className={cn(" h-5 w-5 fill-first", className)} viewBox="0 0 200 200">
      <title />
      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
  );
};

export default Close_icon;
