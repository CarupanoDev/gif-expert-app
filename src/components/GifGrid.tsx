import { GifGridItem } from "./GifGridItem"

import { useFetchGifs } from "../hooks/useFetchGifs"

interface GifGridProp {
  category: string
}

export const GifGrid = ({ category }: GifGridProp ) => {

  const { data: images, loading } = useFetchGifs( category )

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
          {
            images.map( image => (
              <GifGridItem
                // @ts-ignore
                key = {image.id}
                {...image}
              />
            ))
          }
      </div>
    </>
  )
}
