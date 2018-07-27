import axios from 'axios'

const https = axios.create({
  auth: {
    username: "apikey",
    password: "XXXXXXXXXX"
  },
});

export default https