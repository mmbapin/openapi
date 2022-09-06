import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'

const KonaPlateCard = () => {
  return (
    <Card sx={{position: 'relative', borderRadius: '0'}}>
      <CardMedia 
        component="img"
        height="450"
        image="/images/jefferson-santos-V9sv7QrDUgc-unsplash.jpg"
        alt="green iguana"
      />
      <Box 
        className="overlay" 
        sx={{
          position: 'absolute',
          background: '#000',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          opacity: '0.5'
        }}
      ></Box>
      <CardContent 
        sx={{
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '10px',
          textAlign: 'center'
      }}>
        <Typography component='h5' sx={{fontSize: '20px', color: '#fff', padding: '0 44px', lineHeight: '1.2', marginBottom: '25px'}}>Easy and Fast Deployment & Integration</Typography>
        <Typography compoentn='p' sx={{fontSize: '14px', color: '#fff', padding: '0 30px', lineHeight: '1.3'}}>Leverage your existing IT investments quick and easy</Typography>
      </CardContent>
    </Card>
  )
}

export default KonaPlateCard