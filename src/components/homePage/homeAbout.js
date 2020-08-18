import React,{useState,useEffect} from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {motion} from 'framer-motion'
import {useGlobalStateContext} from "../../context/globalContext"

//Scroll Behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"

const accordionIds=[
  {
    id:0,
    title:'Pre-production',
    results:[
      'Creative Development',
      'Writing',
      'Story boards',
      'Creative Direction',
      'Location Scouting',
      'Casting'
    ]
  },
  {
    id:1,
    title:'Video-production',
    results:[
      'Creative Development',
      'Writing',
      'Story boards',
      'Creative Direction',
      'Location Scouting',
      'Casting'
    ]
  },
  {
    id:2,
    title:'Post-production',
    results:[
      'Creative Development',
      'Writing',
      'Story boards',
      'Creative Direction',
      'Location Scouting',
      'Casting'
    ]
  },
  {
    id:3,
    title:'Audio post-production',
    results:[
      'Creative Development',
      'Writing',
      'Story boards',
      'Creative Direction',
      'Location Scouting',
      'Casting'
    ]
  },
]

const HomeAbout = ({onCursor}) => {
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
   const[expanded,setExpanded]=useState(0)
  return (
    <HomeAboutSection ref={aboutRef}  animate={animation}
    initial="hidden"
    variants={{
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
      },
      hidden: {
        opacity: 0,
        y: 72,
      },
    }}
  >>
      <Container>
        <Flex alignTop>
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
            {accordionIds.map((details,index)=>(
              <Accordion key={index} details={details} expanded={expanded} setExpanded={setExpanded} onCursor={onCursor}/>
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({details,expanded,setExpanded,onCursor}) => {
  const isOpen=details.id === expanded;
  const[hovered,setHovered]=useState(false)
  const {currentTheme}=useGlobalStateContext()
  return (
    <>
      <AccordionHeader onClick={()=> setExpanded(isOpen===true ? false : details.id)} onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor}
      onHoverStart={()=>setHovered(!hovered)} onHoverEnd={()=>setHovered(!hovered)}
      whileHover={{
        color: currentTheme === "dark" ? "#ffffff" :"#000000"
      }}>
        <AccordionIcon>
          <motion.span
          animate={{rotate:isOpen || hovered ? 0 :45, x:3}}
          transition={{duration:0.2, ease : [0.6,0.05,-0.01,0.9]}}
          ></motion.span>
          <motion.span
          animate={{rotate:isOpen || hovered ?  0 :-45, x:-3}}
          transition={{duration:0.2, ease : [0.6,0.05,-0.01,0.9]}}
          ></motion.span>
         
     
        </AccordionIcon>
       {details.title} 
      </AccordionHeader>
      <AccordionContent key="content" animate={{height : isOpen ? '100%' : "0"}}
      transition={{duration:0.8, ease : [0.6,0.05,-0.01,0.9]}}>
        {details.results.map((result,index)=>(
          <span key={index}>{result}</span>
        ))}
        </AccordionContent>
     
    </>
  )
}

export default HomeAbout
