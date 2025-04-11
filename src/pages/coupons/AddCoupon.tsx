import AddCouponComponent from "./components/AddCouponComponent";

const AddCoupon = () => {
  return (
    <>
      <h4 className="text-base font-bold">Create Coupon</h4>

      <div className="mt-4 p-4 bg-white rounded h-full">
        <AddCouponComponent />
      </div>
    </>
  );
};

export default AddCoupon;
