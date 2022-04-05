import "./reset.css";
import "./style.css";
import './App.css';
import { ProductsList } from "./Components/ProductsList/ProductsList";
import { Cart } from "./Components/Cart/Cart";
import { useEffect, useState } from "react";
import { CartTotal } from "./Components/CartTotal/CartTotal";

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const API = async () => {
      const response = await fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      const data = await response.json()

      setProducts(data)
    }

    API()
      .catch((err) => console.log(err))

  }, [])

  const filterAll = () => {
    if(inputValue !== "") {
      const searchedProducts = products.filter(product => {
        return product.name.toLowerCase().includes(inputValue) || product.category.toLowerCase().includes(inputValue)
      })

      setFilteredProducts(searchedProducts);
    }else{
      setFilteredProducts(products)
    }

  }

  return (
    <div className="App">
      <header className="header">

        <h1 className="header__title">Burger <span className="header__span">Kenzie</span></h1>

        <div className="header__searchArea">

          <input type="text" placeholder="Digitar Pesquisa" className="searchArea__input"value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
          <button className="searchArea__button" onClick={() => filterAll()}>Pesquisar</button>

        </div>

      </header>

      <main className="mainProducts">
        <ProductsList products={filteredProducts.length > 0 ? filteredProducts : products} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
      </main>

      <section className="cartProducts">
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        {cartProducts.length > 0 ? <CartTotal cartProducts={cartProducts} setCartProducts={setCartProducts}/> : <></>}
      </section>

    </div>
  );
}

export default App;
