import logo from "@/assets/logo.png"
import Image from "next/image"
import Container from "./Container"
import Link from "next/link"

export default function Navbar() {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 ">
        {/* logo */}
        <Image src={logo} alt="logo"  className="w-auto h-auto max-w-[300px] max-h-[150px]" />
        {/* contact email */}
        <div className='flex gap-x-2 lg:text-lg text-sm md:text-base'>
           <span className="font-medium line-clamp-1"> Contact Email: </span> <Link href="mailto:huemanexpressions@gmail"> huemanexpressions@gmail.com </Link>
        </div>
    </Container>
  )
}
