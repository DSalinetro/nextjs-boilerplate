"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type SonnerToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: SonnerToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as SonnerToasterProps["theme"]}
      richColors
      closeButton
      {...props}
    />
  );
};

export { Toaster };