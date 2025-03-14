import Friend from "./Friend";
import friendsList from "../Data/friends";

function Friends() {
    return (<div>
        {friendsList.map((friend)=>(<Friend friend={friend} key={friend.id}/>))}
         </div>);    
}

export default Friends;