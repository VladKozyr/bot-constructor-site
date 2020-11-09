import {useState} from "react";

export default function useInputValue() {
    const [value, setValue] = useState("");

    return {
        bind: {
            value,
            onChange: (event) => setValue(event.target.value)
        },
        clear: () => setValue(""),
        value: (val) => setValue(value)
    }
}