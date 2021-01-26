import './App.css';
import { Login, Submit, Reset } from './utilities/buttons/styles/Buttons';
import { Theme } from './utilities/themes/PrimeTheme';
import styled from 'styled-components';
import Tables from './components/tables/Tables';
import MultiLayout from './components/layouts/MultiLayout';

function App() {
	return (
		<>
			<Theme>
				<Container>
					<Heading isHeading={true}>Hello World</Heading>
					<HeadingTwo isHeading={true}>By the power of styled-components!</HeadingTwo>
					<Paragraph>
						Using <code>Theme</code> from <code>theme-provider</code>
					</Paragraph>
					<Paragraph>
						Styled container and heading examples show ability to pass props
					</Paragraph>
				</Container>
			</Theme>
			<h1 style={{ textAlign: 'center', fontSize: '42pt' }}>
				Tailwind UI Data Table example
			</h1>
			<Tables />
			<h1 style={{ textAlign: 'center', fontSize: '42pt' }}>
				Tailwind UI Application Shell Layout
			</h1>
			<MultiLayout />
			<div className='App'>
				<div className='App-header'>
					<div className='border-div'>
						<h3>Submit Button from buttons folder</h3>
						<Submit type='submit'>Submit</Submit>
					</div>
					<div className='border-div'>
						<h3>Login Button from buttons folder</h3>
						<Login type='button'>Login Here</Login>
					</div>
					<div className='border-div'>
						<h3>Reset Button</h3>
						<Reset>Reset Button</Reset>
					</div>
				</div>
			</div>
		</>
	);
}

const Container = styled.div`
	text-align: center;
	max-width: 100%;
	border: ${(props) => `15px solid ${props.theme.colors.stone}`};
	background-color: ${(props) => props.theme.colors.primeBlue};
	font-family: ${(props) => props.theme.fonts[0]};
`;

const Heading = styled.h1`
	font-size: ${({ isHeading, theme: { fontSizes } }) =>
		isHeading ? fontSizes.large : fontSizes.small};
	color: ${({ theme: { colors } }) => colors.primeGreen};
`;

const HeadingTwo = styled.h2`
	font-size: ${({ isHeading, theme: { fontSizes } }) =>
		isHeading ? fontSizes.medium : fontSizes.small};
	color: ${({ theme: { colors } }) => colors.powderWhite};
`;

const Paragraph = styled.p`
	font-size: ${({ isHeading, theme: { fontSizes } }) =>
		isHeading ? fontSizes.small : fontSizes.small};
	color: ${({ theme: { colors } }) => colors.powderWhite};
`;

export default App;
