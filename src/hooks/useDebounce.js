import { useState, useRef, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceVal, setDebounceVal] = useState(value);

    useEffect(() => {
        const process = setTimeout(() => {
            setDebounceVal(value);
        }, delay);

        return () => {
            clearTimeout(process);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceVal;
}

export default useDebounce;
