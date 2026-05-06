function CardListStaggered() {
  return (
    <div className="parent">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="card-wrapper" key={index}>
          <div className="skeleton"></div>
          <div
            className="child"
            style={{ '--index': index } as React.CSSProperties}
          >
            card {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardListStaggered;
