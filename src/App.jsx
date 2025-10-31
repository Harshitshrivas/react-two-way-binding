import React, { useState } from "react";

const App = () => {
  const [tittle, setTittle] = useState("");

  const formsubmit = (e) => {
    e.preventDefault();
    console.log("form submited sussrsfully by:  ", tittle);
    setTittle("");
  };
  function change(e) {
    setTittle(e.target.value);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          formsubmit(e);
        }}
      >
        <input
          onChange={change}
          type="text"
          value={tittle}
          placeholder="Enter you name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
