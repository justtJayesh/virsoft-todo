import "./App.css";
import Todo from "./Todo";
import { Metric } from "@tremor/react";

function App() {
    return (
        <div>
            <div className="flex justify-center items-center h-40 w-full mb-10 bg-gradient-to-r from-violet-200 to-pink-200">
                <Metric>Todoist 📝</Metric>
            </div>
            <Todo />
        </div>
    );
}

export default App;
