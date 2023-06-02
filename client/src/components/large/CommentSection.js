import styled from "@emotion/styled";
import HeaderSmall from "../small/HeaderSmall";
import PublisherBox from "../small/PublisherBox";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 8px;
  gap: 24px;
  position: absolute;
  width: 360px;
  height: 387px;
  left: 16px;
  top: 297px;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 352px;
  height: 22px;
`;

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

const Comment = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${(props) => (props.grey ? "#BFBFBF" : "#000000")};
`;

function CommentSection() {
  return (
    <Box>
      <HeaderBox>
        <HeaderSmall>Discussion</HeaderSmall>
      </HeaderBox>
      <CommentBox>
        <CommentContainer>
          <Comment>
            Agree! De standaard Lorem Ipsum passage, in gebruik sinds de 16e
            eeuw.
          </Comment>
          <PublisherBox grey/>
        </CommentContainer>
      </CommentBox>
      <CommentBox>
        <CommentContainer>
          <Comment>
            Another comment here. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi, similique!
          </Comment>
            <PublisherBox grey />
        </CommentContainer>
      </CommentBox>
    </Box>
  );
}

export default CommentSection;
