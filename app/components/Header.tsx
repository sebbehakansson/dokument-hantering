import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 flex items-center 
    justify-around h-24 bg-cyan-600 text-teal-100"
    >
      <Link href="/">
        <h1 className="text-4xl">Dokument Hantering</h1>
      </Link>
      <nav>
        <ul className="list-none flex gap-4">
            <Link href="./Start">
            </Link>
            <Link href="./overview">
                <li>Alla dokument</li>
            </Link>
            <Link href="./edit">
                <li>Redigering</li>
            </Link>
            
        </ul>
      </nav>
    </header>
  );
}
