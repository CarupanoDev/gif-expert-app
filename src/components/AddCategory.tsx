import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"

export const AddCategory = (
  { setCategories }:
    {
      setCategories: Dispatch<SetStateAction<string[]>>
    }) => {

  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategories((categories: any) => [inputValue, ...categories])
      setInputValue("")
    }
  }

  return (

    <form onSubmit={handleSubmit} action="">
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
