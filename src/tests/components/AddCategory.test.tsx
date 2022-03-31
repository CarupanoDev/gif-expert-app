import { beforeEach, describe, expect, test, vi } from "vitest"
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe("Test  on AddCategory", () => {

  const setCategories = vi.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    vi.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test("it should show component correctly", () => {

    expect(wrapper).toMatchSnapshot()
  })

  test('it should change the input text', () => {
    const input = wrapper.find('input');
    const value = 'Hello, world!'

    input.simulate('change', {target: {value}});

    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('No posted info on submit', () =>{
    wrapper.find('form').simulate('submit', {preventDefault(){}})

    expect(setCategories).not.toHaveBeenCalled();
  })

  test('Should call the setCategories methods and clean the input text', () => {
    const input = wrapper.find('input');
    const value = 'Hello, machine!'
    const value2 = ""

    input.simulate('change', {target: {value}});

    wrapper.find('form').simulate('submit', {preventDefault(){}})

    expect(setCategories).toHaveBeenCalled();

    expect(input.prop('value')).toBe(value2)
  })

})
