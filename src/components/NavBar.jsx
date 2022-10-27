import React from "react";
import NavItem from "./NavItem";

// Setting up some dummy nav items to pass along.
let navItems = [
  { linkName: "Link1", linkURL: "url1" },
  { linkName: "Link2", linkURL: "url2" },
  { linkName: "Link3", linkURL: "url3" },
];

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => {
          // Map loops through the navItems array and spits out calls to build
          // NavItem children:
          return <NavItem key={index} links={item} />;
        })}
      </ul>
    </div>
  );
}
