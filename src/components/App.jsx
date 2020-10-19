import React, { useCallback } from 'react'
import Header from './Header'
import Form from './Form'

export default function App() {
	// const handleSubmit
	const handleSubmit = useCallback(({ todo, date, time }) => {
		// GAS APIへデータを送信する(LINE_TODO_APPでwebアプリケーションとして導入したしたURL)
		const GAS_API_URL = `https://script.google.com/macros/s/AKfycbwqOLNkBPoszr-pcng9ThgT-1R8wjQi4cJU1CZamocY8JNYkm36/exec`

		console.log('prePOST: \n\n\n ')

		// Send a POST request
		fetch(GAS_API_URL, {
			method: 'POST',
			mode: 'no-cors',
			'Content-Type': 'application/x-www-form-urlencoded',
			body: JSON.stringify({
				todo,
				date,
				time,
			}),
			credentials: 'include',
		})
			.then((res) => {
				console.log(res)
				console.log('送信しました')
			})
			.catch((error) => console.log('Error:  ', error.message))
	}, [])
	return (
		<div className='App'>
			<Header />
			<Form handleSubmit={handleSubmit} />
		</div>
	)
}
