import styled from 'styled-components'

export const SelectContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom:.6em;
`

export const SelectRegister= styled.select`
width: 100%;
background-color: transparent;
padding: .4em;
border-radius: 4px;
font-size: 1em;
outline: ${props=> props.invalid === "invalid" ? "2px solid #ff452b" : "none"};
&:focus{
    outline:none;
}
`

export const LabelSelect = styled.label`
margin-bottom:.2em;
`

export const OptionRegister = styled.option`
width:100%;

`




