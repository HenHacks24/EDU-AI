import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Question } from "../interfaces/question";
import greenCheck from "../images/greenCheck.webp";
import wrongX from "../images/wrongX.png";

export function ShowEnglishQuestions(): JSX.Element {
    //const [points, setPoints] = useState<number>(0);
    let points = 0;
    const EnglishQuestions = [
        {
            subject: "English",
            prompt: "Maddy rode her bike to school today. Jake's sister drove him to school today. Alyssa walked to school today.",
            questionType: "multiple_choice_question",
            question: "Who walked to school today?",
            options: [
                "--------- Choose One ---------",
                "Maddy",
                "Jake",
                "Alyssa"
            ],
            correctAnswer: "Alyssa",
            profFeedback: "Tip: Read the sentence out loud."
        },
        {
            subject: "English",
            prompt: "Henry has a orange cat and a white dog.",
            questionType: "multiple_choice_question",
            question: "What color is Henry's cat?",
            options: [
                "--------- Choose One ---------",
                "Green",
                "Orange",
                "Pink"
            ],
            correctAnswer: "Orange",
            profFeedback: "Hint: Is there anything that describes the cat?"
        },
        {
            subject: "English",
            prompt: "James and Fiona went to a Red Sox Game on Friday. James got cotton candy. Fiona got ice cream.",
            questionType: "multiple_choice_question",
            question: "What did Fiona get to eat?",
            options: [
                "--------- Choose One ---------",
                "Ice Cream",
                "Cotton Candy",
                "Red Sox"
            ],
            correctAnswer: "Ice Cream",
            profFeedback: "Tip: Break up the sentences into pieces."
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
    // function updatePoints(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setPoints(points + 3);
    // }
    function showEnglishQuestions(question1: Question) {
        return (
            <div>
                <p>{question1.prompt}</p>
                <h5>{question1.question}</h5>
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
                        {showEnglishQuestions(EnglishQuestions[0])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected1}
                                onChange={updateSelected1}
                            >
                                {EnglishQuestions[0].options.map(
                                    // eslint-disable-next-line no-extra-parens
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected1, EnglishQuestions[0])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showEnglishQuestions(EnglishQuestions[1])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected2}
                                onChange={updateSelected2}
                            >
                                {EnglishQuestions[1].options.map(
                                    // eslint-disable-next-line no-extra-parens
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected2, EnglishQuestions[1])}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        {showEnglishQuestions(EnglishQuestions[2])}{" "}
                        <Form.Group controlId="EnglishQuestions">
                            <Form.Select
                                value={selected3}
                                onChange={updateSelected3}
                            >
                                {EnglishQuestions[2].options.map(
                                    // eslint-disable-next-line no-extra-parens
                                    (option: string) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <div>
                                {checkIfCorrect(selected3, EnglishQuestions[2])}
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
