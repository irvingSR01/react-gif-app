import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ currentSearchValue }) => {

  const { gifs, isLoading } = useFetchGifs( currentSearchValue );
  
  return (
    <>
    {
      isLoading && <h2>Cargando...</h2>
    }
      <div className="card-grid">
        {gifs.map((gif) => {
          return <GifItem key={gif.id} {...gif} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  currentSearchValue: PropTypes.string.isRequired,
}