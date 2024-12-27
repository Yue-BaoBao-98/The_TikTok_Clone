import clsx from 'clsx';

import styles from './Footer.module.scss';

function SidebarFooter() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.footer_links)}>
                <a className={clsx(styles.footer_link)} href="/">
                    About
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Newsroom
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Contact
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Careers
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    ByteDance
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Advertise
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Developers
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Transparency
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    TikTok Rewards
                </a>
            </div>

            <div className={clsx(styles.footer_links)}>
                <a className={clsx(styles.footer_link)} href="/">
                    Help
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Safety
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Terms
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Privacy
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Creator portal
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Community
                </a>
                <a className={clsx(styles.footer_link)} href="/">
                    Guidelines
                </a>
            </div>

            <div className={clsx(styles.footer_copyright)}>
                <span className={clsx(styles.copyright_label)}>© 2024 TikTok</span>
            </div>
        </div>
    );
}

export default SidebarFooter;
