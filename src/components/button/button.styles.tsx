import styled, { css } from "styled-components";
import { Colours } from "../../helpers/colours";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
	/** Orange. */
	secondary?: boolean,
	/** White background. */
	passive?: boolean,
	/** Transparent, white text. */
	white?: boolean,
	/** Dark translucent background. */
	dark?: boolean,
	black?: boolean,
	danger?: boolean,
	outline?: boolean,
	outlineFixed?: boolean,
	rounded?: boolean,
	/** Preserves the border for rounded buttons. */
	roundedBorder?: boolean,
	shadow?: boolean
	/** Unstyled, anchored text link. */
	link?: boolean,
	marginTop?: number // MT in px
	marginBottom?: number // MB in px
}

/** Creates an outline from the foreground colour (or the specified colour), while also setting the background colour. */
const outlined = (background: string, colour: string, borderColour?: string) => css`
	background: ${background};
	color: ${colour};
	border-color: ${borderColour || colour};
	border-style: solid;
	padding: 8px 20px; /* Subtract the border-size from the padding height. */
`;

/** Disabled for now. */
const hoveredBorder = (background: string, colour: string, borderColour?: string) => css`` || css`
	&:hover {
		${outlined(background, colour, borderColour)}
	}
`;

export const Button = styled.button<ButtonProps>`
	background: linear-gradient(to right, #6048f7, #8447ef);
	border: 2px none transparent;
	color: #fff;
	padding: 10px 20px;
	border-radius: 20px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	white-space: nowrap;
	cursor: pointer;

	&[hidden] {
		display: none;
	}

	${props => props.secondary && css`
		background: linear-gradient(to right, #ffa221, #ffbd23);
		/* TODO: Does the client want the hover effect to be like that ? It's missing for the primary button, and I kind of prefer it to be static. */
		${hoveredBorder('#fff', '#ffbd23')}
	`}

	${props => props.white && css`
		${outlined('none', '#fff')}
	`}

	${props => props.dark && css`
		background: #00000063;
	`}

	${props => props.black && css`
		background: #000;
		color: #fff;
	`}

	${props => props.passive && css`
		background: #fff;
		color: #000;
	`}
	
	${props => props.danger && css`
		background: ${Colours.danger};
		color: #fff;
	`}
	
	${props => props.outlineFixed && css`
		${outlined('#fff', '#6048F7')}
		${hoveredBorder('#fff', '#6048F7')}
	`}

	${props => props.outline && css`
		${outlined('#fff', '#8447ef')}
		${hoveredBorder('linear-gradient(to right, #6048f7, #8447ef)', '#fff')}
	`}

	${props => props.outline && props.secondary && css`
		${outlined('#fff', '#ffbd23')}
		${hoveredBorder('linear-gradient(to right, #ffa221, #ffbd23)', '#fff')}
	`}
	
	${props => props.outline && props.white && css`
		${outlined('none', '#fff')}
		${hoveredBorder('none', '#fff')}
	`}

	${props => props.outline && props.passive && css`
		${outlined('#fff', '#000', '#e9e9e9')}
		${hoveredBorder('#fff', '#000', '#e9e9e9')}
	`}

	${props => props.outline && props.danger && css`
		${outlined('#fff', Colours.danger)}
		${hoveredBorder('#fff', Colours.danger)}
	`}

	${props => props.rounded && css`
		padding: 5px;
		border-radius: 50%;
		height: 35px;
		width: 35px;
		align-content: center;
		
		${!props.roundedBorder && 'border: 0;'}

		&:hover {
			padding: 5px;
		}
	`}

	${props => props.shadow && css`box-shadow: 0 0 5px #5413C778;`};
	
	${props => props.marginTop && css`margin-top: ${props.marginTop}px;`};

	${props => props.marginBottom && css`margin-bottom: ${props.marginBottom}px;`};

	${props => props.link && css`
		background: none;
		color: #6750f7;
		font-size: 12px;
		font-weight: unset;
		padding: unset;
		justify-content: left;
	`}
`;
