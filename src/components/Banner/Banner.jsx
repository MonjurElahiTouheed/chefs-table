import React from 'react';
import banner from '../../assets/images/banner.png';
const Banner = () => {
    return (
        <div
            className="hero relative rounded-3xl"
            style={{
                backgroundImage:
                    `url(${banner})`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-t from-[rgba(21,11,43,0.9)] to-[rgba(21,11,43,0)] rounded-3xl"></div>
            <div className="hero-content px-0 py-[180px] text-neutral-content text-center">
                <div className="max-w-[933px]">
                    <h1 className="text-[52px] font-bold font-lexend leading-[76px]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mt-6 text-lg font-lexend">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className='mt-10 flex justify-center gap-6'>
                        <button className="btn border-none bg-[#0BE58A] text-xl text-[#150B2B] font-semibold font-lexend px-[30px] py-[30px] rounded-[50px]">Explore Now</button>
                        <button className="btn border-white bg-transparent text-xl text-white font-semibold font-lexend px-[30px] py-[30px] rounded-[50px]">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;