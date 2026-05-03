import { Link } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>

        <ul className="text-muted ps-3">
          {ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <p className="fw-bold">
          ${price.toLocaleString("es-CL")}
        </p>

        <div className="d-flex justify-content-between mt-3">
          <Link className="btn btn-outline-secondary btn-sm w-50 me-2" to="/pizza/p001">
            Ver más 
          </Link>
          <Link className="btn btn-dark btn-sm w-50" to="/cart">
            Añadir 🛒
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;