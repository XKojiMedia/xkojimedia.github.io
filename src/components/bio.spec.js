import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from 'gatsby';

import Bio from "./bio";

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders correctly", () => {
    useStaticQuery.mockReturnValue({
      avatar: {
        childImageSharp: {
          fixed: {
            width: 10,
            height: 10,
            src: '',
            srcSet: '',
          },
        }
      },
      site: {
        siteMetadata: {
          author: {
            name: '',
            summary: '',
          },
          social: {
            twitter: '@handle',
          }
        }
      }
    });
    const tree = renderer
      .create(<Bio />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
