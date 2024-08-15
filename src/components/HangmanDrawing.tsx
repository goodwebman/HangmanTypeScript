import { HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG } from './STICKMAN'

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
	numberOfGuesses: number
}


function HangmanDrawing( {numberOfGuesses} : HangmanDrawingProps) {
	return (
		<div className='relative'>
			{BODY_PARTS.slice(0, numberOfGuesses)}
			<div className='h-[50px] w-[10px] bg-black top-0 right-0 absolute' />
			<div className='h-[10px] w-[200px] bg-black ml-[120px]' />
			<div className='h-[400px] w-[10px] bg-black ml-[120px]' />
			<div className='h-[10px] w-[250px] bg-black' />
		</div>
	)
}

export default HangmanDrawing
