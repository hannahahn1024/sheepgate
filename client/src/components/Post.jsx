import min6 from "../assets/min6.png";
import { format } from "date-fns";

export default function Post({ title, cover, author, createdAt }) {
    return (
        <div className="flex mb-2">
            <div className="mr-4">
                <img src={'http://localhost:4000/'+cover} className="w-60"/>
            </div>
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm">
                    <a className="text-blue-500">{author.username}</a>
                    <time className="ml-2">{format(new Date(createdAt), 'MMM dd, yyyy HH:mm')}</time>
                </p>
            </div>
        </div>
    );
}