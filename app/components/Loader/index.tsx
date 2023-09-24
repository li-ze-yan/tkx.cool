import { useGlobalPendingState } from "remix-utils/use-global-navigation-state";

const Loader = () => {
  let globalState = useGlobalPendingState();

  if (globalState === "idle") return null;
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-[#42827d] overflow-hidden flex justify-center items-center z-[10000]">
      <div className="bg-white w-4 h-16 relative animate-loadingSlow before:bg-white before:w-4 before:h-16 before:absolute before:top-0 before:-left-6 before:animate-loading after:bg-white after:w-4 after:h-16 after:absolute after:top-0 after:left-6 after:animate-loadingSlower"></div>
    </div>
  );
};

export { Loader };
