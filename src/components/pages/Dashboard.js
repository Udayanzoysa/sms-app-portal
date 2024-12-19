import React from "react";
import Breadcrumb from "../shared/Breadcrumb";

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
                <div className="grid md:grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
                  <div className="card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
                    <div className="flex flex-col gap-4 pt-6">
                      <i className="ki-filled ki-badge text-2xl text-gray-600">
                        {" "}
                      </i>
                      <div className="flex flex-col gap-2.5 mb-2">
                        <h3 className="text-base font-medium leading-none text-gray-900">
                          Personal info
                        </h3>
                        <span className="text-2sm text-gray-800 leading-5">
                          Central hub for users: view data, change settings, see
                          activity logs, manage tasks, read notes, get alerts,
                          and more
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-4 items-center gap-1 cursor-pointer">
                      <a
                        className="btn text-primary hover:text-primary-active px-0"
                        href="/metronic/tailwind/demo2/account/members/team-info"
                      >
                        View page
                      </a>
                      <i className="ki-filled ki-right text-primary text-xs">
                        {" "}
                      </i>
                    </div>
                  </div>
                  <div className="card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
                    <div className="flex flex-col gap-4 pt-6">
                      <i className="ki-filled ki-security-user text-2xl text-gray-600"></i>
                      <div className="flex flex-col gap-2.5 mb-2">
                        <h3 className="text-base font-medium leading-none text-gray-900">
                          Login &amp; Security
                        </h3>
                        <span className="text-2sm text-gray-800 leading-5">
                          Set passwords, enable 2FA, view login logs, update
                          security questions, track account activity for better
                          safety
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-4 items-center gap-1 cursor-pointer">
                      <a
                        className="btn text-primary hover:text-primary-active px-0"
                        href="/metronic/tailwind/demo2/account/security/security-log"
                      >
                        View page
                      </a>
                      <i className="ki-filled ki-right text-primary text-xs">
                        {" "}
                      </i>
                    </div>
                  </div>
                  <div className="card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
                    <div className="flex flex-col gap-4 pt-6">
                      <i className="ki-filled ki-cheque text-2xl text-gray-600">
                        {" "}
                      </i>
                      <div className="flex flex-col gap-2.5 mb-2">
                        <h3 className="text-base font-medium leading-none text-gray-900">
                          Billing &amp; Payments
                        </h3>
                        <span className="text-2sm text-gray-800 leading-5">
                          Manage billing info, update payment methods, view
                          transaction history, set up autopay, and track
                          expenses easily
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-4 items-center gap-1 cursor-pointer">
                      <a
                        className="btn text-primary hover:text-primary-active px-0"
                        href="/metronic/tailwind/demo2/account/billing/basic"
                      >
                        View page
                      </a>
                      <i className="ki-filled ki-right text-primary text-xs">
                        {" "}
                      </i>
                    </div>
                  </div>
                  <div className="card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
                    <div className="flex flex-col gap-4 pt-6">
                      <i className="ki-filled ki-users text-2xl text-gray-600">
                        {" "}
                      </i>
                      <div className="flex flex-col gap-2.5 mb-2">
                        <h3 className="text-base font-medium leading-none text-gray-900">
                          Members, Teams &amp; Roles
                        </h3>
                        <span className="text-2sm text-gray-800 leading-5">
                          Manage members, assign roles, create teams, update
                          permissions, view activity logs, and streamline team
                          collaboration
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-4 items-center gap-1 cursor-pointer">
                      <a
                        className="btn text-primary hover:text-primary-active px-0"
                        href="/metronic/tailwind/demo2/account/members/roles"
                      >
                        View page
                      </a>
                      <i className="ki-filled ki-right text-primary text-xs">
                        {" "}
                      </i>
                    </div>
                  </div>
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
