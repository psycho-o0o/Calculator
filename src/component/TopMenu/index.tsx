import {
    Wrapper,
    LogoWrap,
    MenuWrap,
    BasketWrap,
    BasketCount,
    MenuTab,
    Button
} from './style';
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
                    <div className="menu-icon">
                        <GrMenu />
                    </div>
                    <div className="detail-menu">
                        <MenuTab>About</MenuTab>
                        <MenuTab>Free Workouts</MenuTab>
                        <MenuTab>Shop</MenuTab>
                        <Button>&gt;&nbsp;&nbsp; BOOK A CALL</Button>
                    </div>
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
