import React, { Component } from 'react';
import { result } from './services/imageRecognition'
import {Button, Icon, Preloader} from 'react-materialize'
import ImageContainer from './components/imageContainer';

class App extends Component {

  initialState = {
    image: null,
    facePositions: [],
    loading: false
  }
  state = this.initialState
  onSelectedImage = (event) => {
    this.setInitialState()
    this.setState({ loading: true})

    if (event.target.files && event.target.files[0]) {
      if(!this.isImage(event.target.files[0])) {
        this.setState({ loading: false})
        return window.Materialize.toast('Você precisa selecionar uma imagem', 2500, 'blue')
      }

      this.preloadImage(event)

      const fd = new FormData()
      fd.append('images_file', event.target.files[0])
  
      result(fd)
      .then(({data}) => {
        const result = data.images[0].faces
        if(!result.length) {
          return Promise.reject({message: 'Não foi reconhecida nenhuma pessoa nesta imagem =('})
        }
        const facePositions = result.map(({face_location}) => {
          return  {
            facePosition: {
                height: face_location.height + 'px',
                width: face_location.width + 'px',
                top: face_location.top + 'px',
                left: face_location.left + 'px'
            }
          }
        })
        this.setState({ facePositions, loading: false })
        window.Materialize.toast('Imagem reconhecida com sucesso!!!', 2500, 'green')

      
      })
      .catch(({message}) => {
        this.setInitialState()
        window.Materialize.toast(message, 2500, 'red')
        console.log('error ->', message)
      })
    }
  }
  isImage = (file) => {
    return file['type'].split('/')[0]==='image'
  }
  preloadImage = (event) => {
    let reader = new FileReader();
    reader.onload = (e) => {
        this.setState({image: e.target.result});
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  setInitialState = () => {
    this.setState(this.initialState)
  }
  render() {
    const styles = {
      app: {
        width: '100%',
      },
      header: {
        textAlign: 'center'
      },
      inputFile: {
        display: 'none'
      },
      loadingContainer: {
        margin: '20% auto',
        textAlign: 'center',
      }

    }
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <h4>Image Recognition - IBM Watson</h4>
          <h6>Selecione uma imagem com pessoas para identificar os rostos</h6>
          <input 
            style={styles.inputFile} 
            type='file' 
            onChange={this.onSelectedImage} 
            ref={fileInput => this.fileInput = fileInput}
            />
          <Button waves='light' onClick={() => this.fileInput.click()}>
            Selecione uma foto
            <Icon right>cloud_upload</Icon>
          </Button>
        </div>
        { this.state.loading 
        ? <div style={styles.loadingContainer}><Preloader size='small' active={this.state.loading}/></div>
        :  this.state.image 
          ? 
          <ImageContainer facePositions = {this.state.facePositions} image = {this.state.image} />
          : null 
      }
      </div>
    );
  }
}

export default App;
