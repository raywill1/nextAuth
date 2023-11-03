
import { authOptions } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Card from './components/Card';


export default async function Home() {
    
      const session = await getServerSession(authOptions);

  return (
    <>
    {session ?(
   <div className=' flex justify-center  bg-black h-screen text-white'>
    <Card  user ={ session?.user} />
   </div>
   ):(<h2 className='text-3xl'> {  JSON.stringify(session)} </h2>)
  }
  </>
  )
}
