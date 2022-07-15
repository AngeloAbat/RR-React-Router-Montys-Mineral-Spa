export default function HotTempt (intake) {
    const displayStove = intake.tryOut.map((eachStove) => <li>{eachStove}</li>)

    return (
        <div className="burningHot">
            <h1> Burning hot stove</h1>
            <p>Learning Test, Attempt 1 worked, learning experience. 10/10 quick and easy</p>
            <div className="stoveList">
                <ul>
                    {displayStove}
                </ul>
            </div>
        </div>
    )
}