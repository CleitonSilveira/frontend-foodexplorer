import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";

import { Container } from "./styles";
import { Ingredient } from "../../components/Ingredient";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Details() {
  
  const [data, setData] = useState([]);
  const [quantityOrder, setQuantityOrder] = useState(1);

  const { user, addOrder, orderItems, setOrder } = useAuth();
  const isAdmin = user.isAdmin === 1

  const params = useParams();
  const navigate = useNavigate();

  function handleEditDish() {
    navigate(`/editdish/${params.id}`)
  }

  function handlePlusOrder() {
    setQuantityOrder(quantityOrder + 1);
  }

  function handleMinusOrder() {
    quantityOrder <= 1 ? setQuantityOrder(1) :
      setQuantityOrder(quantityOrder - 1);
  }

  function handleSetOrder(data, quantityOrder) {
    const dish_id = data.id;
    setOrder({ dish_id, quantityOrder });
  }

  const image = `${api.defaults.baseURL}/files/${data.image}`
  const priceZeros = String(data.price).padEnd(5, "000");
  const priceFinal = priceZeros.substr(0, 2) + "," + priceZeros.substr(3, 3);

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, [params.id]);

  useEffect(() => {
    addOrder()
  }, [addOrder])


  return (
    <Container>
      <Header />
      <div className="page">
        <a href="/"> 	<FiChevronLeft size={32} /> voltar</a>
        <img src={image} alt="Imagem do prato" />
        <div className="dishInfo">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          {data.ingredients &&
            <div className="ingredients">
              {data.ingredients.map(ingredient => (
                <Ingredient
                  key={String(ingredient.id)}
                  title={ingredient.name}
                />
              ))
              }
            </div>
          }
          {isAdmin ?
            <section>
              <Button
                title="Editar prato"
                onClick={handleEditDish}
              />
            </section> :
            <section>
              <div className="items">
                <button>
                  <FiMinus
                    size={27}
                    onClick={handleMinusOrder}
                  />
                </button>
                <span>{String(quantityOrder).padStart(2, "0")}</span>
                <button>
                  <FiPlus
                    size={27}
                    onClick={handlePlusOrder}
                  />
                </button>
              </div>
              <ButtonIcon
                text="pedir - R$ "
                price={priceFinal}
                onClick={() => handleSetOrder(data, quantityOrder)}
              />
            </section>
          }
        </div>
      </div>
      <Footer />
    </Container>
  )
}