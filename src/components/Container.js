import styled from "react-emotion"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${ props => props.column ? "column" : "row" }
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
  position: relative;
`

export default Container
