import embrace from "../../assets/embracee.png";
import { Link } from "react-router-dom";
const Embrace = () => {
  return (
    <section className="w-full flex-col-reverse md:flex-row flex">
      <div className="w-full flex items-center justify-center">
        <img
          src={embrace}
          className="w-fit h-fit  py-4 md:py-12 px-10 md:px-20 "
          alt="embrace"
        />
      </div>
      <div className="w-full py-8 md:py-24 px-4 md:px-20 text-left">
        <h3 className="text-body-2 mb-4">
          Eliminate the Hassle of Event Planning
        </h3>
        <h2 className="text-heading-3 font-semiBold mb-5">
          Embrace Seamless <br className="hidden md:inline" /> Celebrations!
        </h2>
        <p className="text-body-1 font-serif mb-8">
          We facilitate memorable and successful events
          <br className="hidden md:inline" /> by providing a diverse and curated
          selection of <br className="hidden md:inline" /> vendors, ensuring
          that every client finds the <br className="hidden md:inline" />
          perfect match for their specific event requirements.
        </p>
        <Link to="/about">
          <button className="btn btn-Primary mb-0 md:mb-3 font-serif">
            Read more
          </button>
        </Link>
      </div>
    </section>
  );
};
export default Embrace;
