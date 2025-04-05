import Link from "next/link";

export default function About() {
  const LINKS = [
    {
      "name": "Discord",
      "icon_url": "",
      "identity": "cfevw",
      "identity_url": "https://dicord.com/app",
    }
  ];

  return (
    <>
      <h1>cfevw's Links</h1>
      <table><tbody>
        {LINKS.map((link) => {
          return (<tr><td>{link.name}</td><td>{link.identity}</td></tr>);
        })}
      </tbody></table>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
