import { Outlet } from 'react-router-dom'
import { Header } from '../../Header/index'
import { LayoutContainer } from './styles'

export function DefaulLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
