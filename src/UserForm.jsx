import Greeting from './Greeting'
import { useState } from 'react'

export default function UserForm() {
    const [userInput, setUserInput] = useState("");
    const onChangeInput = (event) => {
        setUserInput(event.target.value);
    };
    return (
        <div>
            <div>
                <span>Name: </span><input type="text" name="user" onChange={onChangeInput} />
            </div>
            <Greeting name={userInput}></Greeting>
        </div>
    )
}
