import React from 'react'
import { 
    Grid,
    Card,
    Box,
    Avatar,
    CardContent,
    IconButton,
    CardMedia, 
    Link,
    AvatarGroup,
    Typography } from "@mui/material";
 import{
   mdiPinterest,
   mdiInstagram,
   mdiTwitter,
   mdiFacebook, 
   mdiPaletteOutline
 } from "@mdi/js";
 import Icon from "@mdi/react";

 
export default function Home() {
  
  const CARD_PROPERTY = {
     borderRadius: 3,
     boxShadow:0
  }
  return (
    <>
     <Grid
       item
       xs={12} 
       sm={6}
       md={6}
       lg={4}
       sx={{ width: '100%' }}
     >
      <Card sx={CARD_PROPERTY} variant = "outlined">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 2
          }} 
        >
         <Avatar
          sx={{
            width: 70,
            height: 70,
            mb: 2
          }}
          src = "/img/dexter.png"
         />
          <Typography variant='h6' sx={{fontWeight: 'bold'}}>
           Ricardo Arbois
          </Typography> 
          <Typography variant='body1' color="secondary">
           FullStack Developer
          </Typography> 
        </Box>
        <CardContent
         sx={{
           display: 'flex',
           justifyContent: 'space-between',
           textAlign: 'center'
         }}
        >
              <IconButton size="large">
              <Icon 
               path={mdiTwitter}
               color="#222"
               size={1.1}
               />
               </IconButton>
               <IconButton size="large">
                <Icon 
               path={mdiInstagram}
               color="#222"
               size={1.1}
               />
                </IconButton>
                <IconButton size="large">
                <Icon 
               path={mdiFacebook}
               color="#222"
               size={1.1}
               />
               </IconButton>
               <IconButton size="large">
                <Icon 
               path={mdiPinterest}
               color="#222"
               size={1.1}
               />
             </IconButton>
          
        </CardContent>
        </Card> 
     </Grid>

     <Grid
       item
       xs={12} 
       sm={6}
       md={6}
       lg={4}
       sx={{ width: '100%' }}
     >
       <Card sx={CARD_PROPERTY}>
       <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", 
            p: 3
          }} 
        >
             <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center" 
              }} 
            >
              <Icon 
                path={mdiPaletteOutline}
                size={1.3}
                color= '#222'
              />
               <Typography 
                 variant='h5'
                 sx={{
                   ml:1,
                   fontWeight: 'bold'
                 }}
                 >
                Inspirations
               </Typography>
            </Box>

        </Box>
        <Box
          sx={{
            position: 'relative',
            mb: 2
          }}
        >
         <CardMedia
            component='img'
            height = '250'
            image="/img/photo.jpg"
          />
            <Box
            sx={{
               position: 'absolute',
               bottom: 0,
               left: 0,
               right: 0,
               p: 2,
               background: '#000000d1'
            }}
          >
            <Typography
               variant="body1"
               color="white"
               sx={{
                 mb:1
               }}
            >
               Welcome
            </Typography>
            <Typography
               variant="h5"
               color="white"
               sx={{
                 mb:1
               }}
            >
               My Website
            </Typography>
          </Box> 
          
        </Box>
       <CardContent
         sx={{
           p: 3,
           mb: 0
         }}
       >
       <Typography
         variant = "body1"
         color="secondary"
         sx={{
          mb:1
         }}
       >
          Introduction
       </Typography>
       <Typography
         variant = "body1"
         color="secondary"
         sx={{
          mb:1
         }}
       >
          Meet the team of super powers
       </Typography>
       </CardContent>
       <Box
         sx={{
           p: 3,
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between'
         }}
       >
        <Link
           href='#'
           underline='always' 
           variant="body1"
           color="primary"
           sx={{
              fontWeight: 'bold'
           }}>
            Views
           </Link>
            <AvatarGroup max={5}>
              <Avatar src='/img/img1.png'/>
              <Avatar src='/img/img2.png'/>
              <Avatar src='/img/img3.png'/>
              <Avatar src='/img/img4.png'/>
              <Avatar src='/img/img5.png'/>
            </AvatarGroup>
       </Box>

       </Card>
       </Grid>
    </>
  )
}
