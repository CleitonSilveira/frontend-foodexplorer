import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  
  const [data, setData] = useState({});
  const [orderItems, setOrderItems] = useState(0);
  const [order, setOrder] = useState();
  
  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar")
      }

    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:order");

    setData({});
  }

  function addOrder() {
      const oldItems = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
      let totalQuantity = 0;
  
      oldItems.forEach(item => {
        totalQuantity += item.quantityOrder;
      });
  
      setOrderItems(totalQuantity)
  
    if(order) {
      const oldItems = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
      const existingDishIndex = oldItems ? oldItems.findIndex(dish => dish.dish_id === order.dish_id) : -1;
      
      const updatedOrder = [ ...oldItems ];

      if(existingDishIndex !== -1) {
        updatedOrder[existingDishIndex].quantityOrder += order.quantityOrder;
      } else {
        updatedOrder.push(order);
      }

      localStorage.setItem("@foodexplorer:order", JSON.stringify(updatedOrder));

      setOrderItems(orderItems + order.quantityOrder);

      setOrder();
      alert("Prato(s) adicionado(s) ao pedido com sucesso");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      addOrder,
      order,
      orderItems,
      setOrder,
      user: data.user
      }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };