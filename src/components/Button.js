import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    font-family: "BoltonTitling";
    margin-top: 2rem;
    .button {
        font-size: 2.2rem;
        background-color: ${(props) => 
            props.outline ? 'var(--linen)' : 'var(--blush)'
        };
        padding: 0.7em 2em;
        border: 2px solid var(--raisin-black);
        border-radius: 8px;
        display: inline-block;
        color: ${props => 
            props.outline ? 'var(--blush)' : 'var(--linen)'
        };
    }
    @media only screen and (max-width: 768px) {
        .button {
            font-size: 1.8rem;
        }
    }
`;

export default function Button({ btnLink = "Test", btnText = "Test", outline = "false"}) {
  return (
    <ButtonStyle outline={outline}>
        <Link className="button" to={ btnLink }>
            {btnText}
        </Link>
    </ButtonStyle>
  )
}
