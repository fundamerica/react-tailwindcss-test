import tw, { styled } from 'twin.macro';

export const Submit = styled.button`
	${tw`rounded-lg bg-primeGreen`};
	padding: 1rem 2rem;
	margin: 1rem auto;
`;

export const Login = styled.button`
	${tw`bg-blue rounded-lg`};
	padding: 1rem 2rem;
	margin: 1rem auto;
`;

export const Reset = styled.button`
	${tw`bg-stone rounded-lg`};
	color: white;
	padding: 1rem 2rem;
	margin: 1rem auto;
`;
