import perrete from '../assets/dog.jpeg';

const Card = () => {
  const title = "Hello I'm the title"
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={perrete} alt="Perro en el prado" />
    </div>
  )
}

export default Card;