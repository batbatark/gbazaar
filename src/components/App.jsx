import"../styles/index.scss";
import Recipes from "./Recipes.jsx"
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

const   App=()=>{
    return(
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>
                    Hi React
                </h1>
            </section>
            <img src={sword} alt="sword" width ="250px"/>
            <img src={swordSvg} alt="sword" width ="250px"/>
            <Recipes />
        </main>
        </>
    );
};
export default App
