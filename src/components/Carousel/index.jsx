import { FiChevronRight, FiXCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Container, Gradient } from "./styles"
import { Card } from "../../components/Card";
import { api } from "../../services/api";

export function Carousel({ search }) {

  const [categories, setCategories] = useState([]);
  const [dish, setDish] = useState([]);
  
  const useGap = dish.length <= 4 ? true : false;  

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    async function fetchDishes() {
      const response = await api.get(`/foods?search=${search}`);
      setDish(response.data);
    }

    fetchCategories();
    fetchDishes();
  }, [search]);

  return (
    <Container>
      {
      categories.map((category) => (
        <section className="meal desktop" key={String(category.id)}>
          <h2>{category.name}</h2>
          <div className="cards">
            <Splide
              aria-label={String(category.name)}
              hasTrack={false}
              options={{
                rewind: true,
                width: '100%',
                perPage: 4,
                gap: useGap ? '25rem' : '',
                breakpoints: {
                  1489: {
                    perPage: 3
                  },
                  1182: {
                    perPage: 2
                  },
                  833: {
                    perPage: 1
                  }
                },
              }}
            >
            <SplideTrack>
            {
              dish.filter(dish => dish.category == category.name).map((dish) => (
                <SplideSlide key={String(dish.id)} >
                  <Card
                    key={String(dish.id)}
                    data={dish}
                  />
                </SplideSlide>
                ) 
              )
            }
            {dish
              .filter(d => d.category === category.name)
              .length === 0 && (
              <p className="noDishes"> <FiXCircle size={18} />Nenhum prato encontrado.</p>
            )}
            </SplideTrack>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <FiChevronRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <FiChevronRight />
              </button>
            </div>
          </Splide>
          <Gradient className="left" />
          <Gradient className="right" />
          </div>
        </section>
      ))
      }
    </Container>
  )
}