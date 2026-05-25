import React, { useState } from "react";

const Formone = () => {
  const [val, setVal] = useState({ name: "", email: "" });

  const handleSubmit = (event) => {
    event.prevenDefault();
    console.log(val);
  };

  return (
    <div>
      <form onSubmit={handleSubmit()} action="">
        <input
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(event) => setVal({ ...val, email: event.target.value })}
          type="text"
          placeholder="email"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Formone;
