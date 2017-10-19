import styled from "react-emotion"

const Section = styled.section`
  background: #c0cbd0;
  background: linear-gradient(135deg, #c0cbd0 0%,#e5e8ed 100%);
  background: #FFF;
  padding: 10rem 0;
  position: relative;

  ${'' /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 180%;
    transform: skewY(-12deg);
    z-index: -1;
    background-image: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 20%,#1cafc6 50%,#012690 110%);

  } */}
`

export default Section
