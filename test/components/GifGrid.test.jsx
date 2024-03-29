import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid Component", () => {
  const currentSearchValue = "One piece";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid currentSearchValue={currentSearchValue} />);

    expect(screen.getByText("Cargando..."));
  });

  test("Debe mostrar items cuando se cargan las imágenes useFetchGif", () => {
    const gifs = [
      {
        id: "ABC",
        title: "One piece",
        src: { url: "https://localhost/onepiece_1.jpg" },
      },
      {
        id: "DEF",
        title: "One piece",
        src: { url: "https://localhost/onepiece_2.jpg" },
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    render(<GifGrid currentSearchValue={currentSearchValue} />);

    expect( screen.getAllByRole('img').length ).toBe(2);
    
  });
});
