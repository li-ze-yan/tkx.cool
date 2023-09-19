import { useNavigate } from "@remix-run/react";

const BaseFooter = () => {
  const navigate = useNavigate();
  return (
    // <footer className="relative pt-6 lg:pt-8 flex items-center justify-between font-semibold text-sm leading-6">
    //   111
    // </footer>
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/img/common/icon.svg" alt="coffee" className="w-10" />
          <span className="leading-none text-lg mt-[6px] font-bold">
            Vector.cool
          </span>
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2023 Vector Labs Inc. All rights reserved.
        </p>
        <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/">Love you</a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a href="/">Three thousand</a>
        </div>
      </div>
    </footer>
  );
};

export { BaseFooter };
