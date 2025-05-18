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
      <table className="text-center m-auto b-w">
        <tbody>
          {LINKS.map((link, i) => {
            return (<tr key={i} className="border-b border-gray-600"><td className="py-3 px-6 bg-gray-700 text-white uppercase text-sm leading-normal">{link.name}</td><td className="py-3 px-6 hover:bg-gray-600 underline"><a href={link.identity_url}>{link.identity}</a></td></tr>);
          })}
        </tbody>
      </table>
      <div>
        Back to <Link href="/" className="underline">Home</Link>
      </div>
    </div>
  );
}
