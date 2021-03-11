import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

function Index({ stars }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/headless">
        <a>GO posts</a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Index