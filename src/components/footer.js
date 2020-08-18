import React from "react"
import {Container,Flex} from "../styles/globalStyles"
import {FooterNav,FooterContent,FooterSocial} from "../styles/footerStyles"

import {Instagram, Facebook,Vimeo} from "../assets/svg/social-icons"

const Footer=({onCursor})=>{
    return(
        <FooterNav>
            <Container>
                <Flex>
                    <FooterContent>
                        <p>902.315.1234</p>
                        <p>info@org.de</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>strasse 38A</p>
                        <p>Essen, Germany</p>
                    </FooterContent>
                    <FooterSocial>
                        <a onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor} href=""><Instagram/></a>
                        <a onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor} href=""><Facebook/></a>
                        <a onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor} href=""><Vimeo/></a>
                    </FooterSocial>
                </Flex>
            </Container>
        </FooterNav>
    )
}
export default Footer