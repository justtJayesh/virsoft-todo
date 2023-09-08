import { useState } from "react";
import { Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
    id: Date.now(),
    todo: "",
    description: "",
    status: false,
};

const Todo = () => {
    const [todoInput, setTodoInput] = useState(initialState);
    const [todoData, setTodoData] = useState([]);

    const handleAddTodo = () => {
        if (todoInput.todo != "" && todoInput.description != "") {
            setTodoData([...todoData, todoInput]);
            setTodoInput(initialState);
        } else if (todoInput.todo == "" && todoInput.description != "") {
            toast.error("Please enter task.");
        } else if (todoInput.todo != "" && todoInput.description == "") {
            toast.error("Please enter description");
        } else {
            toast.error("Please enter any task.");
        }

        // console.log(todoData);
    };

    const handleDeleteTodo = (id) => {
        const afterDeletedTodoData = todoData.filter((el) => el.id != id);
        setTodoData(afterDeletedTodoData);
    };

    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />

            <div className="flex flex-col gap-4 border border-gray-300 px-8 py-10 rounded-lg m-auto w-8/12 mt-4">
                <input
                    className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                    type="text"
                    value={todoInput.todo}
                    onChange={(e) =>
                        setTodoInput({ ...todoInput, todo: e.target.value })
                    }
                    placeholder="Whats on you mind 🤔 ?"
                />
                <input
                    className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block truncate"
                    type="text"
                    value={todoInput.description}
                    onChange={(e) =>
                        setTodoInput({
                            ...todoInput,
                            description: e.target.value,
                        })
                    }
                    placeholder="Describe you task  ✍️ ?"
                />
                <button
                    onClick={handleAddTodo}
                    className="px-4 py-2 border rounded-lg hover:outline-none border-blue-500 text-blue-500 m-auto hover:border-green-500 hover:text-green-500"
                >
                    Add Todo ➕
                </button>

                <hr />

                <div className="flex flex-col gap-4">
                    {todoData.length > 0 ? (
                        todoData.map((el, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex items-center justify-between gap-3 w-full border border-gray-300 rounded-lg py-3 px-4"
                                >
                                    <div>
                                        <h1>
                                            <span className="font-bold">
                                                Task:{" "}
                                            </span>
                                            {el.todo}
                                        </h1>
                                        <h1>
                                            <span className="font-bold">
                                                Description:{" "}
                                            </span>{" "}
                                            {el.description}
                                        </h1>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteTodo(el.id)}
                                        className="p-2 rounded-lg bg-slate-50 hover:bg-red-100"
                                    >
                                        <Trash2 color="red" />
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <div className="border border-gray-300 rounded-lg p-3">
                            <h1 className="text-red-500">
                                No task available 😔
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Todo;
