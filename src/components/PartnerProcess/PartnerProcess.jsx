import { useState } from "react";
import RegisterModal from "../Register/RegisterModal";
const PartnerProcess = () => {
  const [regModal, setRegModal] = useState(false);

  const onOpenModal = () => setRegModal(true);
  const onCloseModal = () => setRegModal(false);
  return (
    <main>
      <section className="mb-12">
        <h2 className="text-center text-heading-4 text-[#04172A]  mb-6 md:mb-12">
          How the process works
        </h2>

        <div className="flex flex-col md:flex-row px-8 md:px-16">
          <div className="md:w-1/3 flex flex-col md:justify-start md:items-start">
            <div className="flex items-start flex-row md:flex-col  gap-2 md:gap-0">
              <h3 className="text-[#0C4E8B] text-heading-4 text-left mb-2">
                01
              </h3>
              <h2 className="font-bold text-body-2 md:text-body-1 mt-3 md:mt-0 md:mb-2 md:text-start">
                Register for free
              </h2>
            </div>
            <p className="font-lato mb-4 md:mb-0 ml-9 md:ml-0">
              Take advantage of our free <br className="hidden md:inline" />
              registration to put your <br className="hidden md:inline" />
              business in the spotlight.
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col md:justify-start md:items-start">
            <div className="flex items-start flex-row md:flex-col gap-2 md:gap-0">
              <h3 className="text-[#0C4E8B] text-heading-4 text-left mb-2 md:text-start">
                02
              </h3>
              <h2 className="font-bold text-body-2 md:text-body-1 mt-3 md:mt-0 md:mb-2 md:text-start">
                Receive Notifications
              </h2>
            </div>
            <p className="font-lato mb-4 md:mb-0 ml-9 md:ml-0">
              Never miss out on potential jobs
              <br className="hidden md:inline" /> that align with your services.
              Get <br className="hidden md:inline" /> updated through email
              notifications
              <br className="hidden md:inline" />
              whenever new opportunities arise.
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col md:justify-start md:items-start">
            <div className="flex items-start flex-row md:flex-col gap-2 md:gap-0">
              <h3 className="text-[#0C4E8B] text-heading-4 text-left mb-2 md:text-center">
                03
              </h3>
              <h2 className="font-bold text-body-2 md:text-body-1  mt-4 md:mt-0 md:mb-2 text-left md:text-center">
                Send Quotes and Secure Bookings
              </h2>
            </div>
            <p className="font-lato mb-4 md:mb-0 ml-9 md:ml-0 md:whitespace-pre-line">
              Connect directly with clients who are
              <br className="hidden md:inline" /> interested in working with
              you. Send <br className="hidden md:inline" /> them personalized
              quotes and <br className="hidden md:inline" /> proposals,
              showcasing your expertise <br className="hidden md:inline" /> and
              competitive pricing.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#DEF2F5;] p-6 md:p-12">
        <div className="flex flex-col md:flex-row  justify-center items-center gap-8">
          <h2 className="text-center md:text-left">
            Are you ready to join our community of talented event vendors today?
          </h2>
          <button className="btn btn-Primary font-lato" onClick={onOpenModal}>
            Click here to Register
          </button>
        </div>
      </div>
      <RegisterModal open={regModal} onClose={onCloseModal} />
    </main>
  );
};
export default PartnerProcess;
