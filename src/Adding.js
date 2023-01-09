import React from "react";

const Adding = ({ questions, setQuestions }) => {
  const six = {
    id: new Date().getSeconds(),
    title: "",
    info: "",
  };
  const [data, setData] = React.useState(questions);
  const [element, setElement] = React.useState(six);
  const [showInput, setShowInput] = React.useState(false);
  console.log(questions, "questions");
  console.log(setQuestions, "setQuestions");
  let lolo = questions.concat(six);
  console.log(lolo, "questions.concat(six)questions.concat(six)");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ element });
    setQuestions(questions.concat(element));
    setElement("");
    setShowInput(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElement((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log({ element });
  };

  return (
    <div className="containerAdding">
      {!showInput && (
        <button
          className="adding-button"
          onClick={() => {
            setShowInput(true);
          }}
        >
          Adding
        </button>
      )}
      {showInput && (
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="id">ID:</label>
        <input
          readOnly
          id="id"
          type="text"
          name="id"
          value={element && element.id}
          onChange={handleChange}
        /> */}
          <label htmlFor="title">TITLE:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={element && element.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="info">INFO:</label>
          <input
            id="info"
            type="text"
            name="info"
            value={element && element.info}
            onChange={handleChange}
            required
          />
          <button className="adding-one" type="submit">
            add one
          </button>
        </form>
      )}
    </div>
  );
};

export default Adding;
