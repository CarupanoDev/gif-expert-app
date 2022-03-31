import axios from "axios"

export const getGifs = async ( category: any ) => {
  const apiKey = "4MT1CivNv3MY2zunDJOdrgpiQBu4N4a5"
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`
  const resp = await axios(url)

  const { data } = await resp.data

  return data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
}
