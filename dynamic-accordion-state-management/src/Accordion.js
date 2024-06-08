import AccordionItem from './AccordionItem.js';

export default function Accordion({ data }) {
    return (
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
        ))}
      </div>
    );
}