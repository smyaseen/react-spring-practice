const SingleContact = ({ contact }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              {contact.firstName + " " + contact.lastName}
            </span>
          </div>
          <div className="card-action">
            <p>{contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
