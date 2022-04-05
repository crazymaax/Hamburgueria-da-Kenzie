import "./style.css"

export const Cart = ({cartProducts, setCartProducts}) => {

    const remove = (productId) => {
        
        const allOtherProducts = cartProducts.filter((item) => item.id !== productId);

        const indexOfProduct = cartProducts.findIndex(({ id }) => id === productId);

        if(cartProducts[indexOfProduct].quantity > 1){
            cartProducts[indexOfProduct].quantity -= 1
            setCartProducts([...cartProducts])
        }else{
            setCartProducts(allOtherProducts)
        }

    }

    return (
        <>
            <h3 className="cartProducts__title">Carrinho de compras</h3>
            {cartProducts.length > 0 ?
            (
                <>
                    <ul className="cartProducts__list">
                        {cartProducts.map((product, index) => { 
                            const {category, id, img, name, price, quantity} = product
                            
                            return (         
                                <li key={index} className="list__item">
                                    <figure className="item__figure">
                                        <img src={img} alt={name} />
                                        <figcaption>{name}</figcaption>
                                    </figure>
                                    <div className="item__info">
                                        <p className="info__title">{quantity} {name}</p>
                                        <span className="info__category">{category}</span>
                                        <span className="info__category">R$ {price}</span>
                                    </div>
                                    <button className="item__buttom" onClick={() => remove(id)}>Remover</button>
                                </li>
                            )
                        })}
                    </ul>
                </>
            ) : (
                <div className="cartProducts__empty">
                    <p className="empty__title">Sua sacola está vazia</p>
                    <span className="empty__addItens">Adicione itens</span>
                </div>
             )}
        </>
    )
}