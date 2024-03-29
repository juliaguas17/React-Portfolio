import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
text-align: center;
p {
    font-family: "BoltonLight";
    font-size: 2rem;
    color: var(--white);
    text-shadow: -2px 1px 0 var(--raisin-black),
				  1px 1px 0 var(--raisin-black),
				  1px -1px 0 var(--raisin-black);
				  -2px -2px 0 var(--raisin-black);
}
h2 {
    font-family: "BoltonTitling";
    color: var(--blush);
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    text-shadow: -2px 1px 0 var(--raisin-black),
				  1px 1px 0 var(--raisin-black),
				  1px -1px 0 var(--raisin-black);
				  -2px -2px 0 var(--raisin-black);
}
@media only screen and (max-width: 768px) {
    p {
        font-size: 1.2rem;
    }
    h2 {
        font-size: 3.6rem;
    }
}
`;

export default function SectionTitle({
    subheading = 'Subheading',
    heading = 'Heading'
}) {
  return (
    <SectionTitleStyle>
        <p>{subheading}</p>
        <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

// fix paragraph color and background