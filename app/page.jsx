import React from 'react';
import Feed from '@/components/Feed';

// Home page
// the _ means that it is our own styling coming from styles/globals.css
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden' />
            <span className='orange_gradient text-center'> AI Powered Prompts </span>
        </h1>
        <p className='desc text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nesciunt fugit impedit ipsum adipisci voluptates illum aliquam perferendis, sint possimus dignissimos error amet ipsa molestias sit? 
        </p>

        <Feed/>
    </section>
  )
}

export default Home