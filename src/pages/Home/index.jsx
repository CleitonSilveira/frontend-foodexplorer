import { useState, useEffect } from "react";
import { FiXCircle } from "react-icons/fi";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import macaronPng from "../../assets/pngegg2.png"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Home() {

  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const { addOrder, orderItems } = useAuth();

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    async function fetchDishes() {
      const response = await api.get(`/foods?search=${search}`);
      setDishes(response.data);
    }

    fetchCategories();
    fetchDishes();
  }, [search, dishes]);

  useEffect (() => {
    addOrder()
  }, [addOrder])
  
  return(
    <Container>
      <Header
        onChange={e => setSearch(e.target.value)}
        orderItems={orderItems}
      />
      <div className="page">
        <div className="top">
          <img src={macaronPng} alt="Imagem de ingredientes" />
          <div className="text txt">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
          <div className="mobile">
            {
            categories.map((category) => (
              <section className="meal" key={String(category.id)}>
                <h2>{category.name}</h2>
                <div className="cards">
                {
                  dishes.filter(dish => dish.category == category.name).map((dish) => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                      />
                    ) 
                  )
                }
                {dishes
                  .filter(d => d.category === category.name)
                  .length === 0 && (
                  <p className="noDishes"> <FiXCircle size={14} />Nenhum prato encontrado.</p>
                )}
                </div>
              </section>
            ))
            }
          </div>
          <Carousel search={search} />
      </div>
      <Footer className="footer" />
    </Container>
  )
}