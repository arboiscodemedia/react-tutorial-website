import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';



export default function About() {

const data =[
    { "year": "2022", "position": "IT Manager", "company": "Microsoft" },
    { "year": "2019", "position": "FullStack Developer", "company": "Google" },
    { "year": "2015", "position": "BackEnd Developer", "company": "Amazon" }
]

  return (
    <Card sx={{ display: 'flex'  }}>
  <Box sx={{ display: 'flex' , flexDirection: 'column'  }}>   
      <CardContent>
        <Typography component="div" variant='h5'>
           Ricardo Arbois
        </Typography>
        <Typography  component="div" variant="subtitle1">
           FullStack Developer
        </Typography>
     </CardContent>

  <Box sx={{ display: 'flex' }}>
    <Timeline position="alternate">
     {data.map((item, index) =>(  
      <TimelineItem>        
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {item.year}
        </TimelineOppositeContent>

        <TimelineSeparator>

          <TimelineConnector />
          <TimelineDot color="primary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />

        </TimelineSeparator>


        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {item.position}
          </Typography>
          <Typography>{item.company}</Typography>
        </TimelineContent>

      </TimelineItem>
     ))}
             
    </Timeline>
  </Box>
  </Box>
  
     <CardMedia
      component="img"
      sx={{ width: 400 }} 
      image="./img/photo.jpg"
      alt="This is my cover photo"/>

      
  </Card>
  )
}
