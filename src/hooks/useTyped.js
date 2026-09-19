import { useState, useEffect } from 'react';

export function useTyped(
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 2000
) {
  const [text, setText] = useState('');
  const [arrayIndex, setArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentString = strings[arrayIndex % strings.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentString.substring(0, text.length - 1));
      }, backSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentString.substring(0, text.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && text === currentString) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, backDelay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setArrayIndex(prev => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, arrayIndex, strings, typeSpeed, backSpeed, backDelay]);

  return text;
}
