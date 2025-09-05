export default function Card({ image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <button>See More</button>
      </div>
    </div>
  );
}
