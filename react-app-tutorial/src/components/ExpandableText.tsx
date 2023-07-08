import React from "react";
import { useState } from "react";
import styles from './Button/Button.module.css';


interface ExTextProps {
  maxChars: number;
  children: string;
//   handleClick: () => void;
}

const ExpandableText = ({ maxChars, children }: ExTextProps) => {
    
    if (children.length <= maxChars) return <p>{children}</p>;
    
    const [isExpanded, setIsExpanded] = useState(false);

    const text = isExpanded ? children : children.substring(0, maxChars);

    return (
    <>
    <p>{text}...<button className={styles.button} onClick={() => setIsExpanded(!isExpanded)} >{isExpanded ? 'Less' : 'More'}</button></p>
  
    </>
  );
};

export default ExpandableText;
