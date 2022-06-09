import styled from 'styled-components'
import {CloseCircleOutline} from'@styled-icons/evaicons-outline/CloseCircleOutline'

export const CardContainer = styled.article`
width: 100%;
padding: .5em .7em;
border: 1px solid #00000065;
border-radius: 6px;
position:relative;

`

export const CardTitle = styled.h4`
font-size: 1.6em;
margin: .4em 0;
overflow-wrap: break-word;
`


export const CardDate = styled.h5`
margin: 0;
font-size: 1em;


`
export const CardUser = styled.h5`
margin: .3em 0 .6em;
font-size: 1.2em;
`

export const TagsContainer = styled.div`
display: flex;
gap:.3em;
flex-wrap: wrap;
`

export const CardTags = styled.button`
font-size: 1em;
padding: .5em;
border: none;
border-radius: 6px;
background-color: ${props=> props.status === "FINISHED" ? "#1EC876" :( props.status === "IN PROGRESS" ? "#FBDE3F" : "#FF452B")
};
color:${props=> props.status === "IN PROGRESS" ? "#000" :"#fff"};
box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
margin-right:.5em ;
font-weight: bold;

@media screen and (min-width: 900px){
font-size: .8em;
 
}
`
export const CardDescription = styled.p`
text-align: left;
overflow-wrap: break-word;
font-size: 1.2em;
`

export const CardClose = styled(CloseCircleOutline)`
position:absolute;
top:.5em;
right:.5em;
width: 2em;
color: #FF452B;
cursor: pointer;
`