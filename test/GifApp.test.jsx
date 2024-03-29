import { render, screen } from "@testing-library/react";
import GifApp from "../src/GifApp";

describe("Pruebas en el Componente App", () => {
  test("Debe mostrar el titulo", () => {
    
    render(<GifApp />);

    expect(screen.getByText('GifsApp')).toBeTruthy();
    
  });
});
