import "./emailList.css";

const EmailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals right into your inbox</span>
    <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button className="subscribe">Subscribe</button>
    </div>
    </div>
  );
};

export default EmailList;
