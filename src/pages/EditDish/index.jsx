import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container } from "./styles";
import { InputDishInfo } from "../../components/InputDishInfo";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { NewIngredient } from "../../components/NewIngredient";
import { api } from "../../services/api";

export function EditDish() {

  const [data, setData] = useState([]);
  const params = useParams();

  async function handleDelete() {
    const confirm = window.confirm("Deseja remover o prato?");

    if (confirm) {
      await api.delete(`/foods/${params.id}`);
      navigate("/");
    }
  }

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [dbCategory, setDbCategory] = useState("");
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

  async function handleUpdateDish() {

    try {
      const food_id = params.id;
      await api.put(`/foods/${food_id}`, {
        name,
        category,
        price,
        description,
        ingredients
      });

      if (image) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);

        await api.patch(`/foodimage/${food_id}`, fileUploadForm);
      }

      alert("Prato atualizado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar este prato")
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }
    fetchDish();

    async function fetchCategories() {
      const response = await api.get("/categories");
      setDbCategory(response.data);
    }

    fetchCategories();
  }, [params.id]);


  useEffect(() => {
    setName(data.name);
    setCategory(data.category);
    setPrice(data.price);
    setIngredients(data.ingredients);
    setDescription(data.description);
  }, [data]);

  return (
    <Container>
      <Header />
      <div className="page">
        <Link to="/"> 	<FiChevronLeft size={22} /> voltar</Link>
        <h1>Editar prato</h1>
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="image">Imagem do Prato</label>
            <label className="inputImage" htmlFor="image"><FiUpload size={24} /> Selecione imagem para alterá-la</label>
            <InputDishInfo
              id="image"
              type="file"
              placeholder="Selecione imagem para alterá-la"
              onChange={handleImage}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <InputDishInfo
              id="name"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="category">Categoria</label>
            <div className="select" id="select">
              <select
                id="category"
                onChange={e => setCategory(e.target.value)}
              >
                <option value={data.category}>{data.category}</option>
                {dbCategory && dbCategory.map((category, index) => (
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

          <div className="input-wrapper">
            <p>Ingredientes</p>
            <div className="ingredients">
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <NewIngredient
                    key={String(index)}
                    value={ingredient.name ? ingredient.name : ingredient}
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

          <div className="input-wrapper">
            <label htmlFor="price">Preço</label>
            <InputDishInfo
              id="price"
              type="number"
              placeholder="R$00,00"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <footer>
            <Button
              className="delete"
              title="Excluir prato"
              onClick={handleDelete}
            />
            <Button
              title="Salvar alterações"
              onClick={handleUpdateDish}
            />
          </footer>
        </form>
      </div>
      <Footer />
    </Container>
  )
}