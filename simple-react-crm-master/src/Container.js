import React, {useState} from 'react'
import AddCustomer from './AddCustomer.js';
import List from './List.js';
import { v4 as uuidv4 } from "uuid";

function Container() {
  const [customers, setCustomers] = useState([{id: uuidv4(), name: "Brayden Wright", tag: "Dev"}]);

  const addCustomer = (name, tag) => {
    const newCustomer = {
      id: uuidv4(),
      name: name,
      tag: tag
    }
    setCustomers({
      customers: [...customers, newCustomer]
    })
  }

  const delCustomer = id => {
    setCustomers({
      customers: [
        ...customers.filter(customer => {
            return customer.id !== id;
        })
      ]
    })
  }
  
  return (
    <div>
      <AddCustomer addCustomer={addCustomer} />
      <List customers={customers} delCustomer={delCustomer} />
    </div>
  )
}

export default Container;