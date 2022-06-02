/* eslint-disable no-constant-condition */
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";

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
}

const Button: React.FC<Props> = (props: Props) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const StyledButton = styled.button<{ text: string; variant: string; width?: string; children?: React.ReactNode; }>`
        background: ${props.variant  === "dark" ? theme.colors.mediumblue : "light" ? theme.colors.oldlace : ""};
        color: ${props.variant === "dark" ? theme.colors.ghostwhite : "light" ? theme.colors.midnightblue : ""};
        border: ${props.variant === "dark" ? "2px solid" + theme.colors.mediumblue : "light" ? "2px solid" + theme.colors.midnightblue : ""};
        border-radius: 4px;
        font-family: "Armin Grotesk Semibold";
        font-weight: 500;
        font-size: 1rem;
        line-height: 1rem;
        letter-spacing: 0.02rem;;
        padding: ${props.padding};
        min-height: ${props.minHeight};
        width: ${props.width || "fit-content"};
        margin: ${props.margin || "none"};
        cursor: pointer;

        :hover {
            background: ${props.variant === "dark" ? theme.colors.violet : "light" ? theme.colors.midnightblue : ""};
            color: ${props.variant === "dark" ? theme.colors.ghostwhite : "light" ? theme.colors.oldlace : ""};
            border: ${props.variant === "dark" ? "2px solid" + theme.colors.violet : "light" ? "2px solid" + theme.colors.midnightblue : ""};
        }
    `;
        
    return (
        <StyledButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => {props.buttonHandler ? props.buttonHandler(e) : ""; setButtonClicked(buttonClicked)}} name={props.text} text={props.text} variant={props.variant} id={props.id} >{props.text}</StyledButton>
    )
}

export default Button;