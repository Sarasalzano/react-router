export default function NavBar(){
    const navItems = ["HOMEPAGE", "CHI SIAMO", "PRODOTTI"];

    return(
        <nav>
            <ul>
            {navItems.map(navItem => (
                <li key={index}>{navItem}</li>
            ))}
            </ul>
        </nav>
    )
}