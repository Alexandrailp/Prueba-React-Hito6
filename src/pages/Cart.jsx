import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-5">
      <div
        className="mx-auto p-4 rounded shadow"
        style={{
          maxWidth: "820px",
          backgroundColor: "#111111",
          color: "#f5f5f5",
        }}
      >
        <h5 className="fw-bold mb-4">🛒 Carrito de compras</h5>

        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center mb-3"
            style={{ gap: "14px" }}
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{
                width: "55px",
                height: "55px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            <div
              className="text-capitalize fw-semibold"
              style={{ width: "140px" }}
            >
              {pizza.name}
            </div>

            <div
              className="fw-semibold"
              style={{ width: "90px", color: "#d6d6d6" }}
            >
              ${pizza.price.toLocaleString("es-CL")}
            </div>

            <div className="d-flex align-items-center ms-auto" style={{ gap: "10px" }}>
              <button
                onClick={() => decrease(pizza.id)}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #FFF",
                  background: "transparent",
                  color: "#FFF",
                  borderRadius: "6px",
                  fontWeight: "700",
                }}
              >
                -
              </button>

              <span className="fw-semibold" style={{ minWidth: "10px", textAlign: "center" }}>
                {pizza.count}
              </span>

              <button
                onClick={() => increase(pizza.id)}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #FFF",
                  background: "transparent",
                  color: "#FFF",
                  borderRadius: "6px",
                  fontWeight: "700",
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <h2 className="fw-bold mt-4 mb-3 text-white">
          Total: ${total.toLocaleString("es-CL")}
        </h2>

        <button className="btn btn-dark px-4 fw-semibold">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;