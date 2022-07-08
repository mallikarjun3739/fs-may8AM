import Employee from '../Employee/Employee'
let User = () => {
    let user = {
        name: "Rahul",
        email: "rahul@gmail.com",
        sal: 45000,
        image: "data:image/jpeg;base64,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"
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <img src={user.image} alt="Our Rahul " />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{user.name}</li>
                            <li className="list-group-item">{user.email}</li>
                            <li className="list-group-item">{user.sal}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Employee emp={user} />
    </div>
}
export default User