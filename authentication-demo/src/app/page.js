import AuthForm from '@/components/auth-form';

export default async function Home({searchParams}) {
  const resolvedSearchParams = await searchParams;
  const formMode = resolvedSearchParams.mode || 'login' //if searchParams.mode not present default value would be login
  return <AuthForm mode = {formMode}/>;
}
