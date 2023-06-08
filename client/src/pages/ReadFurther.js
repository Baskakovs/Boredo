import { useParams } from "react-router-dom";
import {useEffect} from "react";

//import redux
import { useDispatch } from "react-redux"
import { setPost } from "../slices/furtherSlice"

//components
import FurtherText from "../components/large/FurtherText";
import CommentSection from "../components/large/CommentSection";
import BackBar from "../components/small/Back";

function ReadFurther() {
    const { id } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`/posts/${id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json().then((post)=>{
                    dispatch(setPost(post))
                })
            }
        })
    },[dispatch])

    return (
        <div>
            <BackBar/>
            <FurtherText/>
            <CommentSection />
        </div>
    )
}
export default ReadFurther;