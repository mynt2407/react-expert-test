import { useState } from "react"

const useBoolean = (init) => {
    const [value, setValue] = useState(init);
    const setTrue = () => setValue(true);
    const setFasle = () => setValue(false);
    return [value, setTrue, setFasle];
}
export default useBoolean;