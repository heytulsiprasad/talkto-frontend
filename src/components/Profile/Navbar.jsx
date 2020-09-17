import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Icon from "./../../assets/logo-talk.png";
import Person from "./../../assets/person.jpg";

const NavbarContainer = styled.nav`
  grid-column: 2 / 5;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const Logo = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;

  img {
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    font-size: 20px;
    text-transform: lowercase;
    align-self: center;
  }

  &:active {
    color: inherit;
  }
`;

const Dropdown = styled.div`
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

const Navbar = () => {
  const topbarRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Change state when clicked outside of dropdown
  React.useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (topbarRef.current && !topbarRef.current.contains(event.target)) {
          console.log("Hit");
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
  }, [topbarRef, isOpen]);

  return (
    <NavbarContainer>
      <Logo to="/dash">
        <img src={Icon} alt="product-logo" />
        <h1>Talk.to</h1>
      </Logo>
      <Dropdown>
        <Topbar ref={topbarRef} onClick={toggleDropdown}>
          <img
            className="person-profile"
            src={Person}
            alt="person-looking-straight"
          />
          <h1 className="person-title">Xanthe Neal</h1>
          <span className="material-icons drop-icon">
            {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
        </Topbar>
        {isOpen && (
          <Overlay>
            <div className="profile option">
              <span className="material-icons">account_circle</span>
              <h2 className="option-text">My Profile</h2>
            </div>
            <div className="logout option">
              <span className="material-icons">login</span>
              <h2 className="option-text">Logout</h2>
            </div>
          </Overlay>
        )}
      </Dropdown>
    </NavbarContainer>
  );
};

export default Navbar;
