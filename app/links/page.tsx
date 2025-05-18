import Link from "next/link";
import Image from "next/image";

export default function About() {
  const LINKS = [
    {
      "name": "Discord",
      "icon_url": "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg",
      "identity": "cfevw",
      "identity_url": "https://discord.com/users/724148153938477087",
    },
    {
      "name": "GitHub",
      "icon_url": "https://github.githubassets.com/favicons/favicon-dark.svg",
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
            return (
              <tr key={i} className="border border-gray-600">
                <td className="py-3 px-6 bg-gray-700 text-white uppercase text-sm leading-normal">
                    {link.icon_url ? (
                      <Image
                        src={link.icon_url}
                        alt={`${link.name} icon`}
                        width={20}
                        height={20}
                        style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}
                      />
                    ) : null}
                    {link.name}
                </td>
                <td className="py-3 px-6 hover:bg-gray-600 underline">
                  <a href={link.identity_url}>
                    {link.identity}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        Back to <Link href="/" className="underline">Home</Link>
      </div>
    </div>
  );
}
