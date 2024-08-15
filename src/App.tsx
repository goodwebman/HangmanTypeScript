import { useCallback, useEffect, useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from './wordList.json'

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)]
	})

	const [guessedLetters, setGuessedLetters] = useState<string[]>([])

	const inCorrectLetters = guessedLetters.filter(
		letter => !wordToGuess.includes(letter)
	)

  const isLoser = inCorrectLetters.length >= 6
	const isWinner = wordToGuess
		.split('')
		.every(letter => guessedLetters.includes(letter))


	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return

			setGuessedLetters(currentLetters => [...currentLetters, letter])
		},
		[guessedLetters, isLoser, isWinner]
	)

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key
			if (!key.match(/^[a-z]$/)) return

			e.preventDefault()
			addGuessedLetter(key)
		}
		document.addEventListener('keypress', handler)
		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [guessedLetters])

	
	return (
		<div className='max-w-[800px] flex flex-col gap-[2rem] m-[0_auto] items-center'>
			<div className='text-[2rem] text-center'>
				{isWinner && 'Winner! - Refresh to try again'}
				{isLoser && 'Nice try ;( - Refresh to try again'}
			</div>
			<HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
			<HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
			<div className='self-stretch'>
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetter={guessedLetters.filter(letter =>
						wordToGuess.includes(letter)
					)}
					inactiveLetters={inCorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	)
}

export default App
