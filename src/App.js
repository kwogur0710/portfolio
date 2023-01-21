import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{fontSize:'50px', padding: '20px'}}>
                    강재혁의 포토폴리오입니다.
                </h1>
            </header>
            <section className="Profile-header">
                <img src={require('./assets/image/profile.jpeg')} className="Profile-IMG" alt="Profile" />
                <div className="Profile-INFO">
                    <h1>기본정보 </h1>
                    <div className="Profile-Grid">
                        <div className="font20">이름</div>
                        <div className="font18">강재혁</div>
                        <div className="font20">생년월일</div>
                        <div className="font18">2000.07.10</div>
                        <div className="font20">이메일</div>
                        <div className="font18">kwogur0710@naver.com</div>
                        <div className="font20">전화번호</div>
                        <div className="font18">010-7585-8060</div>
                        <div className="font20">주소</div>
                        <div className="font18">서울특별시 강서구</div>
                    </div>
                </div>
            </section>
            <Project
                title="재료로 검색하는 레시피"
                imgsrc={require('./assets/image/recipe.png')}
                skill="React-Native, Sequelize, mysql, Expo, Open-API"
                time="2022.03~2022.12 (8개월)"
                plan="자취생들의 배달음식으로 인한 식비 부담을 줄이기 위해 집에 있는 재료를 활용하여 요리할 수 있도록 재료로 레시피를 검색하는 어플을 만들게 되었습니다."
                link1={['https://github.com/kwogur0710/recipe_frontend', require('./assets/image/icon/github.png'), '프론트엔드']}
                link2={['https://github.com/kwogur0710/recipe_server', require('./assets/image/icon/github.png'), '백엔드']}
            />
            <Project
                title="전역일 계산기"
                imgsrc={require('./assets/image/military.png')}
                skill="React-Native"
                time="2022.12.26~2023.1.10(15일)"
                plan="군 복무중 진급일, 전역일등을 쉽게 확인할수 있습니다. 추후에는 육, 해, 공 모두 사용 가능하도록 업데이트 할 예정입니다."
                link1={['https://github.com/kwogur0710/military', require('./assets/image/icon/github.png'), '프론트엔드']}
            />
        </div>
    );
};
const Project = (props) => {
    //title, imgsrc, skill, time, plan, link1
    return (
        <section className="Project">
            <div className="Project-header">
                <img src={props.imgsrc} className="Project-IMG" alt="Project" />
                <div className="Project-INFO">
                    <h1>{props.title}</h1>
                    <div className="Project-Grid">
                        <div className="font20">사용 기술</div>
                        <div className="font18">{props.skill}</div>
                        <div className="font20">개발 기간</div>
                        <div className="font18">{props.time}</div>
                        <div className="font20">기획 의도</div>
                        <div className="font18">{props.plan}</div>
                        <div className="font20">소스 코드</div>
                        <div className="button-Group">
                            {props.link1 != null ? (
                                <a className="button-Link" href={props.link1[0]} target="_blank" rel="noopener noreferrer">
                                    <img className="github-ICON" align="middle" src={props.link1[1]} alt="GitHub" />
                                    {props.link1[2]}
                                </a>
                            ) : null}
                            {props.link2 != null ? (
                                <a className="button-Link" href={props.link2[0]} target="_blank" rel="noopener noreferrer">
                                    <img className="github-ICON" align="middle" src={props.link2[1]} alt="GitHub" />
                                    {props.link2[2]}
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default App;
