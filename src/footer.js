import React from "react"
import { socialLinks } from "./data";
import { Footeritmes } from "./data";
function Footer(){
    return(
        <>
        <footer class="section footer">
    <ul class="footer-links">
    {Footeritmes.map((name) => {
        const {id,url,title,fCname}=name;
        return(
              <li key={id}>
              <a href={url} class={fCname}>{title}</a>
              </li>
              )})
    }

    </ul>
    <ul class="footer-icons">
    {socialLinks.map((name) => {
      const {id,icon,href}=name;
        return(
         <li key={id}>
         <a href={href} target="_blank" class="footer-icon"><i class={icon}></i></a>
         </li>
         );
         })}
    </ul>
    <p class="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
        </>    
    )
}
export default Footer;