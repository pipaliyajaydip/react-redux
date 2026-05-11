import { useEffect, useState } from "react";
import Input from "../components/input";

const DebounceExample = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(null);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        const timeHandler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 1000);
        return () => clearTimeout(timeHandler);
    }, [searchQuery]);

    console.log("Debounced Value: ", debouncedQuery);
    
    return (
        <>
            <Input
                label='Search Box'
                type='text'
                value={searchQuery}
                onChange={(e) => handleChange(e)}
            />
        </>
    );
};

export default DebounceExample;