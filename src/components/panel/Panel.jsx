import './panel.css'


export default function Panel({score}){


    return(

        <>
            <div className="container">
                <div className="title">
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
                </div>
                <div className="score">
                    <div className="scoreText">
                        <h2>SCORE</h2>
                        <h1>{score}</h1>
                    </div>
                </div>
            </div>
        
        </>
    )
}