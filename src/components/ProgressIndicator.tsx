import { ProgressSpinner } from "primereact/progressspinner";

interface ProgressIndicatorProps {
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ className }) => {
  return <ProgressSpinner style={{ height: "60px" }} className={className} />;
};

export default ProgressIndicator;
