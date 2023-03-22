import "./Features.css"

import ToDo from "../img/icon-todo.svg"
import Calendar from "../img/icon-calendar.svg"
import Reminders from "../img/icon-reminders.svg"
import Planning from "../img/icon-planning.svg"

const Features = () => {
    return (
        <div className="Features">
            <div className="Icons">
            <img src={ToDo} alt="ToDo Icon" />
            <img src={Calendar} alt="Calendar Icon" />
            <img src={Reminders} alt="Reminders Icon" />
            <img src={Planning} alt="Planning Icon" />
            </div>
            <div className="Topics">
                <a href="index.html">Todo List</a>
                <a href="index.html">Calendar</a>
                <a href="index.html">Reminders</a>
                <a href="index.html">Planning</a>
            </div>
        </div>
    )
}

export default Features;