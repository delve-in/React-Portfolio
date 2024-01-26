import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" classname={currentPage === '/' ? 'nav-link active' : 'nav-link'}> About Me </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio" classname={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio </Link>
                    </li>
                    <li>
                        <Link to="/Contact" classname={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}> Contact </Link>
                    </li>
                    <li>
                        <Link to="/Resume" classname={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}> Resume </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

