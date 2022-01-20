import "./Card.css";
import addIcon from "../utility/add.png"

const Card = ({ data, addItem }) => {
  return (
    <div className="card">
      <img src={data.url} alt="cats" />
      <div className="bottom-row">
        <p>
          <b>{data.name}</b>
        </p>
        <button className="add-btn" onClick={addItem}>
          <img src={addIcon} alt="Add" />
        </button>
      </div>
    </div>
  );
};

export default Card;