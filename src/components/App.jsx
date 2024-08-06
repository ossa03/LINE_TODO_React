import React, { useCallback, useState } from "react"
import Header from "./Header"
import Form from "./Form"
import LogBox from "./LogBox"

export default function App() {
	// state
	const [log, setLog] = useState("")

	const handleSubmit = useCallback(({ todo, date, time }) => {
		// GAS APIへデータを送信する(LINE_TODO_APPでwebアプリケーションとして導入したしたURL)
		// const GAS_API_URL = `https://script.google.com/macros/s/AKfycbwqOLNkBPoszr-pcng9ThgT-1R8wjQi4cJU1CZamocY8JNYkm36/exec`
		// URLは2024/08/06に更新した。
		const GAS_API_URL = `https://script.google.com/macros/s/AKfycbx9HvlZetTwKklrZkC4ZilBfyrUs_ei0KogjnmcPJDfrWrNLozuqwVSTs5NSHcFBjp1/exec`

		console.log("prePOST: \n\n\n ")

		// Send a POST request
		fetch(GAS_API_URL, {
			method: "POST",
			mode: "no-cors",
			"Content-Type": "application/x-www-form-urlencoded",
			body: JSON.stringify({
				todo,
				date,
				time,
			}),
			credentials: "include",
		})
			.then((res) => {
				console.log(res)
				console.log("GASのLINE_TODO_APPのWeb_APIへ送信しました")
				setLog("GASのLINE_TODO_APPのWeb_APIへ送信しました")
			})
			.catch((error) => console.log("Error:  ", error.message))
	}, [])

	return (
		<div className="App">
			<Header />
			<Form handleSubmit={handleSubmit} />
			<LogBox log={log} />
		</div>
	)
}
