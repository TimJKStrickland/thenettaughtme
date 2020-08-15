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
          alignItems: 'center',
          justifyContent: 'justify-center',
          paddingTop: `1rem`,
          paddingBottom: `1rem`,
          }) }>
        <Styled.a
        href={ `/` }
          css={ css({
            color: `secondary`,
            textDecoration: `none`,
          })}
        >TIMJK</Styled.a>
        <Styled.a
          href={ `/projects` }
            css={ css({
              paddingLeft: `1rem`,
              marginLeft: `auto`,
              color: `secondary`,
            })}
          >Projects</Styled.a>
        <Styled.a 
          href={ `/posts` }
          css={ css({
            paddingLeft: `1rem`,
            color: `secondary`,
          })}
        >Writings</Styled.a>
        {data.site.siteMetadata.social.map((platform, i, arr) => (
          <Box
            key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              css={css({
                boxSizing: `border-box`,
                paddingLeft: `1rem`,
              })}
            >
              <FontAwesomeIcon
                icon={["fab", `${platform.name}`]}
                css={css({ fontSize: 4 })}
              />
            </Styled.a>
          </Box>
        ))}
      </Flex>
    </header>
  )
}
