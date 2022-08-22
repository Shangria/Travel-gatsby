import React from 'react';
import {useForm} from "react-hook-form";
import styled from "styled-components";


const Form = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm({
        mode:"onBlur",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
        reset();
    }

    return (
        <FormWrap>
            <FormContainer>
                <FormTitle>Stay in Touch</FormTitle>
                <FormBox onSubmit={handleSubmit(onSubmit)}>
                    <FormInput{...register("firstName", {
                        required: "Do you have another try:)",
                        minLength: {
                            value: 5,
                            message: "Min 5 symbol firstName"
                        },
                    })}/>
                    <FormMessageFirst> {errors.firstName && <span>{errors.firstName?.message}</span>}</FormMessageFirst>

                    <FormInput{...register("lastName", {
                        required: "Do you have another try:)",
                        minLength: {
                            value: 5,
                            message: "Min 5 symbol lastName"
                        },
                    })}/>
                    <FormMessageFirst> {errors.lastName && <span>{errors.lastName?.message}</span>}</FormMessageFirst>

                    <FormButton disabled={!isValid} type="submit">Send</FormButton>
                </FormBox>
            </FormContainer>

        </FormWrap>
    );
};

export default Form;

const FormWrap = styled.div`

`

const FormContainer = styled.div`

`

const FormBox = styled.form`

`

const FormTitle = styled.div`

`

const FormInput = styled.input`

`

const FormButton = styled.button`

`

const FormMessageFirst = styled.span`

`




