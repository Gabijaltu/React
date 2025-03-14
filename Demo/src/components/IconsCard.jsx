function IconsCard(card) {
  const { title, html, css, javascript, react } = card;
  return (
    <div>
      <p className="font-bold">{title}</p>
      <p className="flex">
        <img src={html} alt="html" className="h-60 p-10" />
        <img src={css} alt="css" className="h-63 p-5" />
        <img src={javascript} alt="javascript" className="h-63 p-10" />
        <img src={react} alt="react" className="h-60 p-17" />
      </p>
    </div>
  );
}

export default IconsCard;
