import { Link, useLocation } from 'react-router-dom';
export default function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <>
        <div>
        <div className='flex main'>
        <h1 className='name'>DELVIN</h1>
            <nav className='nav'>
            
                <ul className='container flex'>
                    
                    <li className='navigation'>
                        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}> About Me </Link>
                    </li>
                    <li className='navigation'>
                        <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio </Link>
                    </li>
                    <li className='navigation'>
                        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}> Contact </Link>
                    </li>
                    <li className='navigation'>
                        <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}> Resume </Link>
                    </li>
                </ul>
            </nav>
            </div>
            </div>
        </>
    );
}

