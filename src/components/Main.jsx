import "./Main.css"

import Partners from "./Partners";

const Main = () => {
    return (
        <div className="Main">
            <h1>Make remote work</h1>
            <p>
                Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
            <Partners />
        </div>
    )
}

export default Main;