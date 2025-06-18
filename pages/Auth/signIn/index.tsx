import React from 'react'
import { useRouter } from 'next/router'
import SignIn from '../../../app/Auth/SignIn';

function SignInPage() {
  const router = useRouter();

  return (
    <div>
      <SignIn switchToRegister={() => router.push('/Auth/register')} />
    </div>
  )
}

export default SignInPage;