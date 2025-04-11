import { FiPlus } from "react-icons/fi";
import { PrimaryButton } from "../../components/Button";
import CouponsTable from "./components/CouponsTable";
import { useNavigate } from "react-router-dom";

const Coupons = () => {
  const navigate = useNavigate();
  const handleAddNewCoupon = () => {
    navigate("/coupons/new");
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-base font-bold">Coupons</h4>

        <PrimaryButton
          text="New Coupon"
          className="font-bold"
          icon={<FiPlus />}
          onClick={handleAddNewCoupon}
        />
      </div>

      <div className="mt-4 p-4 bg-white rounded h-full">
        <CouponsTable />
      </div>
    </>
  );
};

export default Coupons;
