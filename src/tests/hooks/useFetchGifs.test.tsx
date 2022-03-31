import { describe, expect, test } from "vitest"
import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('Test on the useFetchGifs hook', () =>{
  test('It should return the initial state', async () =>{

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Camus'));

    const {data, loading} = result.current

    await waitForNextUpdate()
    expect(data).toEqual([])

    expect(loading).toBe(true)

  })

  test('It should return an imgs array and the loading on false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Camus'));
    await waitForNextUpdate()

    const {data, loading} = result.current

    expect(data.length).toBe(10)

    expect(loading).toBe(false)
  })
})
