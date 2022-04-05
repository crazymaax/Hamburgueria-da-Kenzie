import { Product } from "../Product/Product"

export const ProductsList = ({products, cartProducts, setCartProducts}) => {

    const handleClick = (productId) => {
        
        const cartItem = products.find((product) => product.id === productId)

        const indexOfProduct = cartProducts.findIndex(({ id }) => id === productId);

        if(indexOfProduct === -1){
            cartItem.quantity = 1
            setCartProducts([...cartProducts, cartItem])
        }else{
            cartProducts[indexOfProduct].quantity += 1
            setCartProducts([...cartProducts])
        }
        
      }
    
    return(
        <>
        {products.map((product) => {
            return <Product key={product.id} category={product.category} id={product.id} img={product.img} name={product.name} price={product.price} handleClick={handleClick}/>
        })}
        </>
    )
}