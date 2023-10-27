import Link from "next/link";

export default function Home() {
  return (
  <div>
     <h1 className="text-xl font-bold text-center mt-10">Dina dokumenthantering!</h1>
     <p className="text-xl text-center mt-10 ">Sidan där du ka lägga in dina dokument som du inte vet vad du ska göra med!</p>
     <p className="text-xl text-center ">Klicka <Link className="underline hover:text-sky-600" href={"/newDoc"}>här</Link> för att börja skapa nu!</p>
  </div>
   
  )
}
