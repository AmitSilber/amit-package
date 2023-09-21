import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import chicken from './polite_chicky.json'

const ChickenLoader = () => {
  return (
    <Box alignItems='center' justifyContent='center' display='flex' height='100%' width='100%'>
      <Lottie
        style={{
          width: '180px',
          height: '180px',
          opacity: 0.2,
        }}
        animationData={chicken}
        loop={true}
      />
    </Box>
  )
}
export default ChickenLoader
