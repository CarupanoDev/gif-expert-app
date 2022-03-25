import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./tests/GifGrid"


const GifExpertApp = () => {

  const [categories, setCategories] = useState (["One Punch!!", "Samurai X", "Dragon Ball"])

  // const handleAdd = () => {
  //   setCategories([...categories, "newElement"])
  // }

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
