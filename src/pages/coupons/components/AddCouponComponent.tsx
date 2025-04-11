import { useState } from "react";
import TextField from "../../../components/TextField";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../../components/Button";

const AddCouponComponent = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [amount, setAmount] = useState(0);
  const [maxUsed, setMaxUsed] = useState(0);

  const handleSave = () => {
    console.log("Coupon saved!");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white rounded-xl w-full mx-auto space-y-6">
      <h3 className="text-lg font-semibold">Coupon Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Coupon Code"
          name="couponCode"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Shipfree20"
          required
        />

        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={amount.toString()}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          placeholder="e.g. 100"
          required
        />

        <TextField
          label="Maximum Usage Limit"
          name="maxUsed"
          type="number"
          value={maxUsed.toString()}
          onChange={(e) => setMaxUsed(parseInt(e.target.value) || 0)}
          placeholder="e.g. 10"
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
        placeholder="Discount available for first 10 users"
        multiline
        rows={4}
      />

      {/* Buttons section */}
      <div className="flex justify-end space-x-4 mt-6">
        <SecondaryButton text="Cancel" onClick={handleCancel} className="px-6" />
        <PrimaryButton text="Save" onClick={handleSave} className="px-6" />
      </div>
    </div>
  );
};

export default AddCouponComponent;
