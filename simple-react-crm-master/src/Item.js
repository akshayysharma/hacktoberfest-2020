import React from 'react'

function Item(props) {
  return (
    <div className="item" key={props.id}>
      <div className="item-info">
        <div className="name">
          {props.name}
        </div>
        <div className={`tag ${props.tag === "Dev" ? "tag-dev" : "tag-design"}`}>
          {props.tag}
        </div>
      </div>
      <button onClick={() => props.delCustomer(props.id)}><i className="fas fa-trash-alt"></i></button>
    </div>
  )
}

export default Item;