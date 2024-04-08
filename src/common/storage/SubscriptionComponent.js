import useLocalStorage from "../../hook/useLocalStorage";

const SubscriptionComponent = () => {
    const [name] = useLocalStorage("name");

    return (
        <p style={{marginBottom: "100px"}}>Current value of name in the local storage: {name}</p>
    );
}

export default SubscriptionComponent;