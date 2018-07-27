import React from 'react'

const FacePosition = ({facePosition}) => {
    const styles = {
        tag: {
            float: 'left',
            position:  'absolute',
            border: '3px solid green',
        }
      }  

    return (
        <div style={{...styles.tag, ...facePosition}} />
    )
}

export default FacePosition