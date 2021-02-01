import React from 'react';
import 'twin.macro';
import { DivBlock } from './styles/GalleryStyles';

const BlockGallery = () => {
	return (
		<div tw='flex justify-around justify-center flex-wrap h-screen'>
			<DivBlock>
				<div tw='bg-red-100 m-2 w-full flex justify-center items-center'>1</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-200 m-2 w-full flex justify-center items-center'>2</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-300 m-2 w-full flex justify-center items-center'>3</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-400 m-2 w-full flex justify-center items-center'>4</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-500 m-2 w-full flex justify-center items-center'>5</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-600 m-2 w-full flex justify-center items-center'>6</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-700 m-2 w-full flex justify-center items-center'>7</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-800 m-2 w-full flex justify-center items-center'>8</div>
			</DivBlock>
			<DivBlock>
				<div tw='bg-red-900 m-2 w-full flex justify-center items-center'>9</div>
			</DivBlock>
		</div>
	);
};

export default BlockGallery;
