import './PokeCard.css'

const PokeCard = ({...props}) => {
    const {name, type, experience, img} = props;
    return (
        <div className="PokeCard">
            <h2 className="PokeCard-name">{name}</h2>
            <img src={img}></img>
            <p>Type: {type}</p>
            <p>EXP: {experience}</p>
        </div>
        )
}

export default PokeCard;