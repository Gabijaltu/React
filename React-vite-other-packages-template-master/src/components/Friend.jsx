
function Friend({friend}) {
  const {name, isOnline, avatar} = friend;

  return (<div>
    <img src={avatar} alt={name} />
    <h1>{name}</h1>
    <p>{String(isOnline)}</p>
    {isOnline && <p className="bg-amber-500 p-3">Online</p>}
     </div>);
  
}

export default Friend;
