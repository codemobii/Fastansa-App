// eslint-disable-next-line
import React, { useState } from 'react'
import { SelectLevel } from '../constants/Functions'
import questions from '../database/QuestionBank';
import QuestionBox from './QuestionBox';
import { Progress, Button } from 'antd';
import { RocketFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Header from './Header';
import Footer from './Footer';

export default function Starter() {

    const [level, setLevel] = useState('A');
    const [levelCard, setLevelCard] = useState(false);
    const [playScreen, setPlayScreen] = useState(false);
    const [counter, setCounter] = useState(100);
    const [timed, setTimed] = useState(500);
    const [questionBank, setQuestionBank] = useState([]);
    const [response, setResponse] = useState('');
    const [showResultScreen, setShowResultScreen] = useState(false);

    const setLevelA = () => {
        const level = 'A';
        setLevel(level);
        setPlayScreen(true);
        setCounter(100)
        setTimed(1500)
        getQuestions()
    };

    const setLevelB = () => {
        const level = 'B';
        setLevel(level);
        setPlayScreen(true);
        setCounter(100)
        setTimed(1000)
        getQuestions()
    };

    const setLevelC = () => {
        const level = 'C';
        setLevel(level);
        setPlayScreen(true);
        setCounter(100)
        setTimed(500)
        getQuestions()
    };

    const getQuestions = () => {
        questions().then(question => {
            setQuestionBank(question)
        });
    };

    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 10), timed);
        return () => clearInterval(timer);
    }, [counter]);

    const computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            setResponse('Genius, correct answer! You should still try another question. You never can tell. Thank you bro😉')
        } else (
            setResponse("But oops, you got it wrong. Don't be freaked out. This is not the end of the world for you. You can try again. Oneday, somehow, somewhere you will get it 😉")
        )
        setShowResultScreen(true);
    };

    return (
        <div>
            <Header />
            {levelCard === false
                ?
                <div className="contentHldr">
                    <div className="logoBtm">Fastansa App</div>
                    <p>Test how fast you can really get when it comes to answering randomly generated questions. You can find and manupulate this app to anything you like. Just click on the button above. And don't I need a star. Thanks</p>
                    <Button type="primary" block onClick={() => setLevelCard(true)}>Get started</Button>
                </div>
                :
                playScreen === false
                    ?
                    <SelectLevel.Provider value={{ level, setLevelA }}>
                        <div className="contentHldr">
                            <div className="logoBtm">Select your level</div>
                            <p>The different between each level is the pace of the timer. If your on the beginners level, it is more slower than when you are on intermediate level and vise versa.</p>
                            <Button icon={<RocketFilled />} className="btn" type="primary" onClick={() => { setLevelA() }}>Beginner</Button>
                            <Button icon={<RocketFilled />} className="btn" type="primary" onClick={() => { setLevelB() }}>Intermediate</Button>
                            <Button icon={<RocketFilled />} className="btn" type="primary" onClick={() => { setLevelC() }}>Master</Button>
                        </div>
                    </SelectLevel.Provider>
                    :
                    <div>
                        {showResultScreen === false ?
                            counter !== 0 ?
                                <React.Fragment>
                                    <div className="contentHldr">
                                        <div className="progressCont">
                                            <Progress type="circle" percent={counter} />
                                        </div>
                                        {questionBank.map(
                                            ({ question, answers, correct, questionId }) =>
                                                <QuestionBox
                                                    question={question}
                                                    options={answers}
                                                    key={questionId}
                                                    selected={answer => computeAnswer(answer, correct)}
                                                />
                                        )}
                                        <Button type="primary" block className="resetBtn" onClick={() => setPlayScreen(false)}>Change level</Button>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="contentHldr">
                                        <div className="logoBtm">Time out! Try again.</div>
                                        <p>Opps, don't be freaked out. This is not the end of the world for you. You can try again. Oneday, somehow, somewhere you will get it <span role="img" aria-label="smile">😉</span></p>
                                        <Button type="primary" block className="resetBtn" onClick={() => {
                                            if (level === 'C') {
                                                setCounter(100)
                                                setTimed(500)
                                                setShowResultScreen(false);
                                                getQuestions()
                                            } else if (level === 'B') {
                                                setCounter(100)
                                                setTimed(1000)
                                                setShowResultScreen(false);
                                                getQuestions()
                                            } else if (level === 'A') {
                                                setCounter(100)
                                                setTimed(1500)
                                                setShowResultScreen(false);
                                                getQuestions()
                                            }
                                        }
                                        }>Try again</Button>
                                    </div>
                                </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="contentHldr">
                                    <div className="logoBtm">Wow, you attempted the question.</div>
                                    <p>{response}</p>
                                    <Button type="primary" block className="resetBtn" onClick={() => {
                                        if (level === 'C') {
                                            setCounter(100)
                                            setTimed(500)
                                            setShowResultScreen(false);
                                            getQuestions()
                                        } else if (level === 'B') {
                                            setCounter(100)
                                            setTimed(1000)
                                            setShowResultScreen(false);
                                            getQuestions()
                                        } else if (level === 'A') {
                                            setCounter(100)
                                            setTimed(1500)
                                            setShowResultScreen(false);
                                            getQuestions()
                                        }
                                    }
                                    }>Try again</Button>
                                </div>
                            </React.Fragment>
                        }
                    </div>
            }
            <Footer />
        </div>
    )
}
