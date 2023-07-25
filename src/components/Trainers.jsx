import { useNavigate } from "react-router-dom";
import Ash from "../images/Ash.png";
import Clair from "../images/clair.png";
import Cynthia from "../images/Cynthia.webp";
import { useSelector } from "react-redux";

function randomPic() {
  let ran = Math.floor(Math.random() * 3);
  let arr = [Ash, Clair, Cynthia];
  return arr[ran];
}

export default function Trainers() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("./Pokemon");
  }
  function handleBack() {
    navigate("/");
  }
  const trainers = useSelector((state) => state.trainer);
  console.log(trainers);
  return (
    <div>
      <button onClick={handleBack}>Go Back to Homepage</button>
      <div>
        {trainers.map((trainer) => (
          <div key={trainer.id} onClick={handleClick}>
            <img width={130} height={190} src={randomPic()} />
            <h3>{trainer.name}</h3>
            <p>Age: {trainer.age}</p>
            <p>Region: {trainer.region}</p>
            <p>Hometown: {trainer.hometown}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
