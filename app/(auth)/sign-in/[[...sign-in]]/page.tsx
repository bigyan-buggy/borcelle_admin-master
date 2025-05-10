import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Sign-In/Sign-Up</h1>
      <SignIn />
    </div>
  );
}