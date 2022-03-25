export const getGifs = async ( category ) => {
  const apiKey = "4MT1CivNv3MY2zunDJOdrgpiQBu4N4a5"
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=${apiKey}`
  const resp = await fetch(url)

  const { data } = await resp.json()

  const gifs = data.map( img => {
    return {
      id : img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
}
