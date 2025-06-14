import UserInfo from "../userInfo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  if (!users) NotFound();
  return users.map((user) => ({ id: user.id.toString() }));
}

export default async function User({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  
  return (
    <div>
      <main>

          <UserInfo user={user} />
          <Button className="mt-5 text-xl" variant="link">
            <Link href={`/`}>&lt; Back</Link>
          </Button>
        
      </main>
    </div>
  );
}
