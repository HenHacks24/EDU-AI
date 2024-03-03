/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Question } from "../interfaces/question";
import greenCheck from "../images/greenCheck.webp";
import wrongX from "../images/wrongX.png";

export function ShowScienceQuestions(): JSX.Element {
    let points = 0;
    const ScienceQuestions = [
        {
            subject: "Science",
            prompt: "",
            questionType: "multiple_choice_question",
            question: "What body part do we see with?",
            options: ["--------- Choose One ---------", "Nose", "Eyes", "Hair"],
            correctAnswer: "Eyes",
            profFeedback: "Hint: You can open and close them."
        },
        {
            subject: "Science",
            prompt: "",
            questionType: "multiple_choice_question",
            question: "What animal is black and white and creates milk?",
            options: [],
            correctAnswer: "cow",
            profFeedback: "Tip: Think of what animals we can get milk from."
        },
        {
            subject: "Science",
            prompt: "",
            questionType: "multiple_choice_question",
            question: "Which planet do humans live on?",
            options: [
                "--------- Choose One ---------",
                "Earth",
                "Mars",
                "Jupiter"
            ],
            correctAnswer: "Earth",
            profFeedback: "Hint: mvEmjsun (acronym)"
        }
    ];
    const [selected1, setSelected1] = useState<string | undefined>(undefined);
    const [selected3, setSelected3] = useState<string | undefined>(undefined);
    function updateSelected1(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected1(event.target.value);
    }
    const [userAnswer2, setUserAnswer2] = useState<string>("");
    function updateSelected3(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected3(event.target.value);
    }
    function showScienceQuestions1(question1: Question) {
        return (
            <div>
                <h3>{question1.prompt}</h3>
                <h5>{question1.question}</h5>
                <div>{"-" + question1.options[1]}</div>
                <div>{"-" + question1.options[2]}</div>
                <div>{"-" + question1.options[3]}</div>
            </div>
        );
    }
    function showScienceQuestions2(question1: Question) {
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
                        {showScienceQuestions1(ScienceQuestions[0])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected1}
                                onChange={updateSelected1}
                            >
                                {ScienceQuestions[0].options.map(
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected1, ScienceQuestions[0])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="EnglishQuestions">
                            {showScienceQuestions2(ScienceQuestions[1])}{" "}
                            <Form.Group controlId="EnglishQuestions">
                                <Form.Control
                                    as="textarea"
                                    value={userAnswer2}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setUserAnswer2(event.target.value)}
                                />
                                <div>
                                    {checkIfCorrect(
                                        userAnswer2.toLowerCase(),
                                        ScienceQuestions[1]
                                    )}
                                </div>
                            </Form.Group>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showScienceQuestions1(ScienceQuestions[2])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected3}
                                onChange={updateSelected3}
                            >
                                {ScienceQuestions[2].options.map(
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected3, ScienceQuestions[2])}
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
            <br></br>
            <br></br>
            <br></br>
            <h5>
                {points}
                {"/9 points "}
            </h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
