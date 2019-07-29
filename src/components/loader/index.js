import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import loader0 from '../../assets/loader0.svg';
import loader1 from '../../assets/loader1.svg';
import loader2 from '../../assets/loader2.svg';
import loader3 from '../../assets/loader3.svg';

export default function Loader() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      changeStep(0);
    }, 500);
  });

  function changeStep() {
    if (image === 3) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  }
  return (
    <Container className={image >= 3 ? 'fade-out' : ''}>
      {image === 0 && <img src={loader0} alt="loader0" />}
      {image === 1 && <img src={loader1} alt="loader1" />}
      {image === 2 && <img src={loader2} alt="loader2" />}
      {image === 3 && <img src={loader3} alt="loader3" />}
    </Container>
  );
}
