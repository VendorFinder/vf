const PartnerProcess = () => {
  return (
    <main>
      <section className="mb-12">
        <h2 className="text-center text-heading-4 text-[#04172A]  mb-6 md:mb-12">
          How the process works
        </h2>

        <div className="flex flex-col md:flex-row px-6 md:px-0">
          <div className="md:w-1/3 flex flex-col md:justify-center md:items-center">
            <div className="flex items-center flex-row md:flex-col gap-2 ">
              <h3 className="text-[#0C4E8B] text-heading-4 text-start mb-2">
                01
              </h3>
              <h2 className="font-bold text-body-1 md:mb-2">
                Register for free
              </h2>
            </div>
            <p className="font-lato mb-8 md:mb-0 ml-10 md:ml-0">
              Take advantage of our free <br /> registration to put your <br />
              business in the spotlight.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col md:justify-center md:items-center">
            <div className="flex items-center flex-row md:flex-col gap-2">
              <h3 className="text-[#0C4E8B] text-heading-4 text-start mb-2">
                02
              </h3>
              <h2 className="font-bold text-body-1 md:mb-2">
                Receive Notifications
              </h2>
            </div>
            <p className="font-lato mb-8 md:mb-0 ml-10 md:ml-0">
              Never miss out on potential jobs <br /> that align with your
              services. Get <br /> updated through email notifications <br />
              whenever new opportunities arise.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col md:justify-center md:items-center">
            <div className="flex items-center flex-row md:flex-col gap-2">
              <h3 className="text-[#0C4E8B] text-heading-4 text-start mb-2">
                03
              </h3>
              <h2 className="font-bold text-body-1 md:mb-2">
                Send Quotes and Secure Bookings
              </h2>
            </div>
            <p className="font-lato mb-8 md:mb-0 ml-10 md:ml-0">
              Connect directly with clients who are <br /> interested in working
              with you. Send <br /> them personalized quotes and <br />
              proposals, showcasing your expertise <br /> and competitive
              pricing.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#DEF2F5;] p-12">
        <div className="flex flex-col md:flex-row  justify-center items-center gap-8">
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
