import React, { useState } from "react";

const questions = [
    {
        id: 1,
        question: "Who can use Blockify Template?",
        answer: "Actually everyone can use our template for their business purposes, from SaaS companies, software companies, company profiles..."
    },
    {
        id: 2,
        question: "How Blockify help my business?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!"
    },
    {
        id: 3,
        question: "How secure our data on this platform?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!"
    },
    {
        id: 4,
        question: "How much many i need to pay to use this platform?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!"
    },
    {
        id: 5,
        question: "Can i connect it with app that our company already use?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi.."
    },
    {
        id: 6,
        question: "How do i pay for this services?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!"
    }
];

export default function Questions() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <section className="questions">
            <div className="title_qs">
                <span className="green_info inter-custom_info">FAQS</span>
                <h1 className="inter-custom">Common questions in your mind</h1>
                <p className="inter-custom_info first_p">We show the frequently asked questions that our customers have.</p>
            </div>
            <div className="faqs">
                {questions.map((question) => (
                    <div className="prop" key={question.id}>
                        <div className="question_answer" id={question.id}>
                            <p className="inter-custom"><strong>{question.question}</strong></p>
                            <div className="line_answer"></div>
                            {activeQuestion === question.id && (
                                <p className="answer inter-customa">{question.answer}</p>
                            )}
                        </div>
                        <div className="arrow" onClick={() => toggleAnswer(question.id)}>
                            <i className={`fa-solid fa-arrow-${activeQuestion === question.id ? 'up' : 'down'}`}></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
