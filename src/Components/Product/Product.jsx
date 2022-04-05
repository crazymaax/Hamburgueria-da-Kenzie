import "./style.css"

export const Product = ({category, id, img, name, price, handleClick}) => {
    
    return (
        <div className="cardProduct">
            <figure className="cardProduct__figure">
                <img src={img} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div className="cardProduct__infos">
                <h3 className="infos__name">{name}</h3>
                <span className="infos__category">{category}</span>
                <span className="infos__price">R$ {price.toFixed(2)}</span>
                <button className="infos__button" onClick={() => handleClick(id)}>Adicionar</button>
            </div>
        </div>
    )
}