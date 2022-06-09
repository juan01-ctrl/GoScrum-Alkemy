import styled from 'styled-components'

export const CreateTaskContainer = styled.article`
height:100%;
padding:  1.5em;
@media screen and (min-width: 900px){
    width: 45%;
}
`

export const CreateTaskTitle = styled.h1`
font-size: 2.5em;
`


export const FormContainer = styled.div`
height:100%;

`
export const CreateTaskForm = styled.form`
height:100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const FieldsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap:.5em;
@media screen and (max-width:900px ){
    justify-content:flex-start;
}
`

export const NewTaskDescription = styled.textarea`
width: 100%;
height: 6em;
resize: none;
margin: 1.5em 0 0;
padding: .4em;
border-radius: 6px;
font-size:1.4em;
max-width: 600px;
`

// export const SubmitBtn = styled.button`
// padding: .5em 1em;
// border:none;
// border-radius: 6px;
// background-color: #ff452b;
// color:#fff;
// cursor: pointer;
// box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
// font-size: 1.2em;
// margin-top: 1em;
// display: block;
// border:1px solid #ff452b ;
// transition: .4s ease-in-out;

// &:hover{
//     background-color: #fff;
//     color:#ff452b ;
   
// }
// `
export const TextField = styled.input`
color: #000 ;
padding: .5em;
background-color: transparent;
outline: none;
font-size: 1em;
border: 1px solid #00000075;
border-radius: 6px;
width: 170px;
`

export const SelectFields = styled.select`
color: #000 ;
padding: .5em;
background-color: transparent;
outline: none;
font-size: 1em;
border-radius: 6px;

`