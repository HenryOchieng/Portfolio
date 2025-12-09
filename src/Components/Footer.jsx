export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {props.name}. All rights reserved</p>
                <p className="footer__caption">Designed & Built by {props.name}</p>
            </div>
        </footer>
    )
}