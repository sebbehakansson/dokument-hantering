import Link from "next/link";

export default function Header() {
  return (
    <header className="header sticky top-0 bg-blue-900 text-white shadow-md flex items-center justify-between  px-8 py-02 p-8">
      <Link href="/">
        <h1 className="text-4xl">Dokument Hantering</h1>
      </Link>
      <nav>
        <ul className="list-none flex gap-4">
            <Link href="./overview">
                <li>Alla dokument</li>
            </Link>
            <Link href="./newDoc">
                <li>Nytt Dokument</li>
            </Link>
            <Link href="./edit">
                <li>Redigering</li>
            </Link>
            
        </ul>
      </nav>
    </header>
  );
}
