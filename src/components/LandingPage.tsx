import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/배경.png';

// Styled Components
const LandingPageContainer = styled.div`
    position: relative;
    width: 440px;
    height: 956px;
    margin: 0 auto;
    background: linear-gradient(180deg, #e9f7fe 0%, #b8e6ff 100%);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter', 'SF Pro', 'Gowun Batang', 'Metro Sans', 'Lexend', sans-serif;
    overflow: hidden;
`;

const StatusBar = styled.div`
    position: absolute;
    width: 440px;
    height: 56px;
    left: 0px;
    top: 0px;
    background: #e9f7fe;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 21px 0px 0px;
`;

const StatusBarContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 440px;
    height: 22px;
    gap: 134px;
`;

const DynamicIsland = styled.div`
    width: 124px;
    height: 10px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

const Levels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px 0px 6px;
    gap: 7px;
    width: 158px;
    height: 13px;
    flex: none;
    order: 2;
    flex-grow: 1;
`;

const Cellular = styled.div`
    width: 19.2px;
    height: 12.23px;
    background: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const Wifi = styled.div`
    width: 17.14px;
    height: 12.33px;
    background: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

const Battery = styled.div`
    width: 27.33px;
    height: 13px;
    position: relative;
    flex: none;
    order: 2;
    flex-grow: 0;
`;

const BatteryBorder = styled.div`
    position: absolute;
    width: 25px;
    left: calc(50% - 25px / 2 + 19.01px);
    top: 0%;
    bottom: 0%;
    mix-blend-mode: normal;
    opacity: 0.35;
    border: 1px solid #000000;
    border-radius: 4.3px;
    box-sizing: border-box;
`;

const BatteryCap = styled.div`
    position: absolute;
    width: 1.33px;
    left: calc(50% - 1.33px / 2 + 33.17px);
    top: 36.78%;
    bottom: 31.87%;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.4;
`;

const BatteryCapacity = styled.div`
    position: absolute;
    width: 21px;
    left: calc(50% - 21px / 2 + 19.01px);
    top: 15.38%;
    bottom: 15.38%;
    background: #000000;
    border-radius: 2.5px;
`;

const MainContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const TitleSection = styled.div`
    position: absolute;
    width: 100%;
    height: 300px;
    top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TitleEllipse = styled.div`
    position: relative;
    width: 287px;
    height: 271px;
    background: linear-gradient(180deg, #ffe894 0%, #ffcc12 100%);
    border: 1px solid #fbd859;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TitleEllipseInner = styled.div`
    position: relative;
    width: 245px;
    height: 236px;
    background: linear-gradient(180deg, #ffe68d 0%, #ffbb00 100%);
    border: 3px solid #fbd859;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const MainTitle = styled.h1`
    position: absolute;
    width: 191px;
    height: 71px;
    left: calc(50% - 191px / 2 - 4.5px);
    top: 197px;
    font-family: 'Gowun Batang';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1px;
    color: #222222;
    margin: 0;
`;

const Subtitle = styled.p`
    position: absolute;
    width: 191px;
    height: 71px;
    left: calc(50% - 191px / 2 - 4.5px);
    top: 197px;
    font-family: 'Gowun Batang';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -1px;
    color: #222222;
    margin: 0;
    margin-top: 40px;
`;

const Year = styled.p`
    position: absolute;
    width: 105px;
    height: 25px;
    left: 164px;
    top: 160px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1px;
    color: #000000;
    margin: 0;
`;

const BoardTitle = styled.p`
    position: absolute;
    width: 104px;
    height: 32px;
    left: calc(50% - 104px / 2 - 1px);
    top: 128px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1px;
    color: #000000;
    margin: 0;
`;

const GoalCardsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    top: 150px;
`;

const GoalCard = styled.div<{ rotation: number; left: string; top: string }>`
    position: absolute;
    width: 250px;
    height: 200px;
    left: ${props => props.left};
    top: ${props => props.top};
    transform: rotate(${props => props.rotation}deg);
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
`;

const GoalCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const GoalCardContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const GoalCardTitle = styled.h3`
    font-family: 'Gowun Batang';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1px;
    color: #000000;
    margin: 0;
    margin-bottom: 10px;
`;

const GoalCardGoal = styled.p`
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -1px;
    color: #000000;
    margin: 0;
    margin-bottom: 10px;
`;

const GoalCardMore = styled.a`
    font-family: 'Gowun Batang';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1px;
    color: #1670d1;
    text-decoration: none;
`;

const ButtonsSection = styled.div`
    position: absolute;
    width: 365px;
    height: 120px;
    left: 38px;
    top: 670px;
    display: flex;
    flex-direction: column;
    gap: 23px;
`;

const LoginButton = styled.button`
    width: 365px;
    height: 60px;
    background: #b8e6ff;
    border: 2px solid #abd6f5;
    border-radius: 7px;
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #242424;
    cursor: pointer;
    box-sizing: border-box;
`;

const CreateFamilyButton = styled.button`
    width: 365px;
    height: 60px;
    background: #23b4ff;
    border: 2px solid #7cbbef;
    border-radius: 7px;
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    box-sizing: border-box;
`;

// Component Props
interface GoalCardProps {
    title: string;
    goal: string;
    image: string;
    rotation: number;
    showMore?: boolean;
    position: {
        left: string;
        top: string;
    };
}

const GoalCardComponent: React.FC<GoalCardProps> = ({
    title,
    goal,
    image,
    rotation,
    showMore = true,
    position,
}) => {
    return (
        <GoalCard rotation={rotation} left={position.left} top={position.top}>
            <GoalCardImage src={image} alt={title} />
            <GoalCardContent>
                <GoalCardTitle>{title}</GoalCardTitle>
                <GoalCardGoal>{goal}</GoalCardGoal>
                {showMore && <GoalCardMore href="#">더보기</GoalCardMore>}
            </GoalCardContent>
        </GoalCard>
    );
};

const LandingPage: React.FC = () => {
    const goalCards = [
        {
            title: '아빠의 해',
            goal: '칭찬 하기',
            image: '/해.png',
            rotation: 8.5,
            position: { left: '4px', top: '170px' },
        },
        {
            title: '엄마의 복',
            goal: '잔소리 한 번 참기',
            image: '/아트보드 5 2.png',
            rotation: 2.21,
            position: { left: '183px', top: '240px' },
        },
        {
            title: '동생의 종',
            goal: '집에 일찍 들어오기',
            image: '/종.png',
            rotation: -12.86,
            position: { left: '-23px', top: '330px' },
        },
        {
            title: '코알라의 연',
            goal: '영어 공부하기',
            image: '/연.png',
            rotation: 6.58,
            position: { left: '176px', top: '440px' },
            showMore: false,
        },
    ];

    return (
        <LandingPageContainer
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <StatusBar>
                <StatusBarContent>
                    <DynamicIsland />
                    <Levels>
                        <Cellular />
                        <Wifi />
                        <Battery>
                            <BatteryBorder />
                            <BatteryCap />
                            <BatteryCapacity />
                        </Battery>
                    </Levels>
                </StatusBarContent>
            </StatusBar>

            <MainContent>
                <TitleSection>
                    <TitleEllipse>
                        <TitleEllipseInner>
                            <MainTitle>새해 목표</MainTitle>
                            <Subtitle>대신 써주는 내 2026년 다짐</Subtitle>
                            <Year>2026</Year>
                            <BoardTitle>신년 다짐 게시판</BoardTitle>
                        </TitleEllipseInner>
                    </TitleEllipse>
                </TitleSection>

                <GoalCardsContainer>
                    {goalCards.map((card, index) => (
                        <GoalCardComponent
                            key={index}
                            title={card.title}
                            goal={card.goal}
                            image={card.image}
                            rotation={card.rotation}
                            showMore={card.showMore}
                            position={card.position}
                        />
                    ))}
                </GoalCardsContainer>

                <ButtonsSection>
                    <LoginButton>로그인</LoginButton>
                    <CreateFamilyButton>우리 가족 게시판 만들기</CreateFamilyButton>
                </ButtonsSection>
            </MainContent>
        </LandingPageContainer>
    );
};

export default LandingPage;