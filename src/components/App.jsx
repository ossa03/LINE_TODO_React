import React from 'react'
import Header from './Header'
import Form from './Form'
// import axios from 'axios'

function App() {
	// const handleSubmit = ({ todo, date, time }) => {
	// 	// GAS APIへデータを送信する(LINE_TODO_APPでwebアプリケーションとして導入したしたURL)
	// 	const GAS_API_URL = `https://script.google.com/macros/s/AKfycbwAQBXoULSxtWVP5HNKs76NGLX85N5exFUe0wm_J36dhQ_qurI/exec`

	// 	console.log('prePOST: \n\n\n ')

	// 	// Send a POST request
	// 	// axios.defaults.baseURL = 'http://localhost:3000'
	// 	// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
	// 	// axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://line-todo-app.web.app'

	// 	axios({
	// 		method: 'post',
	// 		url: GAS_API_URL,
	// 		data: {
	// 			todo,
	// 			date,
	// 			time,
	// 		},
	// 		headers: { 'Access-Control-Allow-Origin': '*' },
	// 	})
	// 	// .then((res) => {
	// 	// 	console.log(res)
	// 	// 	window.alert('送信しました')
	// 	// })
	// 	// .catch((error) => console.log('Error:  ', error.message))
	// }

	const handleSubmit = ({ todo, date, time }) => {
		// GAS APIへデータを送信する(LINE_TODO_APPでwebアプリケーションとして導入したしたURL)
		const GAS_API_URL = `https://script.google.com/macros/s/AKfycbwqOLNkBPoszr-pcng9ThgT-1R8wjQi4cJU1CZamocY8JNYkm36/exec`

		console.log('prePOST: \n\n\n ')

		// Send a POST request
		// const formData = new FormData()
		// formData.append(('todo', todo))
		// formData.append(('date', date))
		// formData.append(('time', time))

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
	}

	return (
		<div className='App'>
			<Header />
			<Form handleSubmit={handleSubmit} />
		</div>
	)
}

export default App
