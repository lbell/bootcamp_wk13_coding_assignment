import React from "react";

export default function NavItem(props) {
  let links = props.links;
  return (
    <li className="nav-item">
      <a href={links.linkURL}>{links.linkName}</a>
    </li>
  );
}
