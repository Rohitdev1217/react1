import React, { useRef } from "react";

const From = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input ref={nameRef} ijn type="text" placeholder="name" />
        <input ref={emailRef} type="text" placeholder="email" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default From;
