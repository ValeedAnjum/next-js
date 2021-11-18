import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  const goToHome = () => {
    router.push('/')
  }
  return (
    <nav>
      <div className="logo" style={{cursor:'pointer'}}>
        <Image onClick={goToHome}  src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">
      <a>Home</a>
      </Link>
      <Link href="/about">
      <a>About</a>
      </Link>
      <Link href="/ninjas">
 <a>Ninja Listing</a>
      </Link>
     
    </nav>
);
}
 
export default Navbar;