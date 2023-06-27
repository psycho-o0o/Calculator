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

    img {
        width: 100%;
        height: 100%;
    }
`;
export const MenuWrap = styled.div`
    font-size: 18px;
    cursor: pointer;
`;
export const BasketWrap = styled.div`
    display: flex;
    font-size: 18px;
    margin-left: 10px;
    position: relative;
    cursor: pointer;
    top: -1px;
`;
export const BasketCount = styled.div`
    margin-left: 5px;
`;
