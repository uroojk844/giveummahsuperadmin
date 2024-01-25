import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div className="text-lg">
        Welcome!{" "}
        <span className="text-blue-500 font-[500]">GiveUmmah Super Admin</span>
      </div>
      <div
        className={`flex bg-blue-100 p-2 gap-2 rounded-lg ${
          pathname != "/" && "hidden"
        }`}
      >
        <div className="px-4 py-1 rounded bg-white text-blue-500">Weekly</div>
        <div className="px-4 py-1 rounded">Monthly</div>
        <div className="px-4 py-1 rounded">Yearly</div>
      </div>
    </div>
  );
};

export default NavBar;
