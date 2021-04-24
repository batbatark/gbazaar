import Recipes from "./Recipes.jsx";
import Header from "./Header.jsx";

import  "../styles/index.scss";

const   App = () => {
    return(
        <>
        <div className="hero">

        </div>
        <main>
            <section>
                <h1> Hi React, how are you?</h1>
            </section>
            <Recipes/>
            <Header/>
        </main>
        </>
    );
};
export default App;
