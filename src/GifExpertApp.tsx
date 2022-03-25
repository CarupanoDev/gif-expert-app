import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./tests/GifGrid"


const GifExpertApp = () => {

  const [categories, setCategories] = useState (["Roy Mustang", "Death note", "Running"])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid
            key = {category}
            category={category}
          />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
