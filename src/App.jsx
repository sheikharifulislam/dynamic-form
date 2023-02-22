import { useState } from "react";
import "./App.css";
import formData from "./data/formData.js";
import transformFormData from "./utils/transformFormData";

function App() {
    const [data, setData] = useState(() => transformFormData(formData));
}

export default App;
