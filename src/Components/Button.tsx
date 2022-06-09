
// PREFIXED

/* eslint-disable no-constant-condition */
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";

const StyledButton = styled.button<{
  variant: string;
  width?: string;
  padding?: string;
  minHeight?: string;
  margin?: string;
}>`
  background: ${(p) =>
    p.variant === "dark"
      ? theme.colors.mediumblue
      : "light"
      ? theme.colors.oldlace
      : ""};
  color: ${(p) =>
    p.variant === "dark"
      ? theme.colors.ghostwhite
      : "light"
      ? theme.colors.midnightblue
      : ""};
  border: ${(p) =>
    p.variant === "dark"
      ? "2px solid" + theme.colors.mediumblue
      : "light"
      ? "2px solid" + theme.colors.midnightblue
      : ""};
  border-radius: 4px;
  font-family: "Armin Grotesk Semibold";
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.02rem;
  padding: ${(p) => p.padding};
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  min-height: ${(p) => p.minHeight};
  width: ${(p) => p.width || "-webkit-fit-content"};
  width: ${(p) => p.width || "-moz-fit-content"};
  width: ${(p) => p.width || "fit-content"};
  margin: ${(p) => p.margin || "none"};
  cursor: pointer;

  :hover {
    background: ${(p) =>
      p.variant === "dark"
        ? theme.colors.violet
        : "light"
        ? theme.colors.midnightblue
        : ""};
    color: ${(p) =>
      p.variant === "dark"
        ? theme.colors.ghostwhite
        : "light"
        ? theme.colors.oldlace
        : ""};
    border: ${(p) =>
      p.variant === "dark"
        ? "2px solid" + theme.colors.violet
        : "light"
        ? "2px solid" + theme.colors.midnightblue
        : ""};
  }
`;

type Props = {
  text: string;
  variant: string;
  buttonHandler: ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  id?: string;
  width?: string;
  margin?: string;
  padding?: string;
  minHeight?: string;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = (props: Props) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <StyledButton
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        props.buttonHandler ? props.buttonHandler(e) : "";
        setButtonClicked(buttonClicked);
      }}
      name={props.text}
      variant={props.variant}
      id={props.id}
      minHeight={props.minHeight}
      padding={props.padding}
      margin={props.margin}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
