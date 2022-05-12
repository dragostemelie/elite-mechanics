import React from "react";
import { Link, Text } from "./style";

interface IProps {
  children: string;
}

export const Phone = ({ children }: IProps) => {
  return (
    <Link href={"tel:" + children} id="phone">
      <Text>{children}</Text>
    </Link>
  );
};
