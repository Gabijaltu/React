
function Developer({developer}) {
  const {logo, company, new: isNew, featured: isFeatured, position, postedAt, contract, location} = developer;

  return (<div>
    <img src={logo} alt={company} />
    <p>{company}</p>
    {isNew && <p className="bg-amber-500">NEW!</p>}
    {isFeatured && <p>FEATURED</p>}
    <p>{position}</p>
    <p>{postedAt}</p>
    <p>{contract}</p>
    <p>{location}</p>
     </div>);
  
}

export default Developer;
