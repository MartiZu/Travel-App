import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex items-center px-12 p-2 border-b-2 border-b-gray-100 ">
      {/* <Image src="" alt="Dojo" width={100}></Image> */}
      <div className="flex items-center gap-8">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/travels">
          Travels
        </Link>
        <Link className="hover:underline" href="/addTravels">
          <button className="bg-pink-600 py-3 px-8 text-white rounded-2xl">
            Add Travel
          </button>
        </Link>
      </div>
      {/* allows the link to be ready waiting to anothr page, the will be a tag in the inspect page*/}
    </nav>
  );
}
