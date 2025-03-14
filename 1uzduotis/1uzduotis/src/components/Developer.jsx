
function Developer({developer}) {
  const {logo, company, isNew, isFeatured, position, postedAt, contract, location} = developer;

  return (<div>
    <img src={logo} alt={company} />
    <p>{company}</p>
    {isNew && <p>NEW!</p>}
    {isFeatured && <p>FEATURED</p>}
    <p>{position}</p>
    <p>{postedAt}</p>
    <p>{contract}</p>
    <p>{location}</p>
     </div>);
  
}

export default Developer;
