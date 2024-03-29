import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem component', () => { 

    const title = 'One piece';
    const srcGif = { url: 'https://onepiece.com/onepiece.gif' };

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={title} src={srcGif} />)
        expect(container).toMatchSnapshot();
     })

     test('Debe mostrar la imagen con el url y alt indicados', () => {
        render( <GifItem title={title} src={srcGif} />)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(src.url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(srcGif.url);
        expect(alt).toBe(title);
      });

      test('Debe de mostrar el título en el componente', () => {
        render (<GifItem title={title} src={srcGif.url} />);
        expect(screen.getByText(title)).toBeTruthy();
      })

 })