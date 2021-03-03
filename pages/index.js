import AuthorIntro from 'components/AuthorIntro'
import PageLayout from 'components/PageLayout'
import CardItem from 'components/CardItem'
import CardListItem from 'components/CardListItem'
import { Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  )
}

export default Home