import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One piece"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe regresar un arreglo de gifs e isLoading en false', async () => { 
    const { result } = renderHook( () => useFetchGifs('One piece'));
    await waitFor(
        () => expect( result.current.gifs.length ).toBeGreaterThan(0)
    );

    const { gifs, isLoading } = result.current;

    expect( gifs.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();

   })
  
});
