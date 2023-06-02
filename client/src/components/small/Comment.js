import styled from "styled-components";
import PublisherBox from "../small/PublisherBox";

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${(props) => (props.grey ? "#BFBFBF" : "#000000")};
`;

function Comment(){
    return(
        <CommentBox>
        <CommentContainer>
          <Text>
            Agree! De standaard Lorem Ipsum passage, in gebruik sinds de 16e
            eeuw.
          </Text>
          <PublisherBox grey/>
        </CommentContainer>
      </CommentBox>
    )
}
export default Comment;