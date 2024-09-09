import { useState } from 'react';

function Contact() {
  //multi inputs filed
  let [inputs, setInputs] = useState({});

  //handle inputs changes
  let handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //handle  submit
  const handelSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <h1>Contact Me</h1>
      <img src='https://placehold.co/300x100/orange/white' alt='thumg' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        doloremque amet libero dicta nulla totam harum velit aliquid deserunt
        reprehenderit quia alias, assumenda perferendis quibusdam cumque
        inventore! Unde, eveniet tenetur.
      </p>
      <hr />
      <form onSubmit={handelSubmit}>
        <br />
        <br />
        <label>
          Enter your name:
          <input
            type='text'
            name='username'
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <br />
        <label>
          Enter your age:
          <input
            type='number'
            name='age'
            value={inputs.age || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <br />
        <br />
        <select name='mycar' value={inputs.mycar} onChange={handleChange}>
          <option value=''>Select</option>
          <option value='Ford'>Ford</option>
          <option value='Volvo'>Volvo</option>
          <option value='Fiat'>Fiat</option>
        </select>
        <br />
        <br />
        <br />
        <br />
        <textarea
          name='message'
          value={inputs.message || ''}
          onChange={handleChange}
        >
          Content of the textarea.
        </textarea>
      </form>

      <p>
        - your name is: {inputs.username} <br /> - age is: {inputs.age} <br />-
        message : {inputs.message}
        <br />- My Car : {inputs.mycar}
      </p>
    </>
  );
}

export default Contact;
