import {
  
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div>
      <header className="container mx-auto flex justify-between items-center p-4 gap-4 h-16">
        {/* Show the sign-in and sign-up buttons when the user is signed out */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Clerk Template</h1>
        </div>
        <div className="flex items-center gap-x-10">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-green-700 text-white rounded-xl font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <ul className="flex items-center justify-center gap-x-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
