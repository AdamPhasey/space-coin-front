import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';

export default function Profile(): JSX.Element {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return  <>{
    user && (
      <div className='flex flex-col items-center text-[2vmax] md:text-[sm]'>
        <Image src={user.picture ?? ''} alt={user.name ?? ''} width={50} height={50}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
    }</>
}

