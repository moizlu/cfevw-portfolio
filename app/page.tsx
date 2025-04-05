import Link from "next/link";

export default function Home() {
  return (<>
    <h1>Welcome to cfevw's page!</h1>
    <div>
      <Link href="/links">My Links</Link>
    </div>
  </>);
}
