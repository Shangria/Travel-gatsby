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
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
        reset();
    }

    return (
        <FormContainer>
            <FormTitle>Stay in Touch</FormTitle>
            <FormBox onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>
                    <FormInput placeholder="First name" {...register("firstName", {
                        required: "Do you have another try:)",
                        minLength: {
                            value: 5,
                            message: "Min 5 symbol firstName"
                        },
                    })}/>
                    <FormMessage> {errors.firstName &&
                        <span>{errors.firstName?.message}</span>}</FormMessage>

                </FormLabel>

                <FormLabel>
                    <FormInput placeholder="Last name" {...register("lastName", {
                        required: "Do you have another try:)",
                        minLength: {
                            value: 5,
                            message: "Min 5 symbol lastName"
                        },
                    })} />
                    <FormMessage> {errors.lastName &&
                        <span>{errors.lastName?.message}</span>}</FormMessage>
                </FormLabel>

                <FormLabel>
                    <FormInput placeholder="Email" {...register("email", {
                        required: "Do you have another try:)",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })} />
                    <FormMessage> {errors.email &&
                        <span>{errors.email?.message}</span>}</FormMessage>
                </FormLabel>

                <FormButton disabled={!isValid} type="submit">Send</FormButton>
            </FormBox>
        </FormContainer>
    );
};

export default Form;


const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    width: 50%;
  }


  @media (min-width: ${({theme}) => theme.media.wideScreenXl}) {
    width: 40%;
  }
`

const FormTitle = styled.h3`
  font-size: calc(2rem + 2vw);
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.light};
  text-shadow: ${({theme}) => theme.colors.shadowText};
`
const FormLabel = styled.label`
  position: relative;
  width: 100%;
`

const FormInput = styled.input`
  border-radius: 20px;
  border: none;
  margin-bottom: 25px;
  color: ${({theme}) => theme.colors.fourth};
  padding: 10px;
  width: 100%;
`

const FormMessageWrap = styled.span`
  position: absolute;
  bottom: 0;
  display: block;
  margin-right: 10px;
  padding: 5px 10px;
  color: ${({theme}) => theme.colors.light};
  text-shadow: ${({theme}) => theme.colors.shadowTextBlue};;
  width: 100%;
`

const FormMessage = styled(FormMessageWrap)``


const FormButton = styled.button`
  background: ${({theme}) => theme.colors.primary};
  padding: 10px 30px;
  color: ${({theme}) => theme.colors.five};
  font-size: calc(1rem + 1vw);
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s !important;
  border-radius: 50px;

  :hover {
    background: ${({theme}) => theme.colors.fourth};
    transform: translateY(-2px);
    color: ${({theme}) => theme.colors.secondary};
  }
`






