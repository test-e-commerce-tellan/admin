import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createCoupon,
  fetchCoupons,
} from "../../../store/features/coupons/couponSlice.ts";
import TextField from "../../../components/TextField";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PrimaryButton, SecondaryButton } from "../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CreateCouponRequest } from "../../../types/CreateCouponRequest.ts";
import { toast } from "sonner";

const AddCouponComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [couponKey, setCouponKey] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [amount, setAmount] = useState(0);
  const [maxUsed, setMaxUsed] = useState(0);

  const { status, error } = useAppSelector((state) => state.coupons);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, dispatch]);

  const handleSave = async () => {
    const couponData: CreateCouponRequest = {
      name,
      description,
      coupon_key: couponKey,
      active: isActive,
      amount,
      max_used: maxUsed,
    };

    try {
      await dispatch(createCoupon(couponData)).unwrap();
      navigate(-1);
      setTimeout(() => {
        dispatch(fetchCoupons());
      }, 0);
    } catch (error) {
      console.error("Failed to create coupon:", error);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white rounded-xl w-full mx-auto space-y-6">
      <h3 className="text-lg font-semibold">Coupon Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Coupon Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter coupon name (e.g. BAHATI)"
          required
        />

        <TextField
          label="Coupon Key"
          name="couponKey"
          value={couponKey}
          onChange={(e) => setCouponKey(e.target.value)}
          placeholder="Enter coupon key (e.g. BAHATI499)"
          required
        />

        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={amount.toString()}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          placeholder="e.g. 300"
          required
        />

        <TextField
          label="Maximum Usage Limit"
          name="maxUsed"
          type="number"
          value={maxUsed.toString()}
          onChange={(e) => setMaxUsed(parseInt(e.target.value) || 0)}
          placeholder="e.g. 1000"
        />

        <div className="flex items-center space-x-4 pt-6">
          <Label htmlFor="active">Active</Label>
          <Switch
            id="active"
            checked={isActive}
            onCheckedChange={setIsActive}
          />
        </div>
      </div>

      <TextField
        label="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a description (e.g. coupon for the celeb bahati)"
        multiline
        rows={4}
      />

      <div className="flex justify-end space-x-4 mt-6">
        <SecondaryButton
          text="Cancel"
          onClick={handleCancel}
          className="px-6"
        />
        <PrimaryButton
          text={status === "loading" ? "Saving..." : "Save"}
          onClick={handleSave}
          className="px-6"
        />
      </div>
    </div>
  );
};

export default AddCouponComponent;
