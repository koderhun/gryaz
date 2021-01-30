import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, About, AboutProject, Contact } from '../pages'
import { Container } from '../utils/styled'

export const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/aboutProject" component={AboutProject} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Container>
  )
}
