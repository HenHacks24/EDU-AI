/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { /*Button, Row, Col,*/ Form } from "react-bootstrap";
import { ShowEnglishQuestions } from "./ShowEnglishQuestions";
import { ShowMathQuestions } from "./ShowMathQuestions";
import { ShowScienceQuestions } from "./ShowScienceQuestions";
import { ShowHistoryQuestions } from "./ShowHistoryQuestions";

export function SubjectChoose(): JSX.Element {
    const [subject, setSubject] = useState<string>("English");
    function updateSubject(event: React.ChangeEvent<HTMLInputElement>) {
        setSubject(event.target.value);
    }
    return (
        <div>
            <h3>Choose which subject you would like to test</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateSubject}
                //id="color-check-yellow"
                label="English"
                value="English"
                //style={{ backgroundColor: "yellow" }}
                checked={subject === "English"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateSubject}
                //id="color-check-pink"
                label="Math"
                value="Math"
                checked={subject === "Math"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateSubject}
                //id="color-check-purple"
                label="Science"
                value="Science"
                checked={subject === "Science"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateSubject}
                //id="color-check-maroon"
                label="History"
                value="History"
                checked={subject === "History"}
            />
            {subject == "English" && (
                <ShowEnglishQuestions></ShowEnglishQuestions>
            )}
            {subject == "Math" && <ShowMathQuestions></ShowMathQuestions>}
            {subject == "Science" && (
                <ShowScienceQuestions></ShowScienceQuestions>
            )}
            {subject == "History" && (
                <ShowHistoryQuestions></ShowHistoryQuestions>
            )}
        </div>
    );
}
