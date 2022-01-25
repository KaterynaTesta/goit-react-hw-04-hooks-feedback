import styled from 'styled-components';

const FeedbackStyled = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    margin-right: 20px;
  }
  button {
    cursor: pointer;
    background: none;
    border-radius: 5px;
  }
  button:hover {
    background-color: grey;
    color: white;
  }
`;
export default FeedbackStyled;
