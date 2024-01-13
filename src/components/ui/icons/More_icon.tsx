import React from "react";
import { cn } from "../../../lib/utils";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const More_icon = ({ className }: Props) => {
  return (
    <svg className={cn(" h-5 w-5 fill-first", className)} viewBox="0 0 16 16">
      <circle cx="2" cy="8" r="2" />
      <circle cx="8" cy="8" r="2" />
      <circle cx="14" cy="8" r="2" />
    </svg>
  );
};

export default More_icon;
