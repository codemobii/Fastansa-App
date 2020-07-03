import React, { useState } from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';

const QuestionBox = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="logoBtm">{question}</div>
            {answer.map((text, index) => (
                <Button
                    className="btn"
                    key={index}
                    onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }}
                >
                    {text}
                </Button>
            ))}
        </div>
    );
};

export default QuestionBox;
