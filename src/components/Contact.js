import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="avatar" />
        <div>
          <p className="name">{this.props.name}</p>

          <div
            className="status"
            onClick={event => {
              this.state.online
                ? this.setState({ online: false })
                : this.setState({ online: true });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <p className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  avatar: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};
export default Contact;