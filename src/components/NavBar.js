import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const listLinks = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{/* display an <a> tag for each link here */}
  {listLinks}
  </nav>;
}

export default NavBar;
