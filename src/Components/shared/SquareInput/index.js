import React from "react";
import { InputSquare, InputLabel, FormGroup, IconContainer } from "./styles";
import { withTheme } from "styled-components";
import Spinner from '../../../assets/img/Spinner'
const SquareInput = props => {
    const {
        theme,
        type,
        required,
        value,
        name,
        innerRef,
        label,
        icon,
        id,
        labelStyles,
        leftIcon: LeftIcon,
        onClickRightIcon,
        color,
        height,
        rightIconStyles,
        isLoading,
        ...other
    } = props;

    const h = height ? height * 0.55 : 20
    return (
        <FormGroup>
            {label && (
                <InputLabel for={id ? id : name} style={{ color: color, ...labelStyles }}>
                    {label}
                </InputLabel>
            )}

            {LeftIcon && (
                <LeftIcon style={{
                    display: 'block',
                    position: 'absolute',
                    left: '1em',
                    bottom: `calc(50% - ${(h / 2) - 1}px)`,
                    cursor: 'pointer',
                    zIndex: 9
                }} 
                color={theme.blueMedium} 
                width={h} 
                height={h} />
            )}
            <InputSquare
                label={label}
                color={color}
                leftIcon={LeftIcon}
                required={required}
                value={value}
                ref={innerRef}
                icon={icon}
                type={type}
                name={name}
                id={id ? id : name}
                height={height}
                {...other}
            />
            {isLoading &&  (
                <IconContainer onClick={onClickRightIcon}>
                    <Spinner color={theme.blueMedium} width={`${height ? height * 0.55 : 20}px`} height={`${height ? height * 0.55 : 30}px`} {...rightIconStyles}/>
                </IconContainer>
            )}
        </FormGroup>
    );
};

export default withTheme(SquareInput);
