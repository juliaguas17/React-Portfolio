import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
    max-width: 800px;
    margin: 0 auto;
    font-size: 2rem;
    line-height: 2rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
        <p>{children}</p>
    </PStyle>
  )
}

// Change p color to blush or something else to lay over hero photo