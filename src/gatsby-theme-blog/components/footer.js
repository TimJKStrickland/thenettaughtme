import React, { Fragment } from "react"
import { css, Styled, Flex, Box } from "theme-ui"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faGithub, faDev, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

  const data = useStaticQuery(graphql`
  query footerQuery {
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }`);
  
  console.log('data', data)
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
          <Styled.h6 css={css({ mb: `0` })}>
            © {new Date().getFullYear()}, Gatsby powered
          </Styled.h6>
        </Box>
        <Box sx={{ width: [`1/2`, `1/1`] }}>
          {data.site.siteMetadata.social.map((platform, i, arr) => (
            <Fragment key={platform.url}>
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
            </Fragment>
          ))}
        </Box>
      </Flex>
    </Fragment>
  )
}

export default Footer