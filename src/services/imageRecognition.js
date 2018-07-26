import https from './https'

export const result = (images_file) => https.post('/imagerecognition', images_file )

