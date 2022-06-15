import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap'
import List from '../components/List';

function Medicines(props) {
    const medData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022

        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021
        },
    ]
  
    const getId = (id) =>{
        alert(id);
    }
    return (
       <div>
            <List data={medData} onButton={getId}/>
       </div>

    )

}

export default Medicines;