function InfoCardGrid({ items, columns = 'g3' }) {
  return (
    <div className={`grid ${columns}`}>
      {items.map(({ icon, title, description }) => (
        <article className="card" key={title}>
          <div className="ico" aria-hidden="true">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

export default InfoCardGrid;
