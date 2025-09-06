import React from 'react';
import './LandingPage.css';

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

const GoalCard: React.FC<GoalCardProps> = ({
    title,
    goal,
    image,
    rotation,
    showMore = true,
    position,
}) => {
    return (
        <div
            className="goal-card"
            style={{
                left: position.left,
                top: position.top,
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <img
                src={image}
                alt={title}
                className="goal-card-image"
            />
            <div className="goal-card-content">
                <h3 className="goal-card-title">{title}</h3>
                <p className="goal-card-goal">{goal}</p>
                {showMore && (
                    <a href="#" className="goal-card-more">
                        더보기
                    </a>
                )}
            </div>
        </div>
    );
};

const LandingPage: React.FC = () => {
    const goalCards = [
        {
            title: '아빠의 해',
            goal: '칭찬 하기',
            image: '/해.png',
            rotation: 8.5,
            position: { left: '4px', top: '227px' },
        },
        {
            title: '엄마의 복',
            goal: '잔소리 한 번 참기',
            image: '/아트보드 5 2.png',
            rotation: 2.21,
            position: { left: '183px', top: '297px' },
        },
        {
            title: '동생의 종',
            goal: '집에 일찍 들어오기',
            image: '/종.png',
            rotation: -12.86,
            position: { left: '-23px', top: '391px' },
        },
        {
            title: '코알라의 연',
            goal: '영어 공부하기',
            image: '/연.png',
            rotation: 6.58,
            position: { left: '176px', top: '502px' },
            showMore: false,
        },
    ];

    return (
        <div className="landing-page">
            <div className="status-bar">
                <div className="status-bar-content">
                    <div className="time">9:41</div>
                    <div className="dynamic-island"></div>
                    <div className="levels">
                        <div className="cellular"></div>
                        <div className="wifi"></div>
                        <div className="battery">
                            <div className="battery-border"></div>
                            <div className="battery-cap"></div>
                            <div className="battery-capacity"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="title-section">
                    <div className="title-ellipse">
                        <div className="title-ellipse-inner">
                            <h1 className="main-title">
                                새해 목표
                            </h1>
                            <p className="subtitle">
                                대신 써주는 내 2026년 다짐
                            </p>
                            <p className="year">2026</p>
                            <p className="board-title">
                                신년 다짐 게시판
                            </p>
                        </div>
                    </div>
                </div>

                <div className="goal-cards-container">
                    {goalCards.map((card, index) => (
                        <GoalCard
                            key={index}
                            title={card.title}
                            goal={card.goal}
                            image={card.image}
                            rotation={card.rotation}
                            showMore={card.showMore}
                            position={card.position}
                        />
                    ))}
                </div>

                <div className="buttons-section">
                    <button className="login-button">
                        로그인
                    </button>
                    <button className="create-family-button">
                        우리 가족 게시판 만들기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
