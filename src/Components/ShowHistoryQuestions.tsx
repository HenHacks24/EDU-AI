/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Question } from "../interfaces/question";
import greenCheck from "../images/greenCheck.webp";
import wrongX from "../images/wrongX.png";

export function ShowHistoryQuestions(): JSX.Element {
    let points = 0;
    const HistoryQuestions = [
        {
            subject: "English",
            prompt: "",
            questionType: "multiple_choice_question",
            question: "Who was the first President of the United States?",
            options: [
                "--------- Choose One ---------",
                "Abraham Lincoln",
                "Joe Biden",
                "George Washington"
            ],
            correctAnswer: "George Washington",
            profFeedback:
                "Hint: There is a bridge named after him in New York City"
        },
        {
            subject: "English",
            prompt: "",
            questionType: "multiple_choice_question",
            question: "What is the capital of the US?",
            options: [
                "--------- Choose One ---------",
                "Newark",
                "Washington DC",
                "Chicago"
            ],
            correctAnswer: "Washington DC",
            profFeedback: "Hint: It is named the first president."
        },
        {
            subject: "English",
            prompt: "",
            questionType: "multiple_choice_question",
            question: "Which war came first?",
            options: [
                "--------- Choose One ---------",
                "The War of 1812",
                "World War 1",
                "World War 2"
            ],
            correctAnswer: "The War of 1812",
            profFeedback: "Hint: It has the year in the name of the war."
        }
    ];
    const [selected1, setSelected1] = useState<string | undefined>(undefined);
    const [selected2, setSelected2] = useState<string | undefined>(undefined);
    const [selected3, setSelected3] = useState<string | undefined>(undefined);
    function updateSelected1(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected1(event.target.value);
    }
    function updateSelected2(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected2(event.target.value);
    }
    function updateSelected3(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected3(event.target.value);
    }
    function showEnglishQuestions(question1: Question) {
        return (
            <div>
                <h3>{question1.prompt}</h3>
                <div>{question1.question}</div>
                <div>{"-" + question1.options[1]}</div>
                <div>{"-" + question1.options[2]}</div>
                <div>{"-" + question1.options[3]}</div>
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
                        {showEnglishQuestions(HistoryQuestions[0])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected1}
                                onChange={updateSelected1}
                            >
                                {HistoryQuestions[0].options.map(
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected1, HistoryQuestions[0])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showEnglishQuestions(HistoryQuestions[1])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected2}
                                onChange={updateSelected2}
                            >
                                {HistoryQuestions[1].options.map(
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected2, HistoryQuestions[1])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showEnglishQuestions(HistoryQuestions[2])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected3}
                                onChange={updateSelected3}
                            >
                                {HistoryQuestions[2].options.map(
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected3, HistoryQuestions[2])}
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
