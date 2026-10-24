'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';


const UserInfo = () => {
    const {data: session} = authClient.useSession()
    const user = session?.user
    // console.log(user);

    const handleSignOut = async() =>{
       await authClient.signOut();
    }
    return (
       <div>
           {
            user? <div className='flex flex-col items-center'> 
                  <Image className='rounded-full h-15 w-15' src={user?.image as string} alt='user pic' height={80} width={50}/>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <button onClick={handleSignOut} className='btn bg-red-800 text-white'>Sign Out</button>
            </div> :  <div>
             <Link href={'/signin'}>
               <button className='btn bg-white mx-2'>সাইন ইন</button>
            </Link>
            <Link href={'/signup'}>
                <button className='btn bg-green-800 mx-2 text-white '>সাইন আপ</button>
            </Link>
            </div> 
           }
          
        </div>
    );
};

export default UserInfo;