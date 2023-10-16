import { useState } from "react"

function App() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setValue(value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('hello', value)
    }
    return <div>
        <form onSubmit={onSubmit} action="">
            <input value={value}
                onChange={onChange} placeholder='username' type="text" /><button>Log in</button>
        </form>
    </div>
}