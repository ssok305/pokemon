import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleReset } from "../trainerSlice";
import { useNavigate } from "react-router-dom";

// name age hometown region img?
export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trainers = useSelector((state) => state.trainer);
  const [input, setInput] = useState({
    name: "",
    age: "",
    hometown: "",
    region: "",
    // image:""
  });

  function handleChange(e) {
    let key = e.target.id;
    setInput({ ...input, [key]: e.target.value });
  }
  function handleSubmit(e) {
    // prevent the page from reloading
    e.preventDefault();

    setInput({
      name: "",
      age: "",
      hometown: "",
      region: "",
    });
    dispatch(handleAdd(input));
  }
  function handleReset2() {
    setInput("");
    dispatch(handleReset());
  }

  function handleSend() {
    navigate("./Trainers");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input required id="name" value={input.name} onChange={handleChange} />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          required
          id="age"
          value={input.age}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="region">Region</label>
        <input
          id="region"
          required
          value={input.region}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="hometown">Hometown:</label>
        <input
          required
          id="hometown"
          value={input.hometown}
          onChange={handleChange}
        ></input>
        <br />
        {/* This is for image  */}
        {/* <label h>Image</label>
      <input id="image" value={input.image} onChange={handleChange}></input>
      <br /> */}
        <button>Submit</button>
        <button onClick={handleReset2} type="reset">
          Reset
        </button>
      </form>
      <div>
        {trainers.length > 0 &&
          trainers.map((trainer, index) => {
            return (
              <div key={index}>
                <h3> Name: {trainer.name}</h3>
                <h3> Age: {trainer.age}</h3>
                <h3> Region: {trainer.region}</h3>
                <h3> Hometown: {trainer.hometown}</h3>
              </div>
            );
          })}
      </div>
      <h1>THE BIG RED BUTTON</h1>
      <button onClick={handleSend}>THIS IS THE BIG RED BUTTON</button>
    </div>
  );
}
