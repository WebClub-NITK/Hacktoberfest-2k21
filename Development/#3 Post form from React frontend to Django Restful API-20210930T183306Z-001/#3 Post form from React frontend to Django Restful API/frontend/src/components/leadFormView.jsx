import React, { Component, Fragment } from "react";

class LeadFormView extends Component {
  render() {
    const { lead, onFormChange, onSubmit } = this.props;
    return (
      <Fragment>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="leadName">Name</label>
            <input
              type="text"
              className="form-control"
              id="leadName"
              placeholder="Name"
              value={lead.name}
              onChange={(event) => onFormChange(event, "name")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="leadEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="leadEmail"
              placeholder="Enter email"
              value={lead.email}
              onChange={(event) => onFormChange(event, "email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="leadMessage">Message</label>
            <input
              type="text"
              className="form-control"
              id="leadMessage"
              placeholder="Enter message"
              value={lead.message}
              onChange={(event) => onFormChange(event, "message")}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default LeadFormView;
