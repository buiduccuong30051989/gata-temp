import { Navigation } from "../Navigation";
import { ToastContainer, Slide } from "react-toastify";

export const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-100"></div>
      <div className="auth-layout relative">
        <Navigation />
        <main className="flex justify-center min-w-screen-xl">
          <div className="mb-32 mt-8 px-12 w-full max-w-screen-xl">
            {children}
          </div>
        </main>
      </div>
      <div id="alert" />
      <ToastContainer
        position="top-right"
        autoClose={50000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
};
