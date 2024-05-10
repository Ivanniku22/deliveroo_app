// sanity.js
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'ob9y5tog',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client;