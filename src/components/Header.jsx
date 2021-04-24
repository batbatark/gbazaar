import { useState } from "react";
const Header = () => {
    const {state, setState} = useState("Initial state");
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() =>setState("Button clicked")}>Click me</button>
        </div>      
    );
};
export default Header;