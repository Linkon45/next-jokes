import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <ul>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/jokes">
            <a>Jokes</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
