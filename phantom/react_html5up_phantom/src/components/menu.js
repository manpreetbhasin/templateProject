import React from 'react'

export default class Menu extends React.Component {
    //TODO: https://stackoverflow.com/questions/60039121/errorrootcode-for-hash-md5-was-not-found-error-in-npm-install
    render() {
        return (
            <nav id="menu">
                <h2>Menu</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="generic.html">Ipsum veroeros</a></li>
                    <li><a href="generic.html">Tempus etiam</a></li>
                    <li><a href="generic.html">Consequat dolor</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
            </nav>
        )
    }
}
