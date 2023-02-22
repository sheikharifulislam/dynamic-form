import { useState } from "react";
import "./App.css";
import formData from "./data/formData.js";
import objectToArray from "./utils/objectToArray.js";
import transformFormData from "./utils/transformFormData";

function App() {
    const [data, setData] = useState(() => transformFormData(formData));

    const handleOnChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // const updatedData = { ...data };
        // updatedData[name].value = value;
        // setData(updatedData);

        setData((prv) => ({
            ...prv,
            [e.target.name]: {
                ...prv[e.target.name],
                value: e.target.value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = Object.keys(data).reduce((acc, key) => {
            acc[key] = data[key].value;
            return acc;
        }, {});
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            {objectToArray(data).map(({ id, label, type, name, placeholder, value }) => (
                <div key={id}>
                    <label>Enter Your {label}: </label>
                    <input
                        type={type}
                        placeholder={placeholder || ""}
                        name={name}
                        value={value}
                        onChange={handleOnChange}
                    />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
