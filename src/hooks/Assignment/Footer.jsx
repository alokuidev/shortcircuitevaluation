export const Footer = ({count}) =>{
    return(
        <footer className="footer">
            <p>Current Counter Value: <span id="footer-counter-value">{count}</span></p>
        </footer>
    )
}