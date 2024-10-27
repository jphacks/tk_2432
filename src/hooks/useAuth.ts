import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const expiry = sessionStorage.getItem('token_expiry');

    if (!token || (expiry && new Date().getTime() > Number(expiry))) {
      // トークンがない、または期限切れの場合はリダイレクト
      router.push('/login');
    }
  }, [router]);
};

export default useAuth;
