import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
// import { pizzas } from "../data/pizzas";
// import margarita from "../assets/margarita.jpg";
// import española from "../assets/española.jpg"; 
// import napolitana from "../assets/napolitana.jpg";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;