import styled, { css } from "styled-components";

export interface ContainerProps
{
	rounded?: boolean,
	/** Primary background. */
	primary?: boolean,
	/** Darker primary background. */
	dark?: boolean,
	column?: boolean,
	main?: boolean,
	inline?: boolean,
	auto?: boolean,
	wrap?: boolean,
	gap?: number,
	margin?: string,
	marginTop?: number, // Gaps are specified as rem, while this uses px and is covered with the margin prop. If this is repetitive, consider adding items to Styles.ts.
	padding?: string,
	alignItems?: string,
	alignSelf?: string,
	justifyContent?: string,
	hidden?: boolean,
	width?: string,
	height? : string,
}

export const Container = styled.div<ContainerProps>`
	display: ${props => props.hidden ? 'none' : 'flex'};
	flex-direction: row;

	${props => props.main && css`
		background: #F4F7FC;
		color: #000;
		font-family: 'Poppins';
		width: 100%;
		position: relative;
	`}

	${props => !props.inline ? css`
		@media (max-width: 1250px) {
			flex-direction: column;
		}`
		: css`
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin: 0;
	`}

	${props => (!props.inline || props.margin !== undefined) && css`margin: ${props.margin ? props.margin : '1rem'};`}

	${props => (!props.inline || props.gap !== undefined) && css`gap: ${props.gap || 0}rem;`}

	${props => props.rounded && css`
		background: #fff;
		color: #000;
		box-shadow: 0px 0px 4px #00000029;
		border-radius: 30px;
		padding: 2em;
	`}

	${props => props.primary && css`
		background: transparent linear-gradient(0deg, #6D56F3 0%, #2E1CA1D6 100%);
		color: #fff;
		box-shadow: none;
	`}

	${props => props.primary && props.dark && css`
		background: transparent linear-gradient(180deg, #4D2FA4 0%, #08003A 100%);
	`}

	${props => props.column && css`flex-direction: column;`}

	${props => props.auto && css`flex: auto;`}

	${props => props.wrap && css`flex-wrap: wrap;`} // Can I get this to work everywhere by default ?

	${props => props.padding && css`padding: ${props.padding};`}

	${props => props.alignItems && css`align-items: ${props.alignItems};`}

	${props => props.alignSelf && css`align-self: ${props.alignSelf};`}

	${props => props.justifyContent && css`justify-content: ${props.justifyContent};`}

	&[hidden] {
		display: none;
	}

	${props => props.marginTop && css`margin-top: ${props.marginTop}px;`}

	${props => props.width && css`width: ${props.width};`}

	${props => props.height && css`height: ${props.height};`}
`;
