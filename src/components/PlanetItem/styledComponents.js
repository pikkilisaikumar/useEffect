// Style your elements here
import styled from 'styled-components'

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FirstHeading = styled.h1`
  color: white;
  font-family: Roboto;
  font-size: 27px;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`
export const Paragraph = styled.p1`
  color: white;
  font-family: Roboto;
  text-align: center;
`
