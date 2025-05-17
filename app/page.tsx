import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <div className="text-3xl m-3">Welcome to cfevw's page!</div>
      <div>
        <Link href="/links">&gt; Links &lt;</Link>
      </div>
    </div>
  );
}
