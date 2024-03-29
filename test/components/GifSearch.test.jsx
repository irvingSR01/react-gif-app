import { fireEvent, render, screen } from "@testing-library/react";
import { GifSearch } from "../../src/components";

describe("Pruebas en GifSearch component", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<GifSearch onNewSearchValue={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "One piece" } });

    // Si no tuviera el onInputChange fallaria
    expect(input.value).toBe("One piece");
  });

  test("Debe llamar onNewSearchValue si el input tiene un valor", () => {
    const inputValue = "One piece";
    
    const onNewSearchValue = jest.fn();

    render(<GifSearch onNewSearchValue={onNewSearchValue} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "One piece" } });
    fireEvent.submit(form);

    // screen.debug();

    expect(input.value).toBe("");
    expect(onNewSearchValue).toHaveBeenCalled();
    expect(onNewSearchValue).toHaveBeenCalledTimes(1);
    expect(onNewSearchValue).toHaveBeenCalledWith( inputValue );
  });

  test('No debe de llamar el onNewSearchValue si el input es vacío', () => {
    const onNewSearchValue = jest.fn();
    render(<GifSearch onNewSearchValue={onNewSearchValue} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // expect(onNewSearchValue).toHaveBeenCalledTimes(0); // una forma de hacerlo
    expect(onNewSearchValue).not.toHaveBeenCalled();
  })
});
