import React, {useReducer} from "react";
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './data/listdb.json'

function Count() {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "add") {
      return state + 1;
    } else {
      return state;
    }
  }, 0);

  return (
    <div className="App">
      <Header />
          <Layout>
          <div className="row mt-5">
            {data.map(item => (
              <div key={item.name} className="card mx-auto col-4">
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{count}</p>
                  <button className="btn btn-primary" onClick={() => dispatch("add")}>Drink!</button>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      <Footer/>
    </div>
  );
}

export default Count;
