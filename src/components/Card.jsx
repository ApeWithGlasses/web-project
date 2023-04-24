import { cards } from "../App"

const Card = () => {
    return (
        cards.map((card) => (
            <div className="card">
                <img src={card.src} className="card__image" />
                <p className="card__description">{card.description}</p>
            </div>
        ))
    )
}

export default Card