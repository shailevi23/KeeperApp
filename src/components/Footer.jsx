import React from 'react';

function Footer() {
    let newDate = new Date();
    let year = newDate.getFullYear();
    return (
        <footer>
        <p>copyright <span>&#169;</span> {year}</p>
        </footer>
    );
}

export default Footer;