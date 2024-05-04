import min6 from "../assets/min6.png";
import {format} from "date-fns";

export default function Post({title,summary,cover,createdAt}) {

    return (
        <div>
            <div>
                <img src = {min6}/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>
                    <time>{format(new Date(createdAt), 'MMM dd, yyyy HH:mm')}</time>
                </p>
            </div>
        </div>
        

    );
    
}