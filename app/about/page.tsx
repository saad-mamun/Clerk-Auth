"use client"
import { useUser } from '@clerk/nextjs'
const page = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if(!isLoaded){
    return <div>Loading...</div>
  } 
  if (!isSignedIn) {
    return <div>Please sign in to view this page.</div>
  }

  return (
    <div>
      <h1 className="text-center font-bold py-5 px-5">About Page</h1>
      {user && (
        <div className="text-center">
          <p>Welcome, {user.firstName} {user.lastName}!</p>
        </div>
      )}
    </div>
  )
}

export default page
