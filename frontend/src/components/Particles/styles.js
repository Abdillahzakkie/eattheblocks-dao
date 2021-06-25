import styled from "styled-components";

export const ParticleWrapper = styled.div`
    width: 100vw;
    height: 70vh;
    background: var(--mainWhite);
    position: relative;

    & .particles { z-index: 0; }

    & .container {
        position: absolute;
        top: 17em;
        left: 0;
        padding: 0 0 0 10em;
        place-items: start;
        grid-gap: 1em 0;

        & header {
            place-self: start;
            width: 100%;
            font-size: 1.5em;
            letter-spacing: var(--mainSpacing);
        }

        & section {
            margin: 0;

            & .typewriter { 
                place-self: start;
                width: 100%;
            }
        }
    }
`;