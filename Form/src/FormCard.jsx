function FormCard() {
  const { title, explain, firstName, lastName, email, subscribeButton } = {
    title: "SUBSCRIBE",
    explain: "Sign up with your email address to recieve news and updates",
    firstName: <input type="text" placeholder="First name" />,
    lastName: <input type="text" placeholder="Last name" />,
    email: <input type="text" placeholder="Email" />,
    subscribeButton: <button>Subscribe</button>,
  };
  return (
    <div class="bg-blue-200 p-10 rounded-xl m-5">
      <div class="text-2xl text-center">{title}</div>
      <div className="text-center p-3">{explain}</div>
      <div class="flex justify-center">
        <p className="bg-white m-2 p-1 rounded-sm">{firstName}</p>
        <p className="bg-white m-2 p-1 rounded-sm">{lastName}</p>
        <p className="bg-white m-2 p-1 rounded-sm">{email}</p>
      </div>
      <div className="justify-self-center bg-red-300 w-40 rounded-sm p-2 mt-5 text-white text-center">
        {subscribeButton}
      </div>
    </div>
  );
}

export default FormCard;
