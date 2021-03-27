import styled, { css } from "styled-components";

export const InputSquare = styled.input`
    box-sizing: border-box;
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 100%;
    border: ${props => `1px solid ${props.theme.greyLight7}`};
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(60, 88, 134, 0.13);
    font-size: ${props => props.theme.mobileDevice ? props.theme.fontsSizes['XXS'] : props.theme.fontsSizes['XS']};
    line-height: ${props => props.theme.mobileDevice ? props.theme.lineHeights['XXS'] : '22px'}; 
    margin-top: ${props => props.label ? '8px' : '0px'};
    padding: ${props => props.theme.mobileDebice ? props.theme.spacing['2'] : props.theme.spacing['3']};
    padding-left: ${props => (props.leftIcon ? "3em" : "1em")};
    padding-right: ${props => (props.rightIcon ? "3em" : "1em")};
    color: ${props =>
        props.inputStyles && props.inputStyles.color
            ? props.inputStyles.color
            : `${props.theme.text}`};
    background-color: ${props =>
        props.inputStyles && props.inputStyles.backgroundColor
            ? props.inputStyles.backgroundColor
            : `white`};
    & :focus {
        outline: none;
        border: ${props =>
            `1px solid ${
                props.inputStyles && props.inputStyles.color
                    ? props.inputStyles.color
                    : props.theme.text
            }`};
    }

    ${props =>
            props.error
                ? css` 
                      border: ${props => `1px solid ${props.theme.onInvalid}`};
                  `
                : null}
        :disabled {
        ${props =>
            props.error
                ? css`
                  
                  `
                : css`
                   
                  `}
    }

    ::placeholder {
        color: ${props =>
            props.error
                ? props.theme.onInvalid
                : props.placeHolderStyles && props.placeHolderStyles.color
                ? props.placeHolderStyles.color
                : props.theme.placeHolder};
    }

    :-ms-input-placeholder {
        color: ${props =>
            props.error
                ? props.theme.onInvalid
                : props.placeHolderStyles && props.placeHolderStyles.color
                ? props.placeHolderStyles.color
                : props.theme.placeHolder};
    }
`;

export const InputLabel = styled.label`
    color: white;
    font-weight: ${props => props.theme.fontWeights['medium']};
    font-size: ${props => props.theme.fonts['XS']};
    ${InputSquare}:focus ~ & {
        color: ${props => props.theme.text};
    }
`;

export const FormGroup = styled.div`
    position: relative;
    width: 100%;
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 1em;
    bottom: 0.5em;
    cursor: pointer;
    z-index: 999;
`;

export const LeftIconContainer = styled.div`
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 1em;
    bottom: ${props => `calc(50% - ${props.height / 2 + 2}px)`};
    cursor: pointer;
    z-index: 999;
`;
