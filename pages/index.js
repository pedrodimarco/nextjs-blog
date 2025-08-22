import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Contact from "../components/contact";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! My name is Pedro, I'm from Uruguay, and I'm a Web Developer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tech stack</h2>
        <ul className={homeStyles.techStackList}>
          <li className={utilStyles.listItem}>
            <Image src="/icons/react.png" width={100} height={100} />
            <p>React</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/nextjs.png" width={100} height={100} />
            <p>NextJs</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/js.png" width={100} height={100} />
            <p>JavaScript</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/typescript.png" width={100} height={100} />
            <p>TypeScript</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/node-js.png" width={100} height={100} />
            <p>NodeJs</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/express.png" width={100} height={100} />
            <p>Express</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/mongodb.png" width={100} height={100} />
            <p>MongoDB</p>
          </li>
          <li className={utilStyles.listItem}>
            <Image src="/icons/postgre.png" width={100} height={100} />
            <p>PostgreSQL</p>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`https://www.entrematesteconte.com`} target="_blank">
              Entre mates te conté
            </Link>
            <br />
            <small className={utilStyles.lightText}>Blog site</small>
          </li>
          <li className={utilStyles.listItem}>
            <Link
              href={`https://pedrodimarco.github.io/Workspace_inicial1/index.html`}
              target="_blank"
            >
              e-Mercado
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              "Jóvenes a Programar" project
            </small>
          </li>
        </ul>
      </section>
      <Contact></Contact>
    </Layout>
  );
}
