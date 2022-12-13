import Image from "next/image";
import { supabase } from "../lib";

export default async function Home() {
  const { data: posts } = await supabase.from("posts").select();

  return (
    <div className="bg-blue-900">
      <main>
        <h1 className="font-nunito">
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className="font-josefin">
          Get started by editing <code>app/page.tsx</code>
        </p>

        <div>
          <a href="https://beta.nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
