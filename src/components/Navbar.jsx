import Avatar from "./Avatar"

const Navbar = () => {
    return (
        <nav className="navbar">
            < Avatar />
            <div className="navbar__links">
                <div className="link--btn">
                    <a href="#">Link</a>
                </div>
                <div className="link--btn">
                    <a href="#">Link</a>
                </div>
                <div className="link--btn">
                    <a href="#">Link</a>
                </div>
            </div>
            <div className="navbar__images">
                <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>
                <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=474&q=80"/>
                <img src="https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </div>
        </nav>
    )
}

export default Navbar