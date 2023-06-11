const PartnerProcess = () => {
  return (
    <main>
      <section className="mb-12">
        <h2 className="text-center text-heading-4 text-[#04172A] mb-12">
          How the process works
        </h2>

        <div className="flex">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-[#0C4E8B] text-heading-4 text-start">01</h3>
            <h2 className="font-bold text-body-1 mb-2">Register for free</h2>
            <p className="font-lato">
              Take advantage of our free <br /> registration to put your <br />{" "}
              business in the spotlight.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-[#0C4E8B] text-heading-4 text-start">02</h3>
            <h2 className="font-bold text-body-1 mb-2">
              Receive Notifications
            </h2>
            <p className="font-lato">
              Never miss out on potential jobs <br /> that align with your
              services. Get <br /> updated through email notifications <br />{" "}
              whenever new opportunities arise.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-[#0C4E8B] text-heading-4 text-start">03</h3>
            <h2 className="font-bold text-body-1 mb-2">
              Send Quotes and Secure Bookings
            </h2>
            <p className="font-lato">
              Connect directly with clients who are <br /> interested in working
              with you. Send <br /> them personalized quotes and <br />{" "}
              proposals, showcasing your expertise <br /> and competitive
              pricing.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#DEF2F5;] p-12">
        <div className="flex justify-center items-center gap-8">
          <h2>
            Are you ready to join our community of talented event vendors today?
          </h2>
          <button className="btn btn-Primary font-lato">
            Click here to Register
          </button>
        </div>
      </div>
    </main>
  );
};
export default PartnerProcess;
