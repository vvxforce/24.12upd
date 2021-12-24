import * as React from "react";
import { Link } from "react-router-dom";

import "../css/CardItem.css";

const CardItem = ({ style, title, img, _id, key }) => {
  const width = Math.min(window.innerWidth * 0.55, 280);

  return (
    <div
      key={key}
      className="card-item"
      style={{
        width: width,
        height: width * 1.285714285714286,
        ...style
      }}
    >
      <Link to={`/product/${_id}`}  className="card-link">
        <img className="card-img" src={img} alt={title} />
        <h3 className="product-name">{title}</h3>
      </Link>
    </div>
  );
};

export default CardItem;
