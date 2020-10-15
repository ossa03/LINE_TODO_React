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

export default function Form() {
	const classes = useStyles()

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					LINE TODO App
				</Typography>

				<form className={classes.form} noValidate>
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
					/>

					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						送信
					</Button>
				</form>
			</div>
		</Container>
	)
}
