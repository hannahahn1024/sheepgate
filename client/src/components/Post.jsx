import min6 from "../assets/min6.png";
import { format } from "date-fns";
import { Link } from "react-router-dom"

export default function Post({ _id, title, cover, author, createdAt }) {
    return (
        <div className="flex mb-2">
            <div className="mr-4">
                <Link to={`/post/${_id}`}>
                    <img src={'http://localhost:4000/'+cover} className="w-60" alt="Post Image"/>
                </Link>
            </div>
            <div>
                <Link to={`/post/${_id}`}>
                    <h2 className="text-xl font-bold">{title}</h2>
                </Link>
                <p className="text-sm">
                    <a className="text-blue-500">{author.username}</a>
                    <time className="ml-2">{format(new Date(createdAt), 'MMM dd, yyyy HH:mm')}</time>
                </p>
            </div>
        </div>
    );
}