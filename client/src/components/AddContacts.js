import { useState } from "react";

const AddContacts = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitContact = () => {
    fetch("http://localhost:8080/api/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={() => submitContact()}>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              className="validate"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="email"
              className="validate"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <button
            className="waves-effect waves-light btn"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContacts;
