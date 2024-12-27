import clsx from 'clsx';
import { useState } from 'react';

import styles from './SideBar.module.scss';
import config from '~/config';
import SideBarMenu, { SideBarMenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    GroupPeopleIcon,
    GroupPeopleActiveIcon,
    LiveStreamIcon,
    LiveStreamActiveIcon,
} from '~/components/Icons';

import SuggestedFollowingAccounts from '~/components/SuggestedFollowingAccounts';
import Discover from './Discover';
import SidebarFooter from './Footer';

function SideBar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <SideBarMenu>
                <SideBarMenuItem
                    title="For you"
                    to={config.routesConfig.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></SideBarMenuItem>

                <SideBarMenuItem
                    title="Following"
                    to={config.routesConfig.following}
                    icon={<GroupPeopleIcon />}
                    activeIcon={<GroupPeopleActiveIcon />}
                ></SideBarMenuItem>

                <SideBarMenuItem
                    title="LIVE"
                    to={config.routesConfig.live}
                    icon={<LiveStreamIcon />}
                    activeIcon={<LiveStreamActiveIcon />}
                ></SideBarMenuItem>
            </SideBarMenu>

            <SuggestedFollowingAccounts label="Suggested accounts" />
            <SuggestedFollowingAccounts label="Following accounts" />

            <Discover label="Discover" />
            <SidebarFooter />
        </aside>
    );
}

export default SideBar;
