import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import worldImg from '../assets/images/world.png';
import heroVideo from '../assets/images/hero-video.webm'
import dreams from '../assets/images/dreams.png'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='base'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-5 '>
      <span className="space">SPACE</span>
                <span className='space__sub'>Is Calling You...</span>
                    <h1 className='text-white'>Let's fly together, your dreams come true at Celestia! Start packing...</h1>
                    <p className='text-white'>Ever looked at the stars and wondered how awezome it would be to see them up-close.<br/> Well, here we are to 
                      fulfill your dreams. We offer the best in class space projects for you to choose from.
                    </p>
                    <div className='hero__subtitle d-flex justify-content-center align-items-center'>
                    <img src={worldImg} alt=""/>   
                    </div>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-indigo-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div>
      
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} autoPlay muted loop alt="" />
              </div>
            
      </div>
      <div className='p-3 bg-indigo-400 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className="counter__wrapper justify-center flex gap-5">
              <div className="counter__box">
                <span>20k+</span>
                <h6>Successful trips</h6>
              </div>
              <div className="counter__box">
                <span>5k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>5+</span>
                <h6>Years of experience</h6>
              </div>
            </div>
            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6 text-white'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-white hover:underline text-center'
            >
              <button className='bg-orange-600 px-5 rounded hover:bg-orange-500'>View all posts</button>
            </Link>
          </div>
        )}
      </div>
      <div className="newsletter__content flex-col ms-5">
                <h2>Subscribe to our Newsletter</h2>
                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn newsletter__btn">Subscribe</button>
                </div>
                <p>Get all the updates and know about new packages as soon as they're released. Stay connected with us to be the first to receive the best offers!</p>
               <span className="newsletter__img ">
                    <img src={dreams} alt="" />
                </span>
            </div>
            
              
    </div>
    
  );
}
