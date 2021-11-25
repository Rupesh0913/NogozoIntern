import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa' 
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const toggleHome = () => {
    scroll.scrollToTop();
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Help</FooterLinkTitle>
                            <FooterLink to="/">Request book & Place Order</FooterLink>
                            <FooterLink to="/">Cancellation & Return</FooterLink>
                            <FooterLink to="/">Payments and Shipping</FooterLink>
                            <FooterLink to="/">Other</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>NOGOZO</SocialLogo>
                        <WebsiteRights>NOGOZO &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer