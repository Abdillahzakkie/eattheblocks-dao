import styled from "styled-components";

export const ProposalContainer = styled.div`
width: 100vw;

& .wrapper {
    width: 70%;
    grid-gap: 2em 4em;
    padding: 4rem 0;

    & form {
        width: 50%;
        background: var(--mainWhite);
        place-items: center;
        padding: 2em;
        line-height: 2;
        grid-gap: 1.25em 0;

        & h2 {
            font-size: 1.5em;
            font-weight: 900;
        }

        & .grid {
            width: 100%;

            & label { letter-spacing: var(--mainSpacing); }

            & input {
                width: 100%;
                height: 60px;
                padding: .75em;
                border-radius: .5em;
                border: .1em solid var(--white);
                font-size: .95em;
                letter-spacing: var(--mainSpacing);
            }

            & textarea {
                width: 100%;
                height: 180px;
                padding: .75em;
                border-radius: .5em;
                border: .1em solid var(--white);
                font-size: 1.2em;
                letter-spacing: var(--mainSpacing);
                resize: none;
            }

            & .custom-select {
                position: relative;
                width: 100%;

                & select {
                    padding: 1em;
                    outline: none;
                    border: none;
                    appearance: none;
    
                    & option {
    
                    }
                }
                & .custom-arrow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 3em;
                    height: 100%;
                    background: var(--darkGrey);
                    pointer-events: none;
                    --size: .8em;

                    &::before {
                        content: "";
                        position: absolute;
                        top: 30%;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-left: var(--size) solid transparent;
                        border-right: var(--size) solid transparent;
                        border-bottom: var(--size) solid rgba(255, 255, 255, .5);
                        margin: 0 auto;
                        transform: translate(-50%, -50%);
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        top: 70%;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-left: var(--size) solid transparent;
                        border-right: var(--size) solid transparent;
                        border-top: var(--size) solid rgba(255, 255, 255, .5);
                        margin: 0 auto;
                        transform: translate(-50%, -50%);
                    }
                }
            }
    
            & button {
                background: var(--mainGreen);
                width: 100%;
                height: 60px;
                border-radius: .5em;
                letter-spacing: .25em;
                color: var(--white);
                transition: var(--mainTransition);
    
                &:hover {
                    color: var(--mainGreen);
                    background: transparent;
                    border: .05em solid var(--mainGreen);
                }
            }
        }
    }
}
`;