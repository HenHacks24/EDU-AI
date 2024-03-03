import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
//import EnglishQuestions from "../data/EnglishQuestions.json";
import { Question } from "../interfaces/question";
import greenCheck from "../images/greenCheck.webp";
import wrongX from "../images/wrongX.png";

export function ShowMathQuestions(): JSX.Element {
    let points = 0;
    const MathQuestions = [
        {
            subject: "Math",
            prompt: "",
            questionType: "short_answer_question",
            question: "1 + 2 = ______",
            options: [],
            correctAnswer: "3",
            profFeedback: "Tip: Count on your fingers"
        },
        {
            subject: "Math",
            prompt: "I start with 6 bananas. I eat 4 of them.",
            questionType: "short_answer_question",
            question: "How many bananas are left?",
            options: [],
            correctAnswer: "2",
            profFeedback: "Tip: Draw out the bananas"
        },
        {
            subject: "Math",
            prompt: "",
            questionType: "short_answer_question",
            question: "What number comes after 34?",
            options: [],
            correctAnswer: "35",
            profFeedback: "Tip: Use the number line."
        }
    ];
    const [userAnswer1, setUserAnswer1] = useState<string>("");
    const [userAnswer2, setUserAnswer2] = useState<string>("");
    const [userAnswer3, setUserAnswer3] = useState<string>("");
    // function updateSelected1(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setUserAnswer1(event.target.value);
    // }
    // function updateSelected2(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setUserAnswer2(event.target.value);
    // }
    // function updateSelected3(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setUserAnswer3(event.target.value);
    // }
    function showMathQuestions(question1: Question) {
        return (
            <div>
                <h3>{question1.prompt}</h3>
                <div>{question1.question}</div>
            </div>
        );
    }
    function checkIfCorrect(
        userAnswer: string | undefined,
        question: Question
    ) {
        if (userAnswer === question.correctAnswer) {
            points = points + 3;
            return <img src={greenCheck} width="100" alt="BH" />;
        } else {
            return (
                <div>
                    <img src={wrongX} width="100" alt="BH" />{" "}
                    <div>{question.profFeedback}</div>
                </div>
            );
        }
    }
    return (
        <div>
            <br></br>
            <div style={{ marginBottom: "4px" }}>
                {" "}
                <Row>
                    <Col>
                        {showMathQuestions(MathQuestions[0])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Control
                                as="textarea"
                                value={userAnswer1}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setUserAnswer1(event.target.value)}
                            />
                            <div>
                                {checkIfCorrect(userAnswer1, MathQuestions[0])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showMathQuestions(MathQuestions[1])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Control
                                as="textarea"
                                value={userAnswer2}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setUserAnswer2(event.target.value)}
                            />
                            <div>
                                {checkIfCorrect(userAnswer2, MathQuestions[1])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showMathQuestions(MathQuestions[2])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Control
                                as="textarea"
                                value={userAnswer3}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setUserAnswer3(event.target.value)}
                            />
                            <div>
                                {checkIfCorrect(userAnswer3, MathQuestions[2])}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
            {/* <Form.Group controlId="favoriteColors">
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group> */}
            {/* <div>{checkIfCorrect(selected, question)}</div> */}
            <br></br>
            <div>
                {points}
                {"/9"}
            </div>
        </div>
    );
}
