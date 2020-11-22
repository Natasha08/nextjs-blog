import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import {getSortedPostsData} from '../lib/posts'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

function Profile({profile={}}) {
  if (profile.error) return <div>failed to load</div>
  if (!profile.name) return <div>loading...</div>
  return <div>hello {profile.name}!</div>
}

export default function Home({allPostsData, profile}) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <Profile profile={profile} />
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData()
  const profileData = await fetch('http://localhost:3000/api/user')
  const profile = await profileData.json()

  return {
    props: {allPostsData, profile}
  }
}
