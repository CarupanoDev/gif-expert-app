import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


const GifExpertApp = ({defaultCategories = []}: {defaultCategories: string[]}) => {

  const [categories, setCategories] = useState <string[]>(defaultCategories)

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
