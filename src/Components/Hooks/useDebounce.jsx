import { useRef } from "react";

export default function useDebounce(callback, ms) {
    const timeoutId = useRef();

    return (...params) => {
        clearInterval(timeoutId.current);
        timeoutId.current = setTimeout(() => {
            callback(...params);
        }, ms);
    }
}