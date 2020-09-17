import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr minmax(400px, 5fr) 2fr 0.5fr;
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
