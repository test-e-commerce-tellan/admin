import { FiPlus } from "react-icons/fi";
import { PrimaryButton } from "../../components/Button";
import CouponsTable from "./components/CouponsTable";

const Coupons = () => {
    return (
        <>
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-base font-bold">Coupons</h4>
  
            <PrimaryButton
              text="New Coupon"
              className="font-bold"
              icon={<FiPlus />}
              onClick={() => console.log("Add Order clicked")}
            />
        </div>
  
        <div className="mt-4 p-4 bg-white rounded h-full">
          <CouponsTable/>
        </div>
      </>
    )
}

export default Coupons;