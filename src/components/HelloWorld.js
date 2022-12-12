import React from 'react'
import Button from '@mui/material/Button';
import Stack from  '@mui/material/Stack';
import AlarmIcon from '@mui/icons-material/Alarm'

export default function HelloWorld() {
  return (
    <div>
        <h1>Button</h1>
        <Stack spacing={2} direction = "row">
         <Button variant="contained" color="primary" startIcon={<AlarmIcon/>}>
             Hello World
          </Button>
         <Button variant="contained" color="secondary" endIcon={<AlarmIcon/>}>
             Hello World
          </Button>
         <Button variant="outlined" color="success">Hello World</Button>
        </Stack>
    </div>
  )
}
