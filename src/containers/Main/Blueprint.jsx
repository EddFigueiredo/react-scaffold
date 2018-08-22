import styled from 'styled-components'
import { screen } from 'core/utils/theme'

export const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 2.81rem 1fr;
  grid-template-columns: 12.5rem 1fr;
`

export const Header = styled.div`
  grid-column: 1/-1;
  grid-row: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .16);
`

export const Nav = styled.aside`
  grid-row: 2;
  grid-column: 1;
  background-color: #213e48;

  ${screen.desktop`
    width: 4rem;
  `}
`

export const Content = styled.div`
  grid-row: 2;
  grid-column: 2;
`