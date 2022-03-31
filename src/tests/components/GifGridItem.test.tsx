import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe("Test on <GifGridItem/>", () => {
  const title = "The best app"
  const url = "https://localhost/algo.jpg"
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test("It should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("It should have a paragraph with the title", () => {
    const p = wrapper.find("p")
    expect(p.text().trim()).toBe(title)
  })

  test("It should have the same img and url from props", () => {

    const img = wrapper.find("img")

    expect(img.props().src).toBe(url)
    expect(img.props().alt).toBe(title)

  })

  test('Must have animate__fadeIn', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate__fadeIn')).toEqual(true);

  })
})
