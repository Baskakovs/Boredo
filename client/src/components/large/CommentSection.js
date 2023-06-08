import styled from "@emotion/styled";

//redux imports
import { useSelector } from "react-redux";

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

  const comments = useSelector((state) => state.further.post.comments);
  console.log(comments, "comments")
  return (
    <Box>
      <HeaderBox>
        <HeaderSmall>Discussion</HeaderSmall>
      </HeaderBox>
      <CommentContainer>
        {comments.length <! 0 ? null : (
          comments.map((comment) => (
            <>
              <Comment
                id={comment.id}
                text={comment.text}
                date={comment.created_at}
                user={comment.user.name}
              />
              {comment.subcomments.length > 0 &&
                comment.subcomments.map((subcomment) => (
                  <Subcomment
                    key={subcomment.id}
                    id={subcomment.id}
                    text={subcomment.text}
                    date={subcomment.created_at}
                    user={subcomment.user}
                  />
                ))}
            </>
          ))
        )}
      </CommentContainer>
    </Box>
  );
}

export default CommentSection;
