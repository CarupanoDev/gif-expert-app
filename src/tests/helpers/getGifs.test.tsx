import { describe, expect, test } from "vitest"
import { getGifs } from "../../helpers/getGifs"


describe('Tests on getGifs Fetch', () => {
  test('It must bring 10 elements', async() =>{
    const gifs = await getGifs('One Punch')

    expect(gifs.length).toBe(10)
    }
  )

  test('It must bring 10 elements', async() =>{
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0)
    }
  )
})
