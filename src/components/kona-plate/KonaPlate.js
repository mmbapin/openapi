import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material'
import KonaPlateCard from './KonaPlateCard'

const KonaPlate = () => {
  return (
    <Container sx={{maxWidth: {lg: 'lg', md:'md'}, my: {lg: '60px'}}}>
       <Typography 
        variant='h1' 
        sx={{
          fontSize: '42px',
          lineHeight: '1.2',
          textAlign: 'center',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          KONA PLATE
        </Typography>
        <Typography component='p' sx={{textAlign: 'center', lineHeight: '1.2', fontSize:'20px'}}>Complete a convenient life where everuone is connected through the KONA platform</Typography>
        <Grid container columnSpacing={4} sx={{marginTop: '40px'}}>
          <Grid item xs={4}>
            <KonaPlateCard />
          </Grid>
          <Grid item xs={4}>
            <KonaPlateCard />
          </Grid>
          <Grid item xs={4}>
            <KonaPlateCard />
          </Grid>
        </Grid>
    </Container>
  )
}

export default KonaPlate