import AuthorIntro from 'components/AuthorIntro'
import PageLayout from 'components/PageLayout'
import CardItem from 'components/CardItem'
import CardListItem from 'components/CardListItem'
import { Row, Col } from 'react-bootstrap'

import { getAllBlogs } from 'lib/api'

const Home = ({ blogs }) => {
  // debugger
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />

      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs && blogs.map((blog) => (

          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
              link={{
                href: '/blogs/[slug]',
                as: `/blogs/${blog.slug}`
              }}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}

export default Home

export async function getStaticProps() {

  const blogs = await getAllBlogs()
  return {
    props: {
      blogs
    }
  }
}