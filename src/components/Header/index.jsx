import Link from "next/link";
import React from "react";

const Header = () => {
  
  const categories = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contato',
      link: '/contato',
    },
  ]
  const layoutMenu = {
    display: 'inline-block',
    minWidth: '150px',
    fontFamily: 'calibri',
    color: 'black'
  }

  const layoutLink = {
    color: 'black',
    textDecoration: 'none'
  }

  return (
    <nav>
      <ul>
        {categories?.map((category, index) => 
          <li key={index} style={layoutMenu}>
            <Link style={layoutLink} href={category.link}>{category.label}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Header;
