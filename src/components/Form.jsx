import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function Form({ handleSubmit }) {
	const classes = useStyles()

	//TODO state
	const [todo, setTodo] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')

	// TODO methods
	const OnInputTodo = (e) => {
		setTodo(e.target.value)
	}
	const OnInputDate = (e) => {
		setDate(e.target.value)
	}
	const OnInputTime = (e) => {
		setTime(e.target.value)
	}

	// todo,date,time,timestampをAPIを使用してGASに送信する
	const onSubmit = (e) => {
		e.preventDefault()

		//// const timestamp = new Date() //作成した日時のDateオブジェクト  ( Fri Oct 16 2020 01:25:33 GMT+0900 (日本標準時))
		//! timestampはGASで作成することとする

		const formResults = {
			todo, //string  "提出物忘れずに"
			date, //string  "2020-10-15"
			time, //string  "09:17"
			//// timestamp, //Dateオブジェクト
		}

		// handleSubmitは親ComponentのAppからのprops
		console.log('formResults:  ', formResults)
		handleSubmit(formResults)
		setTodo('')
		setDate('')
		setTime('')
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					LINE TODO App
				</Typography>

				<form className={classes.form} noValidate onSubmit={onSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						multiline
						required
						fullWidth
						id='email'
						label='TODO'
						name='todo'
						autoFocus={true}
						onChange={OnInputTodo}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='date'
						label='日付'
						type='date'
						id='date'
						onChange={OnInputDate}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='time'
						label='時刻'
						type='time'
						id='time'
						onChange={OnInputTime}
					/>

					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						送信
					</Button>
				</form>
			</div>
		</Container>
	)
}
