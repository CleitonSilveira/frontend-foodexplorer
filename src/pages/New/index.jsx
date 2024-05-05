import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";

import { Container } from "./styles";
import { InputDishInfo } from "../../components/InputDishInfo";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { NewIngredient } from "../../components/NewIngredient";
import { api } from "../../services/api";

export function New() {

  const [dbCategory, setDbCategory] = useState([]);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleAddIngredientKeyDown(e) {
    if (e.key === 'Enter') {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }


  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != deleted));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  async function handleNewDish() {

    try {
      const response = await api.post("/foods", {
        name,
        category,
        price,
        description,
        ingredients
      });

      const food_id = response.data;

      if (image) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);

        await api.patch(`/foodimage/${food_id}`, fileUploadForm);
      }

      alert("Prato criado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar este prato")
      }
    }

  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/categories");
      setDbCategory(response.data);
    }

    fetchCategories();
  }, [])

  return (
    <Container>
      <Header />
      <div className="page">
        <Link to="/"> 	<FiChevronLeft size={22} /> voltar</Link>
        <h1>Novo prato</h1>
        <form action="">
          <div className="input-wrapper image">
            <label htmlFor="image">Imagem do Prato</label>
            <label className="inputImage" htmlFor="image"><FiUpload size={24} /> Selecione imagem</label>
            <InputDishInfo
              id="image"
              type="file"
              placeholder="Selecione imagem"
              onChange={handleImage}
            />
          </div>

          <div className="input-wrapper name">
            <label htmlFor="name">Nome</label>
            <InputDishInfo
              id="name"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-wrapper category">
            <label htmlFor="category">Categoria</label>
            <div className="select">
              <select
                id="category"
                onChange={e => setCategory(e.target.value)}
              >
                <option value=""></option>
                {dbCategory.map((category, index) => (
                  <option
                    key={index}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))
                }
              </select>
              <label className="arrowDown" htmlFor="category"><FiChevronDown size={24} /></label>
            </div>
          </div>

          <div className="input-wrapper ingredientsArea">
            <p>Ingredientes</p>
            <div className="ingredients">
              {
                ingredients.map((ingredient, index) => (
                  <NewIngredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => { handleRemoveIngredient(ingredient) }}
                  />
                ))
              }
              <NewIngredient
                $isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
                onKeyDown={handleAddIngredientKeyDown}
              />
            </div>
          </div>

          <div className="input-wrapper price">
            <label htmlFor="price">Preço</label>
            <InputDishInfo
              id="price"
              type="number"
              placeholder="R$00,00"
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div className="input-wrapper description">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button
            title="Salvar alterações"
            onClick={handleNewDish}
            className="save"
          />
        </form>
      </div>
      <Footer />
    </Container>
  )
}