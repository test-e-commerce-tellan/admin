import ProgressIndicator from "./ProgressIndicator";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen p-4 flex justify-center items-center">
      <ProgressIndicator />
    </div>
  );
};

export default LoadingPage;
