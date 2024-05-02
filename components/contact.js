import Image from 'next/image'
import styles from './contact.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export default function Contact() {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.container}`}>
            <h2 className={utilStyles.headingLg}>Reach me out</h2>
            <div className={styles.iconsContainer}>
                <Link href={'mailto:pdimarco97@gmail.com'} target='_blank'>
                    <Image width={40} height={40} src={'/icons/email.png'}></Image>
                </Link>
                <Link href={'https://www.linkedin.com/in/pedro-di-marco/'} target='_blank'>
                    <Image width={40} height={40} src={'/icons/linkedin-1.png'}></Image>
                </Link>
                <Link href={'https://github.com/pedrodimarco'} target='_blank'>
                    <Image width={40} height={40} src={'/icons/github-1.png'}></Image>
                </Link>
            </div>
        </section>
    )
}