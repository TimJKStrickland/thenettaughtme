import React from "react"
import { css, Styled, Box, Flex } from "theme-ui"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faGithub, faDev, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql, Link } from "gatsby"

export default ({ children, title, ...props }) => {
  const data = useStaticQuery(graphql`
  query socialQuery {
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }`);

  library.add(fab, faGithub, faDev, faCodepen)

  return (
    <header css={css({
      maxWidth:`960px`,
      mx: `auto`
    })}>
      <Flex
        css={ css({
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          paddingTop: `1rem`,
          paddingBottom: `1rem`,
          }) }>
        <Styled.a 
          href={ `/posts` }
          css={ css({
            paddingLeft: `0.5rem`,
            paddingRight: `0.5rem`,
            color: `currentColor`,
          })}
        >Writings</Styled.a>
        <Styled.a
          href={ `/projects` }
            css={ css({
              paddingLeft: `0.5rem`,
              paddingRight: `0.5rem`,
              color: `currentColor`,
            })}
          >Projects</Styled.a>
        {data.site.siteMetadata.social.map((platform, i, arr) => (
          <Box
            key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", `${platform.name}`]}
                css={css({
                  ml: 1,
                  fontSize: 4,
                })}
              />
            </Styled.a>
          </Box>
        ))}
      </Flex>
    </header>
  )
}
