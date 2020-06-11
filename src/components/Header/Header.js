import React from 'react'

// import { Link, animateScroll as scroll } from 'react-scroll'

import './Header.scss';
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const Header = () => {
  return (
    <header className="headerArea headerSticky">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="mainNav"></div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header