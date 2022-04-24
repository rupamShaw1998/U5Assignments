import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { ToggleContext } from "../contexts/toggleContext";

export const Navbar = () => {
    const {cart}  = useContext(CartContext);
    const {theme} = useContext(ToggleContext);
    return (
        <div>
            <nav className={theme? "darkNav": "lightNav"}>
                Cart: { cart }
            </nav>           
        </div>
    );
};