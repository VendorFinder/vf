import styles from "./PartnerHero.module.css";
const PartnerHero = () => {
  return (
    <section className={styles.partnerHero}>
      <div className=" flex items-center justify-center">
        <div
          className={`md:w-2/3 px-4 mt-16  md:px-10 py-4 md:py-5  ${styles.partner}`}
        >
          <h1 className="mb-5 text-heading-5 md:text-heading-2 md:text-center font-bold">
            Join Our Growing Network of <br /> Event Vendors
          </h1>
          <p className="mb-4 md:mb-10 md:text-center text-body-1 font-lato">
            Reach a wider audience and boost your business
          </p>
          <div className="md:flex md:justify-center md:items-center">
            <button className="btn btn-Primary font-serif mb-0 md:mb-4 ">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnerHero;