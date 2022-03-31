import {describe, test, expect} from "vitest"
import {shallow} from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Test on <GifExpertApp/>', () =>{
  test('It should show the component correctly', () =>{
    const wrapper = shallow(<GifExpertApp defaultCategories={[]}/>)

    expect(wrapper).toMatchSnapshot()
  })

  test('It should show a list of categories', () =>{
    const categories = ['Inuyasha', 'Batman']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
