import React from 'react'
import Alert from '@material-ui/lab/Alert'

export default function LogBox({ log }) {
	return <>{log && <Alert severity='info'>{log}</Alert>}</>
}
