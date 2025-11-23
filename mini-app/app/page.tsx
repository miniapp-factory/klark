import { generateMetadata } from "@/lib/farcaster-embed";
import Link from "next/link";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <Link href="/create-poll" className="px-4 py-2 bg-blue-500 text-white rounded">
        Create Poll
      </Link>
    </main>
  );
}
