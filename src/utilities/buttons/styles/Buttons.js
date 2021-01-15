import tw, { styled } from 'twin.macro';

export const Submit = styled.button`
	${tw`bg-blue rounded-lg active:bg-green`}
	padding: 1rem 2rem;
	margin: 1rem auto;
`;

export const Login = styled.button`
	${tw`bg-green rounded-lg active:bg-blue`}
	padding: 1rem 2rem;
	margin: 1rem auto;
`;

export const Reset = styled.button`
	${tw`bg-stone rounded-lg`}
	color: white;
	padding: 1rem 2rem;
	margin: 1rem auto;
`;
