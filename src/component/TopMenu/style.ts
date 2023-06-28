import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    .left {
        width: 40%;
    }
    .right {
        width: 60%;
        display: flex;
        justify-content: right;
    }
`;
export const LogoWrap = styled.div`
    width: 100px;
    margin: 10px;
    display: flex;
    position: relative;
    top: -6px;

    img {
        width: 100%;
        height: 100%;
    }
`;
export const MenuWrap = styled.div`
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
    & > .detail-menu {
        display: none;
    }

    @media screen and (min-width: 1452px) {
        display: flex;

        & > .menu-icon {
            display: none;
        }

        & > .detail-menu {
            display: flex;
        }
    }
`;
export const BasketWrap = styled.div`
    display: flex;
    font-size: 18px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const BasketCount = styled.div`
    margin-left: 10px;
    font-size: 5px;
    display: flex;
    align-items: center;
    position: relative;
    bottom: -1px;
`;

export const MenuTab = styled.div`
    padding: 10px 20px;
    color: #081158;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6em;
    font-family: 'Red Hat Display', sans-serif;
`;

export const Button = styled.button`
    min-width: 160px;
    color: white;
    background-color: #081158;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px 12px 20px;
    border: none;
    outline: none;
    font-family: 'Red Hat Display', sans-serif;
    letter-spacing: 1.5px;
    transition: padding-left 500ms, opacity 500ms, color 200ms, transform 500ms;

    &:hover {
        padding-left: 40px;
        opacity: 0.8;
        transform: translate(5px, -3px);
    }
`;
