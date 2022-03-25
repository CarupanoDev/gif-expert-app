// eslint-disable-next-line import/no-duplicates,no-use-before-define
import React from "react"
// eslint-disable-next-line import/no-duplicates
import { useState } from "react"

export const AddCategory = ({ setCategories }: any) => {

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: any) => {
      setInputValue(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue.trim().length > 2){
      setCategories((categories: any) => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return(

      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={ inputValue }
          onChange={handleInputChange}
        />
      </form>
  )
}
