function IconsCard() {
  const { title, html, css, javascript, react } = {
    title: "Front End Technologies",
    html: "https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png",
    css: "https://img.icons8.com/?size=512&id=21278&format=png",
    javascript:
      "https://swiffyslider.com/assets/img/brandlogos/javascript-1.svg",
    react:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
  };
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
