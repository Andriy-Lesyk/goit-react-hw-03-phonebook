import React from 'react'
import {Contacts, Contac, Btn} from "./Contacts.styled"


function Contact({ contacts, onDelete }) {
  
    return (
        <div>
          <Contacts>
          {
          contacts.map(contact=><Contac key={contact.id }>
                  <span>{contact.name} : {contact.number}</span>
                  <Btn onClick={() => (onDelete(contact.id))}>Delete</Btn>
                </Contac>
                )
          }
              
              
               
            </Contacts> 
        </div>
    )
}

export default Contact
