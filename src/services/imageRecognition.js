import https from './https'

export const result = (images_file) => https.post('proxy/visual-recognition/api/v3/detect_faces?version=2018-03-19', images_file)

