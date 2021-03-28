import React from "react";
import CheckedBox from "../../../assets/img/CheckedBox";
import UncheckedBox from "../../../assets/img/UncheckedBox";
import { Container } from "./styles";
import { withTheme } from "styled-components";
import { Text } from '../../shared/Text'
const CheckBox = props => {
    const { checked, onChange, children, theme } = props;

    const checkProps = {
        onClick: onChange,
        style: { cursor: 'pointer' }
    }
    return (
        <Container onClick={onChange}>
            {checked ? <CheckedBox {...checkProps} color={theme.blueMedium} />
                : <UncheckedBox {...checkProps} color={theme.text} />
            }
            <Text fontSize='M' fontWeight='normal' style={{ marginLeft: "1em" }}>
                {children}
            </Text>
        </Container>
    );
};

export default withTheme(CheckBox);
