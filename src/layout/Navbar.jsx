import { Link } from "react-router-dom";

const menuItems = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/cars",
    name: "cars",
  },
  {
    path: "/services",
    name: "services",
  },
  {
    path: "/faq",
    name: "faq",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-dark text-light text-uppercase">
      <div className="container grid grid-cols-5 mx-auto items-center justify-center gap-4 text-xl font-semibold">
        {menuItems.map(({ path, name }, key) => {
          return (
            <Link
              key={key}
              to={path}
              className={
                window.location.pathname !== path
                  ? "py-[10px] no-underline text-inherit mb-0 hover:text-black hover:cursor-pointer hover:bg-white text-center active:text-[#198754]"
                  : "py-[10px] no-underline mb-0 text-black hover:cursor-pointer bg-white text-center"
              }
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
