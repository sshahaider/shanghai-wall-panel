import React from "react";
import { LogoIcon } from "./icons";

export default function Header() {
  return (
    <div className="sticky top-4 left-0 h-14 w-24 bg-background border rounded-r-full z-50 flex items-center justify-end px-2">
      <LogoIcon className="size-13" />
    </div>
  );
}
