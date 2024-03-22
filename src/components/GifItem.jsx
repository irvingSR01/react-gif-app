export const GifItem = ({ title, src, id }) => {
  return (
    <div className="card">
      <img src={src.url} />
      <p>{title}</p>
    </div>
  );
};
