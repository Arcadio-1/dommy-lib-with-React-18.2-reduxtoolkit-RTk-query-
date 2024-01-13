import React from "react";
import { cn } from "../../../lib/utils";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Back_icon = ({ className }: Props) => {
  return (
    <svg className={cn(" h-5 w-5 fill-first", className)} viewBox="0 0 24 24">
      <path d="M12,9.059V6.5c0-0.256-0.098-0.512-0.293-0.708C11.512,5.597,11.256,5.5,11,5.5s-0.512,0.097-0.707,0.292L4,12l6.293,6.207  C10.488,18.402,10.744,18.5,11,18.5s0.512-0.098,0.707-0.293S12,17.755,12,17.5v-2.489c2.75,0.068,5.755,0.566,8,3.989v-1  C20,13.367,16.5,9.557,12,9.059z" />
    </svg>
  );
};

export default Back_icon;
