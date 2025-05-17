import Link from "next/link";

export default function About() {
  const LINKS = [
    {
      "name": "Discord",
      "icon_url": "",
      "identity": "cfevw",
      "identity_url": "https://discord.com/app",
    },
    {
      "name": "GitHub",
      "icon_url": "",
      "identity": "cfevw",
      "identity_url": "https://github.com/cfevw",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl m-3">cfevw's Links</h1>
      <table className="text-center">
        <tbody>
          {LINKS.map((link, i) => {
            return (<tr key={i}><td>{link.name}</td><td><a href={link.identity_url}>{link.identity}</a></td></tr>);
          })}
        </tbody>
      </table>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  );
}
