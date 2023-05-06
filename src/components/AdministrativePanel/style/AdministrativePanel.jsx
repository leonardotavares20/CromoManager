import styled from "styled-components";

// Container dos Menus

export const PainelAdministrativo = styled.nav`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 370px;
    height: calc(100vh - 81px);
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    color: #FFFF;
    background-color: #F5F5F5;
    align-items: center;
    overflow-y: auto;
`
// Primeiro Menu

export const PainelMenu = styled.div`
    margin-top: 24px;
    background-color: #17417D;
    padding: 10px;
    font-size: 20px;
    padding: 19px 0px 19px 27px;
    border-top: 3px;
    width: 299px;
    border-radius: 5px 5px 0px 0px;
    font-weight: 400;
`

export const PainelListaMenu = styled.li`
    font-size: 14px;
    background-color: #21559D;
    list-style-type: none;
    align-self: center;
    padding: 21px 0px 23px 51px;
    font-weight: 400;
    &:last-child {
        border-radius: 0px 0px 5px 5px;
    }
`

// Segundo Menu

export const PainelConteudo = styled.div`
    margin-top: 5px;
    padding: 10px;
    color: #0a2f62;
    font-size: 20px;
    padding: 19px 0px 19px 27px;
    border-top: 3px;
    width: 299px;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 10px;
    position: relative;
    font-weight: 400;
    overflow-y: auto;
    &:before {
        content: '';
        position: absolute;
        left: 15px;
        bottom: 0;
        height: 20px;
        width: 281px;
        border-bottom: 1px solid #21559D80;
    }
`


export const SpanSeta = styled.span`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 15px;
    color: #1A60C3;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr; 
    transition: 0.2s;
    cursor: pointer;
    position: absolute;
    left: 250px;
    .rotate {
        transform: rotate(90deg);
        transition: transform 0.2s ease-in-out;
    }
    :hover {
        /* transform: rotate(90deg); */
    }
`

export const Ul = styled.ul`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    &.panel.active {
        max-height: 500px;
        transition: max-height 0.6s ease-in;
    }
`

export const Li = styled.li`
    color: black;
    margin-left: -35px;
`
export const PainelListaConteudo = styled.ul`
    color: #0a2f62;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    width: 280px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 21px 0px 23px 51px;
    margin-left: -40px;
    background-color: #F5F5F5;
    border: none;
    transition: .4s;
    transition: 1s;
    list-style-type: none;
`