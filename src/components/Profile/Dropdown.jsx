import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  user-select: none;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > * + * {
    margin-left: 1rem;
  }

  .person-profile {
    height: 35px;
    border-radius: 5px;
  }

  .person-title {
    font-size: 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 120%;
  right: 0;
  margin-top: 25px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  /* Except the first one */
  > * + * {
    margin-top: 5px;
  }

  .option {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    border-radius: 10px;
  }

  .option:hover {
    background: #f2f2f2;
    cursor: pointer;
  }

  .option-text {
    margin-left: 10px;
    font-size: 13px;
    font-weight: normal;
  }
`;

const Dropdown = ({ onLogout, history, username, image }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Change state when clicked outside of dropdown
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      // Add event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dropdownRef, isOpen]);

  return (
    <Container ref={dropdownRef} onClick={toggleDropdown}>
      <Topbar>
        <img className="person-profile" src={image} alt="Person Profile" />
        <h1 className="person-title">{username || "—"}</h1>
        <span className="material-icons drop-icon">
          {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </Topbar>
      {isOpen && (
        <Overlay>
          <div className="profile option" onClick={() => history.push("/")}>
            <span className="material-icons">account_circle</span>
            <h2 className="option-text">My Profile</h2>
          </div>
          <div className="logout option" onClick={() => onLogout(history)}>
            <span className="material-icons">login</span>
            <h2 className="option-text">Logout</h2>
          </div>
        </Overlay>
      )}
    </Container>
  );
};

Dropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Dropdown);
