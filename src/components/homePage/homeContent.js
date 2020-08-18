import React, { useEffect } from "react"

//Scroll Behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [countentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  return (
    <HomeContentSection
      ref={countentRef}
      animate={animation}
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
    >
      <Container>
        <Content>
          Great stories dont just happen-- <br />
          they need to be uncovered. And we dig deep to discover the Great
          stories taht lie just below the surface. Dirt under the fingernails
          and all.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
