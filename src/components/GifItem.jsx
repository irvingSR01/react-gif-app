import PropTypes from 'prop-types'

export const GifItem = ({ title, src, id }) => {
  return (
    <div className="card">
      <img src={src.url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.PropTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}