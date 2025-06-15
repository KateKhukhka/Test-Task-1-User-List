import NotFound from "@/app/not-found";
import UserInfoCard from "../userInfo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//получение данных о каждом пользователе по id
export default async function User({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  //проверка получения данных от сервера
  if (!res.ok) {
    return NotFound();
  }
  const user = await res.json();

  return (
    <div>
      <UserInfoCard user={user} />
      <Button className="mt-5 text-xl" variant="link">
        <Link href={`/`}>&lt; Back</Link>
      </Button>
    </div>
  );
}
