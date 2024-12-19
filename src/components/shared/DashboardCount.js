import React from "react";

const DashboardCount = ({ icon, count, label }) => {
  return (
    <div className="card flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
      <div className="w-7 mt-4 ms-5">
        <i className={`ki-filled ki-badge text-2xl text-gray-600 ${icon}`}></i>
      </div>
      <div className="flex flex-col gap-1 pb-4 px-5">
        <span className="text-3xl font-semibold text-gray-900">{count}</span>
        <span className="text-2sm font-normal text-gray-700">{label}</span>
      </div>
    </div>
  );
};

export default DashboardCount;
