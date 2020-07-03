import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import Starter from '../components/Starter';

function Loading() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 8000);
    }, [])

    return (
        <div className="LoadingScreen">
            {loading === true
                ?
                <Loader />
                :
                <Starter />
            }
        </div>
    )
}

export default Loading
