import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import { Button } from "../Button";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Card({ data, ...rest }) {

  const { user, setOrder } = useAuth();
  const isAdmin = user.isAdmin === 1;

  const [active, setActive] = useState(false);
  const [quantityOrder, setQuantityOrder] = useState(1);

  const image = `${api.defaults.baseURL}/files/${data.image}`
  
  const navigate = useNavigate();

  function handleDishDetails() {
    navigate(`/foods/${data.id}`)
  }

  function handleEditDish() {
    navigate(`/editdish/${data.id}`)
  }

  const handleFillHeart = () => {
    setActive(!active);
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

  const priceZeros = String(data.price).padEnd(5, "000") ;
  const priceFinal = priceZeros.substr(0,2)+"," + priceZeros.substr(3,3);

  return (
    <Container {...rest}>
      <img src={image} alt="Imagem do prato" />
      <h1 onClick={handleDishDetails}>{data.name} &gt;</h1>
      <p className="desktop">{data.description}</p>
      <span>R$ {priceFinal}</span>
      <div className="bottom">
        { isAdmin ? '' :
        <section>
          <button>
            <FiMinus
              size={24}
              onClick={handleMinusOrder}
            />
          </button>
          <p>{String(quantityOrder).padStart(2, "0")}</p>
          <button>
            <FiPlus
              size={24}
              onClick={handlePlusOrder}
            />
          </button>
        </section>
        }
        {
          isAdmin ? '' :
          <Button title="incluir" onClick={() => handleSetOrder(data, quantityOrder)}/>
        }
      </div>
      <div className="iconTop">
      {
        isAdmin ?
        <PiPencilSimple
          size={28}
          onClick={handleEditDish}
        />
        : 
        <FiHeart
          size={28}
          onClick={handleFillHeart}
          fill={active ? 'white' : 'none'} />
      }
      </div>
    </Container>
  )
}