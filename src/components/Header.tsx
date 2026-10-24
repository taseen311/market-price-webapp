import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';
import Marquee from './Marquee';
import Link from 'next/link';
import UserInfo from './UserInfo';

const Header = () => {

    const date = new Date().toLocaleDateString('bn-BD',
        {
            dateStyle: "full"
        }
    )

    return (
      <header>
         <div className='flex items-center justify-between max-w-7xl mx-50 my-5'>
         <div className='flex items-center gap-3'>
            <Image className=' rounded-2xl bg-amber-200 p-2' height={50} width={50} src={'/logo-icon.png'} alt='bazar-logo'></Image>
            <div>
                  <Link href={'/'}> <h2 className='text-2xl font-bold'>বাজার দর</h2></Link>
            <p className='text-gray-400 font-bold'>{date}</p>
            </div>
        </div>
        <UserInfo/>

       </div>
       <Navlinks/>
       <Marquee/>
      </header>
    );
};

export default Header;