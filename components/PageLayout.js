import { Container } from 'react-bootstrap'
import Navbar from 'components/BlogNavbar'
import Footer from 'components/Footer'

const PageLayout = ({ children, className }) => {
  return (
    <Container>
      <Navbar />
      <div className={`page-wrapper ${className}`}>
        {children}
      </div>
      <Footer />
    </Container>
  )
}

export default PageLayout
