export default function Navbar() {
    return (
        <div className="nav">
            <i className="ri-menu-fill" onClick={() => gsap.to('.menu', { height: '100vh' })}></i>
            <h3>Discord</h3>
            <h3>Bots</h3>
        </div>
    )
}