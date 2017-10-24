import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  padding: 0.75rem 0;
  ${"" /* background: #FFF; */} background: rgba(0,0,0,0.4);
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(23, 28, 33, 0.2);
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 2px solid #1692bb;

  a {
    color: #0366d6;
    ${"" /* color: #fff; */} text-decoration: none;
  }
`

const HeaderTitle = styled.h1`
  color: #0366d6;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`

const Header = () => (
  <Section>
    <Container>
      <HeaderTitle>
        <a href="/" title="Octoblu">
          Octoblu
        </a>
      </HeaderTitle>
      <a href="https://github.com/octoblu" title="GitHub">
        github.com/octoblu
      </a>
    </Container>
  </Section>
)

export default Header
