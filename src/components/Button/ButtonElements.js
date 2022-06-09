import styled from 'styled-components'

export const Button = styled.button`
text-decoration: none;
padding: .3em 1em;
border:none;
border-radius: 6px;
background-color: #ff452b;
color:#fff;
cursor: pointer;
box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
font-size: 1.2em;
display: block;
margin-top: ${props => props.marginTop};
border:1px solid #ff452b ;
transition: .4s ease-in-out;

&:hover{
    background-color: #fff;
    color:#ff452b ;
   
}
`