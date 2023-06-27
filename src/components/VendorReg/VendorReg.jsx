import styles from "./VendorReg.module.css";
import { Link } from "react-router-dom";

const VendorReg = () => {
  return (
    <div className={styles.vendorMain}>
      <div className="flex items-center  py-20 md:p-24">
        <div
          className={`w-fit px-5 flex flex-col  gap-[30px]  md:px-10 py-4 md:py-5 sm:text-start ${styles.woman}`}
        >
          <h1 className="text-heading-5 font-bold">Are you a vendor?</h1>
          <p className="text-[#191A26]">
            Whatever service you provide, VendorFinder <br /> is here to assist
            you in expanding your <br /> business.
          </p>
          <Link to="/partner">
            <button className="btn btn-Primary font-serif mb-0 md:mb-4">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VendorReg;
