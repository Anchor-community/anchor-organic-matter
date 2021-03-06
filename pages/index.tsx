import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as styled from '@emotion/react'

const styles = {
  container: styled.css`
    padding: 0 2rem;
  `,
  main: styled.css`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  footer: styled.css`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
  `,
  title: styled.css`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    a {
      color: #0070f3;
      text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
      text-decoration: underline;
    }
  `,
  description: styled.css`
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  `,
  text: styled.css`
    text-align: center;
  `,
  code: styled.css`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  `,
  grid: styled.css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
    }
  `,
  card: styled.css`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    :hover,
    :focus,
    :active {
      color: #0070f3;
      border-color: #0070f3;
    }
    h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  `,
  logo: styled.css`
    height: 1em;
    margin-left: 0.5rem;
  `,
}

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={styles.main}>
        <h1 css={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p css={styles.description}>
          Get started by editing <code css={styles.code}>pages/index.tsx</code>
        </p>

        <div css={styles.grid}>
          <a href="https://nextjs.org/docs" css={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" css={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            css={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            css={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer css={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span css={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
