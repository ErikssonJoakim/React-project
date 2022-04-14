import React from 'react'
import './header.scss'

type HeaderProps = {
    header: string
    description: string
}

const Header: React.FC<HeaderProps> = ({header, description}: HeaderProps) => (
    <div className='react-project-header-main'>
        <h1 className='title'>{header}</h1>
        <p className='content'>{description}</p>
    </div>
)

export default Header