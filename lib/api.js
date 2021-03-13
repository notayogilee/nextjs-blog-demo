import client from './sanity'

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url,
`

export async function getAllBlogs() {
  const res = await client
    .fetch(`*[_type == "blog"]{${blogFields}}`)
  return res
}

export async function getBlogBySlug(slug) {
  const res = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`, { slug })
    .then(res => res?.[0])

  return res
}