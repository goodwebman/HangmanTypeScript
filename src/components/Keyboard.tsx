const KEYS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]

type KeyBoardProps = {
	addGuessedLetter: (letter: string) => void
	activeLetter: string[]
	inactiveLetters: string[]
	disabled?: boolean
}

function Keyboard({
	addGuessedLetter,
	activeLetter,
	inactiveLetters,
	disabled = false,
}: KeyBoardProps) {
	return (
		<div className='grid keyboard gap-[0.5rem]'>
			{KEYS.map(key => {
				const isActive = activeLetter.includes(key)
				const isInactive = inactiveLetters.includes(key)
				return (
					<button
						onClick={() => addGuessedLetter(key)}
						className={`w-full border-[3px] border-black bg-none aspect-[1_/_1] text-[2.5rem] uppercase p-[0.5rem] font-bold text-black hover:bg-[hsl(200_100%_75%)] hover:text-white ${
							isActive ? 'bg-[hsl(200_100%_75%)] text-white' : ''
						} ${isInactive ? 'opacity-[0.3]' : ''} `}
						key={key}
            disabled={isActive || isInactive || disabled }
					>
						{key}
					</button>
				)
			})}
		</div>
	)
}

export default Keyboard
