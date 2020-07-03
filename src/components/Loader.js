import React, { useState } from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';

export default function Loader() {

    const [counter, setCounter] = useState(0);

    React.useEffect(() => {
        const timer =
            counter < 100 && setInterval(() => setCounter(counter + 10), 500);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="LoadingCont">
            <div className="LoadingText">
                Loading . . .
            </div>
            <Progress percent={counter} status="active" showInfo={false} />
        </div>
    )
}
