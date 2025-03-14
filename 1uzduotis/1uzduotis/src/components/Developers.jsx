import Developer from "./Developer";
import developersList from "../Data/developers";

function Developers() {
    return (<div>
        {developersList.map((developer)=>(<Developer developer={developer} key={developer.id}/>))}
         </div>);    
}

export default Developers;