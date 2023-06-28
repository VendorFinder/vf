import AL from "../../assets/about/arrowLeft.png";
import AR from "../../assets/about/arrowRight.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("{myyqgpvl}");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <section className="w-full mx-auto ">
      <div className="flex flex-col md:flex-row md:mx-32 md:my-10 md:h-[32rem]  bg-[#0C4E8B] text-white">
        <div className="w-full px-4 md:px-20 pt-10 md:pt-10 md:py-10">
          <div className="flex gap-[10px] items-center mb-[10px]">
            <img className="h-[5px] w-[30px]" src={AL} alt="icon" />
            <span className="sm:text-[16px] text-[18px]">Contact Us</span>
            <img className="h-[5px] w-[30px]" src={AR} alt="icon" />
          </div>
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-full bg-white mx-4 md:ml-44 md:mr-20 text-[#555C69] my-6 md:my-10 rounded-lg  p-4 "
        >
          <label htmlFor="name" className="pt-4 px-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mb-4 p-2 border border-gray-300 mx-2 rounded-lg"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email" className="pt-2 px-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mb-4 p-2 border border-gray-300 mx-2 rounded-lg"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="pt-2 px-2">
            Message
          </label>
          <textarea
            rows="4"
            id="message"
            name="message"
            className="mb-4 p-3 mx-2 border border-gray-300 rounded-lg"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="py-6">
            <button
              disabled={state.submitting}
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
