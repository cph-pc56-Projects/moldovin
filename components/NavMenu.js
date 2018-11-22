import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import Link from 'next/link';
import bootsrapUtils from 'react-bootstrap/lib/utils/bootstrapUtils'
// bootsrapUtils.addStyle(Navbar, 'custom');



const Navmenu = () => {
    return (
        <div>
        <style jsx>{`
            background-color: #404040
        `}</style>
            <Navbar collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor: "#404040"}}>
                <Navbar.Brand style={{backgroundColor: "#404040"}}>
                    <Link href='/'>
                        <a>M o l d o <span style={{color: '#EE4040'}}>V i n</span></a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: "#404040"}}/>
                <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor: "#404040"}}>
                    <Nav className="mr-auto">
                        <Link href='/products'>
                            <Nav.Link href="#pricing">Products</Nav.Link>
                        </Link>
                    </Nav>                    
                </Navbar.Collapse>
            </Navbar>
            <style jsx>{`
                a {
                    text-decoration: none;
                    color: white;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </div>
    )
}

export default Navmenu;