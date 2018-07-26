import axios from 'axios'

const https = axios.create({
    timeout: 4000
  });

export default https