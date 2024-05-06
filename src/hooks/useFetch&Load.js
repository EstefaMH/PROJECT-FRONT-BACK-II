//import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';  

const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(true);
    let controller;

    const callEndpoint = async (axiosCall) => {
        if (axiosCall.controller) controller = axiosCall.controller;
        setLoading(true);
        let result = {};
        try {
            result = await axiosCall.call;
        } catch (error) {
            setLoading(false);
            throw error;
        }
        setLoading(false);
        return result.data.results;
    };

    const cancelEndpoint = () => {
        setLoading(false);
        controller && controller.abort();
    };

    useEffect(() => {
        return () => {
            cancelEndpoint();
        };
    }, []);

    return { loading, callEndpoint };
};

useFetchAndLoad.propTypes = {
    axiosCall: PropTypes.shape({
        call: PropTypes.instanceOf(Promise).isRequired,
        controller: PropTypes.instanceOf(AbortController)
    }),
    result: PropTypes.instanceOf(Response)
}


export default useFetchAndLoad;