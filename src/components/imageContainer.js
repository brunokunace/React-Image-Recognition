import React from 'react'
import FacePosition from './facePosition'

const ImageContainer = ({facePositions, image}) => {
    const styles = {
        container: {
          margin: '10% auto'
        },
        imageContainer: {
          position: 'relative',
          width: '50%',
          margin: '0 auto',
        },
        tag: {
            float: 'left',
            position:  'absolute',
            border: '3px solid green',
        }
      }  

    return (
    <div style={styles.container}>
        <div style={styles.imageContainer}>  
            {facePositions.map(({facePosition}, index) => {
            return <FacePosition facePosition = {facePosition} key={index}/>
            })}
            <img style={styles.image} src={image} alt="imagefile" />
        </div>
    </div>
    )
}

export default ImageContainer