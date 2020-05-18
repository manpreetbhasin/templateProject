import React from 'react'

export default class Footer extends React.Component{
    render(){
        return (
            <footer id="footer">
                <div classname="inner">
                    <section>
                        <h2>Get in touch</h2>
                            <form method="post" action="#">
                                <div classname="field half first">
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </div>
            <div classname="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div classname="field">
            <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
        </div>
        <ul classname="actions">
            <li><input type="submit" defaultValue="Send" classname="special" /></li>
            </ul>
            </form>
            </section>
            <section>
            <h2>Follow</h2>
            <ul classname="icons">
            <li><a href="#" classname="icon style2 fa-twitter"><span classname="label">Twitter</span></a></li>
        <li><a href="#" classname="icon style2 fa-facebook"><span classname="label">Facebook</span></a></li>
        <li><a href="#" classname="icon style2 fa-instagram"><span classname="label">Instagram</span></a></li>
        <li><a href="#" classname="icon style2 fa-dribbble"><span classname="label">Dribbble</span></a></li>
        <li><a href="#" classname="icon style2 fa-github"><span classname="label">GitHub</span></a></li>
        <li><a href="#" classname="icon style2 fa-500px"><span classname="label">500px</span></a></li>
        <li><a href="#" classname="icon style2 fa-phone"><span classname="label">Phone</span></a></li>
        <li><a href="#" classname="icon style2 fa-envelope-o"><span classname="label">Email</span></a></li>
        </ul>
        </section>
        <ul classname="copyright">
            <li>© Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
        </div>
        </footer>)
    }
}
