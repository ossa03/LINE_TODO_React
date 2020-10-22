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
	submitted: {
		marginTop: 50,
	},
}))

export default function Form({ handleSubmit }) {
	const classes = useStyles()

	//TODO state
	const [todo, setTodo] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [submitted, setSubmitted] = useState(false)

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
		e.preventDefault() //submitのデフォルト動作(更新)をさせないように

		const formResults = {
			todo, //string  "提出物忘れずに"
			date, //string  "2020-10-15"
			time, //string  "09:17"
			// timestamp:DateオブジェクトはGASで作成することとする
		}

		// handleSubmitは親ComponentのAppからのprops
		console.log('formResults:  ', formResults)
		handleSubmit(formResults)
		console.log('Reactからtodo,date,timeを送信しました')
		console.log(todo, date, time)
		setSubmitted(true)
	}

	const onClear = () => {
		setTodo('')
		setDate('')
		setTime('')
		setSubmitted(false)
		console.log('クリアしました')
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					LINE TODO App
				</Typography>

				{submitted ? (
					<Typography component='h1' variant='h3' className={classes.submitted}>
						送信しました
					</Typography>
				) : (
					<form className={classes.form} onSubmit={onSubmit}>
						<TextField
							variant='outlined'
							margin='normal'
							multiline
							required
							fullWidth
							id='email'
							label='TODO'
							type='text'
							name='todo'
							autoFocus={true}
							onChange={OnInputTodo}
							value={todo}
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
							value={date}
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
							value={time}
						/>

						<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
							送信
						</Button>
					</form>
				)}

				<Button
					type='button'
					fullWidth
					variant='contained'
					color='secondary'
					className={classes.submit}
					onClick={onClear}
				>
					クリア
				</Button>
			</div>
		</Container>
	)
}
