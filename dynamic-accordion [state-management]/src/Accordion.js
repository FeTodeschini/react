import { useState } from 'react';
import AccordionItem from './AccordionItem.js';

export default function Accordion({ data }) {

  const [curOpen, setCurOpen] = useState(1);

    return (
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem 
            curOpen={curOpen} 
            onOpen={setCurOpen} 
            title={el.title} 
            num={i} 
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </div>
    );
}