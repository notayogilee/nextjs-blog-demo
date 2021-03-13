import PageLayout from 'components/PageLayout'
import BlogHeader from 'components/BlogHeader'
import { getBlogBySlug, getAllBlogs } from 'lib/api'
import { Row, Col } from 'react-bootstrap'
import BlogContent from 'components/BlogContent'

const BlogDetail = ({ blog: { title, subtitle, coverImage, date, author, content } }) => {

  // debugger
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={title}
            subtitle={subtitle}
            coverImage={coverImage}
            date={date}
            author={author}
          />
          <hr />
          <BlogContent
            content={content}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug)
  return {
    props: { blog }
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs()

  return {
    paths: blogs?.map(blog => ({ params: { slug: blog.slug } })),
    fallback: false
  }
}

export default BlogDetail