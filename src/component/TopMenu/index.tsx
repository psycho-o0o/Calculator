import { Wrapper, LogoWrap, MenuWrap, BasketWrap, BasketCount } from './style';
import { GrMenu } from 'react-icons/gr';
import { SlBasket } from 'react-icons/sl';
import Logo from '../../images/Logo.svg';

function TopMenu(): React.ReactElement {
    return (
        <Wrapper>
            <div className="left">
                <LogoWrap>
                    <img src={Logo} />
                </LogoWrap>
            </div>
            <div className="right">
                <MenuWrap>
                    <GrMenu />
                </MenuWrap>
                <BasketWrap>
                    <SlBasket />
                    <BasketCount>3</BasketCount>
                </BasketWrap>
            </div>
        </Wrapper>
    );
}

export default TopMenu;
