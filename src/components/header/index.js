import Link from "next/link"
import ProfileBar from "../profile-bar"
import Basket from "../basket"


const Header = () => {
  return (
    <header>
      <Link href="/">Logo</Link>
      <ProfileBar />
      <Basket />
    </header>
  )
}

export default Header