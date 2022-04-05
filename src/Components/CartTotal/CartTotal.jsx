import "./style.css"

export const CartTotal = ({cartProducts, setCartProducts}) => {

    const total = cartProducts.reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,0);

    const removeAll = () => {
        setCartProducts([])
    }

    return (
        <div className="cartProducts__totalContainer">
            <div className="totalContainer__info">
                <h4 className="info__total">Total</h4>
                <span className="info__money">R$ {total.toFixed(2)}</span>
            </div>
            <button className="totalContainer__button" onClick={() => removeAll()}>Remover Todos</button>
        </div>
    )
}