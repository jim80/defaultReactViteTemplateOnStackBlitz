// this is shitty, but it will do for the moment
// find a package or extend it perhaps.

import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    const FETCHING_MESSAGE = "fetching"
    const FETCHED_MESSAGE = "DONE! fetched"

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus(FETCHING_MESSAGE);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setStatus(FETCHED_MESSAGE);
        };

        fetchData();
    }, [url]);

    return { status, data };
};

export default useFetch
