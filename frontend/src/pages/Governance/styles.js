import styled from "styled-components";

export const GovernanceWrapper = styled.div`
    width: 100%;
    padding: 2em 0;
    
    & header {
        grid-template-columns: repeat(2, 1fr);
        background: var(--mainWhite);
        width: 60%;
        padding: 1em 2em;
        grid-gap: 0 1em;
        border-radius: .5em;

        & .grid {
            width: 100%;
            align-items: center;
            letter-spacing: var(--mainSpacing);

            & .btn {
                place-self: end;
                background: transparent;
                padding: .75em 2em;
                margin: auto 0;
                border-radius: .5em;
                border: .1em solid var(--mainGreen);
                letter-spacing: var(--wordSpacing);
            }
        }
    }
`;