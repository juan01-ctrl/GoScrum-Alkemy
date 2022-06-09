import styled from 'styled-components'

export const TaskListSection  = styled.article`
padding: 1em .5em;
@media screen and (min-width: 900px){
    width: 55%;

}
`

export const TaskListContainer = styled.div`
min-height: 50vh;
border-radius: 12px;
background-color: #faf0f1;
padding: 1.5em;

@media screen and (min-width: 900px){
    padding: 1.5em .9em;
min-height: calc(100vh - 5em);

}
`

export const TaskListTitle = styled.h2`
font-size: 2.2em;
`

export const TaskListFilter = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 1em;
@media screen and (min-width: 600px){
    justify-content: flex-start;
}
`
export const TaskCardsContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
gap: 1em;
padding: 1.5em 0;
@media screen and (min-width: 1180px){
    gap:.1em;

}
`
export const TaskState = styled.div`
background-color: #fff;
width: 100%;
padding: 0 .7em .7em;
border-radius: 8px;
display: flex;
flex-direction: column;
gap: 1em;
box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.45);

@media screen and (min-width: 1180px){
    width: 32%;
}
`

export const TaskStateTitle = styled.h3`
font-size: 2em;
margin-bottom: .5em;
`



