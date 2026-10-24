
'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className="shrink-0">
            {
                user ? (
                    <div className='flex flex-col items-center gap-1 max-w-[150px] sm:max-w-[200px]'>
                        <Link href={'/profile'}>
                            <Image
                                className='rounded-full h-10 w-10 sm:h-15 sm:w-15 object-cover'
                                src={user?.image as string}
                                alt='user pic'
                                height={80}
                                width={50}
                            />
                        </Link>

                        <h2 className="text-xs sm:text-sm font-bold text-center break-words max-w-full">
                            {user.name}
                        </h2>

                        <h2 className="text-[10px] sm:text-xs text-center break-all max-w-full">
                            {user.email}
                        </h2>

                        <button
                            onClick={handleSignOut}
                            className='btn btn-sm sm:btn-md bg-red-800 text-white'
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <Link href={'/signin'}>
                            <button className='btn btn-sm sm:btn-md bg-white w-full sm:w-auto'>
                                সাইন ইন
                            </button>
                        </Link>

                        <Link href={'/signup'}>
                            <button className='btn btn-sm sm:btn-md bg-green-800 text-white w-full sm:w-auto'>
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default UserInfo;
