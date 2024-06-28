import Post from '../components/Post';

const posts = [
    {
        images: [
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578634/Diversidad%20en%20el%20cine/gznwkdlysyemzwtijemi.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578634/Diversidad%20en%20el%20cine/u5zhqtctjbcfjn4bk5np.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578635/Diversidad%20en%20el%20cine/dtckmruriddpou9ybf50.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578635/Diversidad%20en%20el%20cine/rdpaswzgyrubqskvj1d7.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578637/Diversidad%20en%20el%20cine/etzron35efq0gjfqbgil.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578635/Diversidad%20en%20el%20cine/jy9lj1htsthm2hjmysmh.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578636/Diversidad%20en%20el%20cine/zziq18krnhkvhauic4ba.jpg',
            'https://res.cloudinary.com/daowfatkx/image/upload/v1719578637/Diversidad%20en%20el%20cine/kwz1hquoqklu1hblv3oo.jpg',
        ], url: 'https://www.instagram.com/p/C8UMS7CIhjQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        images:
            [
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719579969/Diversidad%20en%20el%20cine/Queer/eai0mll1mjwtfp04xsxa.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719579970/Diversidad%20en%20el%20cine/Queer/cxua1lqknqvbl6socfmz.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719579970/Diversidad%20en%20el%20cine/Queer/l4bcqs0xzpmo88lbozkq.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719579971/Diversidad%20en%20el%20cine/Queer/ky66xsw3pmfras9lcdeh.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719579971/Diversidad%20en%20el%20cine/Queer/u9nvzte2d3tk1lresgtk.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719579971/Diversidad%20en%20el%20cine/Queer/n9dt0ayc7kfmfkslrgng.jpg',
            ],
        url: 'https://www.instagram.com/p/C8rw1ryotAW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        images:
            [
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719580591/Diversidad%20en%20el%20cine/cwgjdqhrnvea4irjdq0i.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719580592/Diversidad%20en%20el%20cine/ipgekmb5vlepxww3djec.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719580593/Diversidad%20en%20el%20cine/hkdqqyqq4qnaa4trulng.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719580592/Diversidad%20en%20el%20cine/knsxh8tvldr9jsth2yml.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719580593/Diversidad%20en%20el%20cine/r2hgotnmifss9crhrwrd.jpg',
                'https://res.cloudinary.com/daowfatkx/image/upload/v1719580594/Diversidad%20en%20el%20cine/dvi0w4fosr6d02hr6wn7.jpg',
            ],
        url: 'https://www.instagram.com/diversidadenelcine/'
    }
];
const Posts = () => {
    return <div className='carousel-container'>
        {posts.map((post, index) => <Post key={index} post={post} />)}
    </div>
};

export default Posts;
