import styles from '@css/components/footer.module.css';
import logo from '@assets/images/logos/footer_logo.svg';
import discord from "@assets/images/icons/discord.svg";
import instagram from "@assets/images/icons/instagram.svg";
import linkedin from "@assets/images/icons/linkedin.svg";
import { Link } from 'react-router-dom';
import { toast } from 'sonner'

function Footer() {
    return (
        <footer id={styles.footer_section}>
            <div id={styles.footer_container}>
                <img id={styles.footer_logo} src={logo} alt="BearHacks 2025 Logo" />
                <div id={styles.footer_content}>
                    <ul id={styles.socials_list}>
                        <li className={styles.social_item}><Link to="https://www.linkedin.com/company/bearhacks/" target='_blank'><img src={linkedin} alt="LinkedIn Page" /></Link></li>
                        <li className={styles.social_item}><Link to="https://www.instagram.com/bear_hacks/" target='_blank'><img src={instagram} alt="Instagram Page" /></Link></li>
                        <li className={styles.social_item}><Link to="https://discord.gg/g4d9A5R9Jc" target='_blank'><img src={discord} alt="Discord Server" /></Link></li>
                    </ul>
                    <p id={styles.code_of_conduct}><Link to="https://drive.google.com/file/d/1hd4oMXKCUGher1Z24KiusJMOdPzLSyBM/view" target='_blank'>Code of Conduct</Link> &copy; BearHacks 2025</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;