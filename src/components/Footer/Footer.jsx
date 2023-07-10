import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import "./Footer.scss"

const Footer = () => {

    const [openSection, setOpenSection] = useState({
        categories: false,
        links: false,
        contact: false,
        about: false
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 720px)' })

    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-section categories'>
                    <div className='section-settings' onClick={() => isTabletOrMobile ? setOpenSection(prevState => { return ({ ...prevState, categories: !prevState.categories }) }) : setOpenSection(prevState => { return ({ ...prevState, categories: true }) })}>
                        <h1 className='section-title'>Categories</h1>
                        {openSection.categories === false ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
                    </div>
                    <div style={openSection.categories === false && isTabletOrMobile ? { display: "none" } : { display: "flex", flexDirection: "column" }}>
                        <span>Collection</span>
                        <span>New</span>
                        <span>Girl</span>
                        <span>Boy</span>
                        <span>Accessories</span>
                    </div>
                </div>
                <div className='footer-section links' >
                    <div className='section-settings' onClick={() => isTabletOrMobile ? setOpenSection(prevState => { return ({ ...prevState, links: !prevState.links }) }) : setOpenSection(prevState => { return ({ ...prevState, links: true }) })}>
                        <h1 className='section-title'>Links</h1>
                        {openSection.links === false ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
                    </div>
                    <div style={openSection.links === false && isTabletOrMobile ? { display: "none" } : { display: "flex", flexDirection: "column" }}>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Stores</span>
                        <span>Cookies</span>
                    </div>
                </div>
                <div className='footer-section contact' >
                    <div className='section-settings' onClick={() => isTabletOrMobile ? setOpenSection(prevState => { return ({ ...prevState, contact: !prevState.contact }) }) : setOpenSection(prevState => { return ({ ...prevState, contact: true }) })}>
                        <h1 className='section-title'>Contact</h1>
                        {openSection.contact === false ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
                    </div>
                    <div style={openSection.contact === false && isTabletOrMobile ? { display: "none" } : { display: "flex", flexDirection: "column" }}>
                        <span>+123 756 9736</span>
                        <span>shop@email.com</span>
                        <span>This street, That City, Country</span>
                    </div>
                </div>
                <div className='footer-section about'>
                    <div className='section-settings' onClick={() => isTabletOrMobile ? setOpenSection(prevState => { return ({ ...prevState, about: !prevState.about }) }) : setOpenSection(prevState => { return ({ ...prevState, about: true }) })}>
                        <h1 className='section-title'>About</h1>
                        {openSection.about === false ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
                    </div>
                    <div style={openSection.about === false && isTabletOrMobile ? { display: "none" } : { display: "flex", flexDirection: "column" }}>
                        littlefeet is a high-end clothing store that offers everything from casual basics to luxurious statement pieces. If you’re looking for an elegant yet bold look, this is your go-to spot for quality pieces that will stand out.
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='company-info'>
                    <span>littlefeet </span>
                    <span>@ Copyright 2023. All rights reserved</span>
                </div>
                <div className='payment-methods'>
                    <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                    <i class="fa-brands fa-cc-stripe"></i>
                    <i class="fa-brands fa-cc-paypal"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer