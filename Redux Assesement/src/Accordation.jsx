import React, { useState } from 'react';

const Accordion = () => {
  // State to track the visibility of accordion bodies
  const [accordionState, setAccordionState] = useState({
    // Initialize all bodies as hidden
    0: false,
    1: false,
    2: false,
  });

  // Toggle visibility of accordion body on click of title
  const toggleAccordion = (index) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Sample data for accordion titles and bodies
  const accordionData = [
    { title: 'What is your return policy?', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, excepturi dolorem? Blanditiis autem incidunt, perferendis illo harum obcaecati eveniet amet consectetur adipisicing elit. Quod, excepturi dolorem? Blanditiis autem incidunt facere velit sequi odit minus cum laudantium consectetur adipisicing elit illum, amet corporis ratione!' },
    { title: 'How do I track my order?', body: 'Lorem ipsum dolor sit ullam voluptatem, iusto explicabo ipsum expedita, ducimus tenetur, soluta officia ex impedit amet consectetur adipisicing elit. Cumque modi sint magnam, quaerat asperiores deleniti recusandae saepe quidem corrupti fugit, odio atque, nobis consequatur iusto? Reprehenderit dignissimos atque corrupti at sint magnam, quaerat asperiores deleniti recusandae saepe quidem corrupti fugit, odio quidem delectus porro amet accusamus pariatur cumque quia ullam voluptatem, iusto explicabo ipsum expedita, ducimus tenetur, soluta officia ex impedit.' },
    { title: 'Can I purchase items again?', body: 'Often if you save your receipt, or if you bought online, you can get a credit for the difference between sale price and price you paid unless store policy prohibits it. My grandmother taught me this. She said if something goes on sale within two weeks after a purchase, bring the receipt to the store and get the difference' },
  ];

  return (
    <div className="accordion"> {/* Added base class for accordion container */}
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            style={{
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: '#eee',
              marginBottom: '5px',
              position: 'relative',
            }}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-title">{item.title}</div>
            <span
              className="dropdown-arrow"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                transition: 'transform 0.2s',
                transformOrigin: 'center',
                ...(accordionState[index] && { transform: 'rotate(180deg)' }),
              }}
            >
              &#9660;
            </span>
          </div>
          {accordionState[index] && (
            <div
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderTop: 'none',
                backgroundColor: '#fff',
              }}
            >
              {item.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
