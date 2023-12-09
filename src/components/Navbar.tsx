import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeClassName = "underline-offset-8 underline";

    return (
        <div className="flex justify-between px-10 py-4 bg-white">
            <div className="text-h5 font-semibold">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? activeClassName : ""
                    }
                >
                    Home
                </NavLink>
            </div>
            <div className="flex text-h5 font-semibold gap-x-5">
                <NavLink
                    to="/request-seed"
                    className={({ isActive }) =>
                        isActive ? activeClassName : ""
                    }
                >
                    Request Seed
                </NavLink>
                <NavLink
                    to="/field"
                    className={({ isActive }) =>
                        isActive ? activeClassName : ""
                    }
                >
                    Monitor Field
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
