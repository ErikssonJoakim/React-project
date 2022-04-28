import React from 'react'
import './header.scss'

type HeaderProps = {
  title: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ title, description }: Readonly<HeaderProps>) => (
  <div className="react-project-header-main">
    <h1 className="title">{title}</h1>
    <p className="content">{description}</p>
  </div>
)

export default Header
