import styled from "styled-components";

import SmallBlueButton from "./SmallBlueButton"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setSubcommentForm, setComments } from "../../slices/furtherSlice"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  font-family: Helvetica Neue;
  font-size: 14px;
  line-height: 22px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`

function ReplyContainer({comment_id}) {

    const dispatch = useDispatch()
    const subCommentForm = useSelector((state) => state.further.subCommentForm)
    function handleChange(e){
        dispatch(setSubcommentForm({text: e.target.value}))
    }

    const user_id = useSelector((state) => state.login.user.id)
    const comments = useSelector((state) => state.further.post.comments)

    function handleSubmitSubComment() {
        fetch(`/subcomments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: subCommentForm.text,
            comment_id: comment_id,
            user_id: user_id,
          }),
        })
          .then((res) => {
            if (res.ok) {
              res.json().then((subcomment) => {
                const updatedComments = comments.map((comment) => {
                  if (comment.id === comment_id) {
                    return {
                      ...comment,
                      subcomments: [...comment.subcomments, subcomment],
                    };
                  } else {
                    return comment;
                  }
                });
                dispatch(setComments(updatedComments))
                dispatch(setSubcommentForm({text: ""}))
              })
            }
          })
      }


  return (
    <Box>
      <TextArea 
      placeholder="Write a reply..." 
      name="reply"
      value={subCommentForm.text}
      onChange={handleChange}/>
      <ButtonContainer>
        <SmallBlueButton text={"Reply"} onClick={handleSubmitSubComment}/>
      </ButtonContainer>
    </Box>
  );
}

export default ReplyContainer;
