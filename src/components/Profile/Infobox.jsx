import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Button from "./Button";
import Person from "../../assets/person.jpg";
import Loading from "../Loading";

const Parent = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 5;

  margin: 0 auto;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 12px;
  margin-top: 3rem;
  min-width: 50rem;
`;

const Child = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;

  .header_text {
    h1 {
      font-weight: 400;
      font-size: 25px;
    }

    h2 {
      font-weight: 300;
      font-size: 15px;
      color: #828282;
    }
  }

  .btn_container {
    align-self: center;
  }
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 2rem 4rem;

  h1 {
    font-size: 13px;
    line-height: 18px;
    color: #bdbdbd;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    line-height: 25px;
  }
`;

const Divider = styled.div`
  border: 0.5px solid #e0e0e0;
`;

const Picture = styled.img`
  border-radius: 8px;
  height: 55px;
`;

const Infobox = (props) => {
  const { user, isLoading } = props;
  console.log(user, isLoading);

  const { name, email, bio, phone } = user;

  return (
    <Parent>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Child>
            <div className="header_text">
              <h1>Profile</h1>
              <h2>Some info may be visible to other people</h2>
            </div>
            <div className="btn_container">
              <Button
                variant="primary"
                clickHandler={() => props.history.push("/edit")}
              >
                Edit
              </Button>
            </div>
          </Child>
          <Infodata title="photo" value={Person} />
          <Infodata title="name" value={name || "—"} />
          <Infodata title="bio" value={bio || "—"} />
          <Infodata title="phone" value={phone || "—"} />
          <Infodata title="email" value={email || "—"} />
        </>
      )}
    </Parent>
  );
};

const Infodata = ({ title, value }) => {
  let val;

  if (title === "photo") {
    val = <Picture src={value} alt="persons-profile" />;
  } else {
    val = <p>{value}</p>;
  }

  return (
    <>
      <Divider />
      <DataContainer>
        <h1>{title}</h1>
        {val}
      </DataContainer>
    </>
  );
};

export default React.memo(withRouter(Infobox));
