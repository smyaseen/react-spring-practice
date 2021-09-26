import React, { useEffect, useState } from "react";
import AddContacts from "./AddContacts";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
        <AddContacts />
      </div>
      <div className="row">
        {contacts.map((contact) => (
          <SingleContact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
