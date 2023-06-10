import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ContactForm = () => {
  return (
    <section className="w-full mx-auto ">
      <div className="flex flex-col md:flex-row md:mx-32 md:my-10 md:h-[32rem]  bg-[#0C4E8B] text-white">
        <div className="w-full px-4 md:px-20  md:py-10">
          <h5 className="font-serif text-body-2 mb-3 font-regular">
            <TrendingFlatIcon style={{ fontSize: "35px", color: "#EFBC88" }} />
            Contact Us
            <TrendingFlatIcon
              style={{
                transform: "rotate(180deg)",
                fontSize: "35px",
                color: "#EFBC88",
              }}
            />
          </h5>
          <h2 className="text-2xl font-bold mb-6"> Have Questions?</h2>
          <p className="mb-8">
            Feel free to contact us any time. We will get back to you as soon as
            we can!
          </p>
          <p className="mb-8">
            <LocalPhoneOutlinedIcon /> <span>(+234) 8012345678</span>
          </p>
          <p className="mb-8">
            <MailOutlineOutlinedIcon />
            <span> vendorfinder@gmail.com</span>
          </p>
          <p className="mb-8">
            <LocationOnOutlinedIcon /> 7, Adeniji street, Ikeja, Lagos.
          </p>
        </div>
        <form className="flex flex-col md:w-full bg-white mx-4 md:ml-44 md:mr-20 text-[#555C69] my-6 md:my-10 rounded-lg  p-4 ">
          <label htmlFor="Name" className="pt-4 px-2">
            Name
          </label>
          <input
            type="text"
            className="mb-4 p-2 border border-gray-300 mx-2 rounded-lg"
          />
          <label htmlFor="Email" className="pt-2 px-2">
            Email
          </label>
          <input
            type="email"
            className="mb-4 p-2 border border-gray-300 mx-2 rounded-lg"
          />
          <label htmlFor="Message" className="pt-2 px-2">
            Message
          </label>
          <textarea
            rows="4"
            className="mb-4 p-3 mx-2 border border-gray-300 rounded-lg"
          />
          <div className="py-6">
            <button
              type="submit"
              className="btn btn-Secondary text-[#0C4E8B] py-3 px-12 mx-3 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
