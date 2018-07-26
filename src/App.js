import React, { Component } from 'react';
import { result } from './services/imageRecognition'

class App extends Component {
  imageTest = (event) => {
    
    const fd = new FormData()
    fd.append('images_file', event.target.files[0])

    result(fd)
    .then(({data}) => console.log(data))
    .catch(({err}) => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <input type='file' onChange={this.imageTest} />
      </div>
    );
  }
}

export default App;
