import styled from "@emotion/styled";

// components
import HeaderSmall from "../small/HeaderSmall";
import Comment from "../small/Comment";
import Subcomment from "../small/SubComment";

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

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function CommentSection() {
  return (
    <Box>
      <HeaderBox>
        <HeaderSmall>Discussion</HeaderSmall>
      </HeaderBox>
      <CommentContainer>
        <Comment />
        <Subcomment />
        <Subcomment />
        <Comment />
        <Comment />
        <Subcomment />
        <Subcomment />
        <Comment />
        <Subcomment />
        <Subcomment />
        <Comment />
        <Subcomment />
        <Subcomment />
      </CommentContainer>
    </Box>
  );
}

export default CommentSection;
