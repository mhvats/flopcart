import "./Footer.css";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left container">
        <h4>{`Let's `}Connect</h4>
        <div className="left-items">
          <MailIcon />
          {` mail@gmail.com`}
        </div>
        <div className="left-items">
          <CallIcon />
          {` +91 0000000000`}
        </div>
        <div className="left-items">
          <PlaceIcon />
          {` India`}
        </div>
      </div>
      <div className="footer-right container">
        <h4>{`Contact Us`}</h4>
        <div>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div>
          <input type="email" placeholder="Enter Your Valid Email Adress" />
        </div>
        <div>
          <div>
            <textarea rows={4} cols={30} placeholder="Enter Your Message" />
          </div>
        </div>
      </div>
    </div>
  );
};
