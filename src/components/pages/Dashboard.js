import React from "react";
import Breadcrumb from "../shared/Breadcrumb";
import DashboardCount from "../shared/DashboardCount";

const Dashboard = () => {
  const links = [
    { label: "Home", href: "/metronic/tailwind/demo2/" },
    { label: "Account", href: "/metronic/tailwind/demo2/account/home" },
  ];

  return (
    <>
      <Breadcrumb title="Account" links={links} currentPage="Dashboard" />
      <main className="grow" id="content" role="content">
        <div className="container-fixed" id="content_container"></div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <div className="grid lg:grid-cols-2 gap-y-5 lg:gap-7.5 items-stretch">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-4 gap-5 lg:gap-7.5 h-full items-stretch">
                  <DashboardCount
                    icon="ki-filled ki-badge text-2xl text-gray-600"
                    count="20"
                    label="Account Balance"
                  />
                  <DashboardCount
                    icon="ki-filled ki-badge text-2xl text-gray-600"
                    count="15k"
                    label="Total SMS"
                  />
                  <DashboardCount
                    icon="ki-filled ki-badge text-2xl text-gray-600"
                    count="10"
                    label="Total Pages"
                  />
                  <DashboardCount
                    icon="ki-filled ki-badge text-2xl text-gray-600"
                    count="100%"
                    label="Delivery Rate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
