import styled, {css} from "styled-components";
import { Colours } from "../../helpers/colours";

export interface TextProps
{
	titleStyle?: boolean,
	subTitle?: boolean,
	small?: boolean,
	smaller?: boolean,
	bold?: boolean,
	primary?: boolean,
	white?: boolean,
	grey?: boolean,
	lightGrey?: boolean,
	danger?: boolean,
	margin?: string,
	marginTop?: number,
	pointer? : boolean
	center? : boolean,
	colour?: string,
	wrap?: boolean,
}

export const Text = styled.span<TextProps>`
	font-family: 'Poppins';
	color: #000;

	${props => props.titleStyle && css`
		font-size: 1.2rem;
		font-weight: bold;
	`}
	
	${props => props.subTitle && css`
		font-size: 1.1rem;
		font-weight: bold;
	`}

	${props => props.small && css`font-size: 0.9rem;`}

	${props => props.smaller && css`font-size: 0.8rem;`}

	${props => props.bold && css`font-weight: bold;`}

	${props => props.primary && css`color: ${Colours.primary};`}
	
	${props => props.white && css`color: #fff;`}

	${props => props.grey && css`color: #4C4A64;`}

	${props => props.lightGrey && css`color: #7E84A3;`}

	${props => props.danger && css`color: ${Colours.danger};`}

	${props => props.colour && css`color: ${props.colour};`}
	
	${props => props.margin && css`margin: ${props.margin};`}

	${props => props.marginTop && css`margin-top: ${props.marginTop}px;`}

	${props => props.pointer && css`cursor: pointer;`}

	${props => props.center && css`text-align: center;`}

	${props => props.wrap && css
	`
		white-space: pre-wrap;
		word-break: break-word;
	`}
`;
