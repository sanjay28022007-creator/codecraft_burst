

function Card({ name, year, dept }) {
    return (
        <div className="card-box">
            <h2>MSAJCE COLLEGE</h2>

            <div className="profile">
                <div className="profile-placeholder">
                    <span>👤</span>
                </div>
            </div>

            <h3>Student ID Card</h3>

            <p>Name: {name}</p>
            <p>Year: {year}</p>
            <p>Department: {dept}</p>
        </div>
    );
}

export default Card;
