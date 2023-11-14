'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'; // use client is used w=becoz we need to use hook

export default function Home() {
  const router = useRouter();
  console.log("Env variables", process.env.SERVER_PASSWORD);
  return (
    <main> 
       {/* className={styles.main} */}
       {/* Added Static Image from public folder */}
       {process.env.NODE_ENV == "development"? <h1>Dev Mode</h1>:<h1>Production mode</h1>}
       <img src = "/dummy-image.png"/>
      <div className={styles.description}>
        <Link href = "/login">Go to Login Page</Link>
        <button onClick = {()=> router.push("/login")}>Nav to login page</button>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}