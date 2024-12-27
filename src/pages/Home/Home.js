import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import NewFeed from '~/components/NewFeed';

import video1 from '~/assets/videos/video1.mp4';
import video2 from '~/assets/videos/video2.mp4';
import video3 from '~/assets/videos/video3.mp4';
import video4 from '~/assets/videos/video4.mp4';
import video5 from '~/assets/videos/video5.mp4';
import video6 from '~/assets/videos/video6.mp4';
import avatar_img from '~/assets/images/user_ava.jpg';

const USER_NEWFEED_CONTENT = [
    {
        avatar_img: avatar_img,
        nickname: 'nguyenhuagiabao',
        check: true,
        full_name: 'Nguyễn Hứa Gia Bảo',
        status: 'Cái sì ta tút này hơi lan man',
        hashtags: ['trending', 'languages', 'happylife', 'fun', 'travelaroundtheworld'],
        music: 'Background music - Một thế giới bằng hai gang tay',
        video_src: video1,
        likes: '765.8K',
        comments: '35.2K',
        bookmarks: '5.2K',
        shares: '45.7K',
    },
    {
        avatar_img: '',
        nickname: 'muaxuansangcohoaanhdao',
        check: false,
        full_name: 'Nguyễn Mai Đào',
        status: 'Status cho năm mới',
        hashtags: ['newyear', '2025', 'christmas', 'cold', 'happy'],
        music: 'Background music - Một cộng một bẳng hai',
        video_src: video2,
        likes: '965.8K',
        comments: '35.2K',
        bookmarks: '5.2K',
        shares: '45.7K',
    },
    {
        avatar_img: avatar_img,
        nickname: 'nguyenhuagiabao',
        check: true,
        full_name: 'Nguyễn Hứa Gia Bảo',
        status: 'Cái sì ta tút này hơi lan man',
        hashtags: ['trending', 'languages', 'happylife', 'fun', 'travelaroundtheworld'],
        music: 'Background music - Một thế giới bằng hai gang tay',
        video_src: video3,
        likes: '765.8K',
        comments: '35.2K',
        bookmarks: '5.2K',
        shares: '45.7K',
    },
    {
        avatar_img: avatar_img,
        nickname: 'nguyenhuagiabao',
        check: true,
        full_name: 'Nguyễn Hứa Gia Bảo',
        status: 'Cái sì ta tút này hơi lan man',
        hashtags: ['trending', 'languages', 'happylife', 'fun', 'travelaroundtheworld'],
        music: 'Background music - Một thế giới bằng hai gang tay',
        video_src: video4,
        likes: '765.8K',
        comments: '35.2K',
        bookmarks: '5.2K',
        shares: '45.7K',
    },
    {
        avatar_img: avatar_img,
        nickname: 'nguyenhuagiabao',
        check: true,
        full_name: 'Nguyễn Hứa Gia Bảo',
        status: 'Cái sì ta tút này hơi lan man',
        hashtags: ['trending', 'languages', 'happylife', 'fun', 'travelaroundtheworld'],
        music: 'Background music - Một thế giới bằng hai gang tay',
        video_src: video5,
        likes: '765.8K',
        comments: '35.2K',
        bookmarks: '5.2K',
        shares: '45.7K',
    },
    {
        avatar_img: avatar_img,
        nickname: 'nguyenhuagiabao',
        check: true,
        full_name: 'Nguyễn Hứa Gia Bảo',
        status: 'Cái sì ta tút này hơi lan man',
        hashtags: ['trending', 'languages', 'happylife', 'fun', 'travelaroundtheworld'],
        music: 'Background music - Một thế giới bằng hai gang tay',
        video_src: video6,
        likes: '765.8K',
        comments: '35.2K',
        bookmarks: '5.2K',
        shares: '45.7K',
    },
];

function Home() {
    const videos = [video1, video2, video3, video4, video5, video6];

    return (
        <div className={clsx(styles.home_wrapper)}>
            {USER_NEWFEED_CONTENT.map((value, index) => {
                return (
                    <NewFeed
                        key={index}
                        avatar_img={value.avatar_img}
                        nickname={value.nickname}
                        check={value.check}
                        full_name={value.full_name}
                        status={value.status}
                        hashtags={value.hashtags}
                        music={value.music}
                        video_src={value.video_src}
                        likes={value.likes}
                        comments={value.comments}
                        bookmarks={value.bookmarks}
                        shares={value.shares}
                    />
                );
            })}
        </div>
    );
}

export default Home;
