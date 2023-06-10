import styles from "./VendorReg.module.css";
const VendorReg = () => {
  return (
    <div className={styles.vendorMain}>
      <div className="flex items-center  p-10 md:p-24">
        <div
          className={`w-fit px-5  md:px-10 py-4 md:py-5 text-start ${styles.woman}`}
        >
          <h1 className="mb-5 text-heading-5 font-bold">Are you a vendor?</h1>
          <p className="mb-6">
            Whatever service you provide, VendorFinder <br /> is here to assist
            you in expanding your <br /> business.
          </p>
          <button className="btn btn-Primary font-serif mb-0 md:mb-4">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default VendorReg;
