import embrace from "../../assets/embracee.png";
const Embrace = () => {
  return (
    <section className="w-full flex-col-reverse md:flex-row flex">
      <div className="w-full flex items-center justify-center">
        <img
          src={embrace}
          className="w-fit h-fit  py-4 md:py-12 px-10 md:px-20 "
          alt=""
        />
      </div>
      <div className="w-full py-8 md:py-24 px-8 md:px-20 text-left">
        <h3 className="text-body-2 mb-4">
          Eliminate the Hassle of Event Planning
        </h3>
        <h2 className="text-heading-3 mb-5">
          Embrace Seamless <br /> Celebrations!
        </h2>
        <p className="text-body-1 font-serif mb-8">
          We facilitate memorable and successful events <br /> by providing a
          diverse and curated selection of <br /> vendors, ensuring that every
          client finds the <br /> perfect match for their specific event
          requirements.
        </p>
        <button className="btn btn-Primary mb-0 md:mb-3 font-serif">
          Read more
        </button>
      </div>
    </section>
  );
};
export default Embrace;