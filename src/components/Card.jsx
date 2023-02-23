const Card = (props) => {

  const { animal: { name, age, color, isVaccined }, children } = props;

  // Ternary operator
  const myClass = isVaccined ? 'vaccined' : 'notVaccined';

  // Same with standard if
  // if (animal.isVaccined === true) {
  //   myClass = "vaccined"
  // } else {
  //   myClass = "notVaccined"
  // }

  return (
    <div className={myClass} >
      <h3>{name}</h3>
      <p>Age: {age} | Color: {color} | Description: {children}</p>
    </div >
  )
}

export default Card;