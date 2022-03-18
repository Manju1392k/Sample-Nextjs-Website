import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Photo from '../public/nextjsphoto.png'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Sample</title>
        <meta name="description" content="Sample Website is a just simple website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
      <nav className={styles.navbar}>

        <div className={styles.fontlogo}>
          <h1>FSDEV
          </h1>
        </div>

        <div className={styles.links}>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Projects</a>
        </div>

      </nav>

      {/* main content */}
      <main>
        <div className={styles.backbox}>
          <div className="ImageGif">
            <Image
              src={Photo}
              alt="Picture of the author"
              width={500}
              height={400}
            />
          </div>

          <div className={styles.infobox}>
            <h3>
              To effectively use Next.js, it helps to be familiar with JavaScript, React, and related web development concepts. But JavaScript and React are vast topics. How do you know when you’re ready to learn Next.js?
              Welcome to the Next.js Foundations course! This beginner-friendly, example-led course will guide you through the prerequisite knowledge for Next.js. You will build a simple project step-by-step; starting with a JavaScript application, then migrating it to React and Next.js.
              Each section builds on the previous one, so you can choose where to start depending on what you already know.
              Next.js is a flexible React framework that gives you building blocks to create fast web applications.
              But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.
            </h3>
          </div>
        </div>
      </main>


    </div>


  )
}
