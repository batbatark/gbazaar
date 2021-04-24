import Recipes from "./Recipes.jsx";
import Whatever from "./Whatever.jsx";

import  "../styles/index.scss";

const   App = () => {
    return(
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1> Hi React, how are you?</h1>
            </section>
            <Recipes/>
            <Whatever/>
        </main>
        </>
    );
};
export default App;
