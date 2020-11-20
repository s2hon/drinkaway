import React, {useReducer} from "react";

function Count() {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "add") {
      return state + 1;
    } else {
      return state;
    }
  }, 0);

  const dogs = [
    {
      name: "Whatdabuddabingbong",
    },
    {
      name: "Real Quick",
    },
    {
      name: "Cool",
    },
    {
      name: "Questions?... Silence",
    },
    {
      name: "Good Luck",
    },
    {
      name: "Alrighty Folks",
    },
    {
      name: "BOXES",
    },
    {
      name: "Practice",
    },
    {
      name: "we're going to give you a chance to try it yourself",
    }
  ];

  return (
    <div className="App">
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{count}</p>
              <button className="btn btn-primary" onClick={() => dispatch("add")}>Drink!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
