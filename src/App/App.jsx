import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const App = () => {
  const [data, setData] = useState("");

  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        JSON.stringify(data),
        options
      );
      toast.success("Заказ принят!");
    } catch (e) {
      toast.error("Произошла ошибка!");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="data"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Ваш номер..."
            minLength={6}
            maxLength={20}
            required
          />
          <button type="submit" className="btn-submit">
            <p>
              <span>
                <FontAwesomeIcon icon={faCoffee} />
              </span>
              <span>ЗАКАЗАТЬ</span>
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
