import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" font-serif  bg-secondary text-white py-10 px-8 md:py-20 md:px-32">
      <div className="flex-col md:flex-row md:flex md:justify-between md:items-center ">
        <div className="space-y-4 mt-0 md:mt-4 ">
          <h2 className="font-bold  text-subHeading-2">Company</h2>
          <ul className="space-y-4 font-regular">
            <li>
              <Link reloadDocument to="/about">FAQ</Link>
            </li>
            <li>
              <Link reloadDocument to="/about">About Us</Link>
            </li>
            <li>
              <Link reloadDocument to="/services">Services</Link>
            </li>
            <li>
              <Link reloadDocument to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 mt-8 md:mt-0">
          <h2 className="font-bold text-subHeading-2">Contact Us</h2>
          <ul className="space-y-4 font-regular">
            <li>+2349065531000</li>
            <li>vendorfinder18@gmail.com</li>
            <li>
              <ul className="flex space-x-4 md:items-center md:justify-between">
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          < Link to='/' reloadDocument>
            <img
              src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944512/footerLogo_le1tno.png"
              className="h-[70px] md:h-[120px]"
              alt="vendorFinder-logo"
            />
          </Link>
        </div>
      </div>
      <p className=" text-start md:text-center mt-10 md:mt-20 font-regular">
        © VendorFinder 2023, All Right Reserved.
      </p>
    </footer>
  );
};
export default Footer;
