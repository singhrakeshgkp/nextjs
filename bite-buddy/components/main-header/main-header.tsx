'use client'
import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import MainHeaderBackground from './main-header-background'
import classes from './main-header.module.css'
export default function MainHeader(){
    const path = usePathname();
    return (

<>
    <MainHeaderBackground></MainHeaderBackground>
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
        {/* <img src={logoImg.src} alt="A plat with food in it"></img> */}
        <Image src = {logoImg} alt= "logo for this site" priority/>
        Next level food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals" className= {path.endsWith('/meals') ? classes.active : undefined}>Meals</Link>
                </li>
                <li>
                    <Link href="/meals/share" className= {path.endsWith('/share') ? classes.active : undefined}>Share Meal</Link>
                </li>
                <li>
                    <Link href="/community" className= {path.startsWith('/community') ? classes.active : undefined}>Community</Link>
                </li>
            </ul>
        </nav>
    </header>
</>
)
}