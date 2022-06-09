import styled from 'styled-components'

export const Header = styled.header`
width: 100%;
display:flex;
padding:1em;
align-items: center;
justify-content: space-between;
box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.45);

@media screen and (min-width: 640px){
padding:1em 3em;
  
}
`
// export const NavButton = styled.a`
// padding: .3em .6em;
// border-radius: 6px;
// background-color: #ff452b;
// color:#fff;
// cursor: pointer;
// box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
// font-size: 1.2em;

// `


export const NavRightContainer = styled.div`
display: flex;
align-items: center;
`

export const User = styled.p`
text-align: center;
width: 100%;
margin: 0;
font-size: 1.4em;
display: none;
@media screen and (min-width: 650px){
    display: block;
    
}
`
// export const Logout = styled.img`
// width: 100%;
// `