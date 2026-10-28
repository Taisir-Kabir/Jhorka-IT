import { useState } from 'react';
import CallToAction from '../components/CallToAction.jsx';
import PageHero from '../components/PageHero.jsx';

const questions = [
  ['What are the course fees?', 'Fees are placeholders for now. Check each course page or contact us for current fees.'],
  ['How long are the courses?', 'Most courses run from 6 to 16 weeks, depending on level.'],
  ['Do you offer online and offline classes?', 'Both options can be offered. Confirm availability for your batch.'],
  ['How do I apply?', 'Fill in the form on the Admission page and an advisor will contact you.'],
  ['Will I get a certificate?', 'Students who complete a course can receive a certificate of completion.'],
  ['Do you give career guidance?', 'Yes. See our Consultancy and Student Services pages.'],
];

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="pg">
      <PageHero title="Frequently Asked Questions">Quick answers to common questions.</PageHero>
      <section className="section">
        <div className="container">
          <h2>Questions</h2>
          <div className="acc">
            {questions.map(([question, answer], index) => {
              const open = openQuestion === index;
              return <div className={`acc-item${open ? ' open' : ''}`} key={question}>
                <button className="acc-btn" type="button" aria-expanded={open} onClick={() => setOpenQuestion(open ? null : index)}>{question}</button>
                <div className="acc-panel" style={{ maxHeight: open ? '120px' : '0' }}><p>{answer}</p></div>
              </div>;
            })}
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}

export default FAQ;
