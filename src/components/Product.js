function Product({ img, title, paragrapgh }) {
  return (
    <div className="wrap">
      <img src={img} width={"300px"} height={"170"} />
      <h2>{title}</h2>
      <h3>{paragrapgh}</h3>
    </div>
  );
}

export default Product;
