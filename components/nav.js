import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Live</a>
        </Link>
      </li>
      <li>
        <Link href="/recordings">
          <a>Recordings</a>
        </Link>
      </li>
    </ul>
  );
}
