import React from 'react'
import Item from './Item.js';

function List(props) {
  return (
    <div className="list">
      {props.customers.map((customer) => (
        <Item
          key={customer.id}
          id={customer.id}
          name={customer.name}
          tag={customer.tag}
          delCustomer={props.delCustomer}
        />
      ))}
    </div>
  )
}

export default List;