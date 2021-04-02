import React, { Fragment } from "react"
import { css, Styled, Flex, Box } from "theme-ui"
import Bio from "./bio"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faGithub, faDev, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"

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
    <Fragment>
      <Flex
        sx={{
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <Box sx={{ width: [`1/2`, `1/1`] }}>
          <Bio />
          <Box 
          css={css({
              display: `flex`,
              flexDirection: `row`
            })}>
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
        </Box>
          <Styled.h6 css={css({ mb: `0` })}>
            © {new Date().getFullYear()} TNTM
          </Styled.h6>
        </Box>
      </Flex>
    </Fragment>
  )
}