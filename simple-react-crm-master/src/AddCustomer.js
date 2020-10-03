import React, { useState } from 'react'


function AddCustomer(props) {
  const [name, setName] = useState();
  const [tag, setTag] = useState();
  const onNameChange = e => {
    setName(e.target.value)
  }
  const onTagChange = e => {
    setTag(e.target.id)
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.addCustomer(name, tag);
    setName("");
    setTag("");
    document.getElementById("Dev").checked = false
    document.getElementById("Design").checked = false
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Customer Name"
        value={name}
        onChange={onNameChange}
        autoComplete="off"
        required
      />
      <div className="form-tags">
        <input
          type="radio"
          name="tag"
          id="Dev"
          value={tag}
          onClick={onTagChange}
          required
        />
        <label htmlFor="Dev">Dev</label>
        <input
          type="radio"
          name="tag"
          id="Design"
          value={tag}
          onClick={onTagChange}
          required
        />
        <label htmlFor="Design">Design</label>
      </div>
      <button>
        + Add Customer
      </button>
    </form>
  )
}

export default AddCustomer;