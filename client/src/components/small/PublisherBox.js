import styled from "styled-components";

const Box = styled.div`
  width: 136px;
  display: flex;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

const Author = styled.span`
  width: 55px;
  height: 15px;
  left: 0px;
  top: 202px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: ${(props) => (props.grey ? "#BFBFBF" : "black")};
`;

const Date = styled.span`
  width: 68px;
  height: 15px;
  left: 68px;
  top: 202px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: ${(props) => (props.grey ? "#BFBFBF" : "black")};
`;

function PublisherBox({ grey }) {
  return (
    <Box>
      <Author grey={grey}>Author</Author>
      <Date grey={grey}>20/10/2021</Date>
    </Box>
  );
}

export default PublisherBox;
