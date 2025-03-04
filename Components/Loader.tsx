import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = ({ isLoading }: any) => {
  return (
    <div className="loader">
      <div className="loader-icon">
        <SyncLoader color={"#8884d8"} loading={isLoading} size={16} />
      </div>
    </div>
  );
};

export default Loader;
