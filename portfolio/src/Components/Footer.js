import React from 'react';
import "../App.css";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="font-weight-bold footer-copyright text-center py-3 footer fixed-bottom">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/prashantpaddune" target="_blank"> Prashant Paddune </a>
                </div>
            </footer>
        )
    }
}


export default Footer;
