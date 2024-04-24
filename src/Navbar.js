import React from "react"
import logo from './images/logo.svg'
import { Navbaritmes, socialLinks } from "./data";

function Navbar() {
    return (
        <>
            <nav class="navbar">
                <div class="nav-center">
                    <div class="nav-header">
                        <img src={logo} class="nav-logo" alt="backroads" />
                        <button type="button" class="nav-toggle" id="nav-toggle">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <ul class="nav-links" id="nav-link">
                        {Navbaritmes.map((name) => {
                            const {id,url,title}=name;
                            return(
                            <li key={id}>
                                <a href={url} class="nav-links" style={{marginLeft:'10px'}}>{title}</a>
                            </li>);
                        })}
                    </ul>


                    <ul class="nav-icons">
                    {socialLinks.map((name) => {
                            const {id,icon,href}=name;
                            return(
                            <li key={id}>
                                <a href={href} target="_blank" class="nav-icon"><i class={icon}></i></a>
                            </li>);
                        })}
                    </ul>
                </div>
            </nav>
        </>

    )
}


export default Navbar;