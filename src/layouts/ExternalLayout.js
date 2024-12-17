import { Outlet } from "react-router-dom";

const ExternalLayout = () => {
  return (
    <>
      <div className="antialiased flex h-full text-base text-gray-700 dark:bg-coal-500">
        <div
          className="flex items-center justify-center grow bg-center bg-no-repeat page-bg"
          style={{
            backgroundImage:
              "url('https://keenthemes.com/static/metronic/tailwind/dist/assets/media/images/2600x1200/bg-10.png')",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ExternalLayout;
