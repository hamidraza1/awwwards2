import React from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"

const HomeAbout = () => {
  return (
    <HomeAboutSection>
      <Container>
        <Flex>
          <About>
            <h2>
              Hurrow is an integrated full service creative studio offering
              video production, creative development and post production
              services
            </h2>
            <p>
              Everybody got a story and we dont stop untill we have uncovered
              what makes urs worth telling. Whether its working directly with
              you, an agency partner, or putting the finishing touches on
              something, we are ready to dig in and get our hands dirty-are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            <Accordion />
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = () => {
  return (
    <>
      <AccordionHeader>
        <AccordionIcon>
          <span></span>
          <span></span>
          Hello Youtube
        </AccordionIcon>
        <AccordionContent>
          <span>Kimi</span>
          <span>Lewis</span>
          <span>Leclere</span>
        </AccordionContent>
      </AccordionHeader>
    </>
  )
}

export default HomeAbout
