function Fruits(props) {
  return (
    <div>
      {props.fruits.map((i) => (
        <p key={i.id}>{i.fruitName}</p>
      ))}
    </div>
  );
}

export default Fruits;
