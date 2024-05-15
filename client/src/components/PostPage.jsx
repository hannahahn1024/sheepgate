import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    // console.log("id: ", id);
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo)
                });
            });
        // console.log(param); 
    }, []);

    if(!postInfo) return '';

    return (
        <div>
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="post image"/>
            {/* <h1>{postInfo.title}</h1> */}
        </div>
    );
}