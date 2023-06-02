import { useParams } from "react-router-dom";
import {useEffect} from "react";

//components
import FurtherText from "../components/large/FurtherText";
import CommentSection from "../components/large/CommentSection";
import BackBar from "../components/small/Back";

function ReadFurther() {
    const { id } = useParams();

    useEffect(() => {
        fetch(`/posts/${id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
        .then((json) => {
            console.log(json);
        })
    }, [id])

    return (
        <div>
            <BackBar />
            <FurtherText postId={id}/>
            <CommentSection />
        </div>
    )
}
export default ReadFurther;