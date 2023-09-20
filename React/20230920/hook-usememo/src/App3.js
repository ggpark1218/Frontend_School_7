import { createContext } from "react";

const userInfo = createContext({ name: "gary", id : "garyIsFree" });

const App = () => {
    return (
        <userInfo.Provider value={{ name: "Licat", id: "LicatIsNotFree"}}>
            <HelloLicat />
        </userInfo.Provider>
        // <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
    );
};

const HelloLicat = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.value.id}</h2>
            <strong>{props.value.name}</strong>
            <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} />
        </div>
    );
};

const HelloLicatTwo = (props) => {
    return (
        <div>
            <h2>Two : {props.value.id}</h2>
            <strong>Two : {props.value.name}</strong>
        </div>
    );
};

export default App;