export const DifficultyModal = () => {
    return (<>
        <div className="modal">
            <div className="difficulty">
                <img src="./assets/close.png" alt="close" id="close" />
                <p>For this genre select difficulty level : </p>
                <a href="./Pages/rules.html"><button className="btn btn-hover btn-outline-yellow">Easy</button> </a>
                <a href="./Pages/rules.html"><button className="btn btn-hover btn-outline-yellow">Medium</button></a>
                <a href="./Pages/rules.html"><button className="btn btn-hover btn-outline-yellow">Hard</button></a>
            </div>
        </div>
    </>)
}