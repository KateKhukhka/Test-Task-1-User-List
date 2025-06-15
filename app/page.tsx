import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import NotFound from "./not-found";
//импорт интерфейса пользователя
import IUser from "./interfaceUser";

//получение данных всех пользователей от сервера
export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //если данные не получены
  if (!response.ok) {
    return NotFound();
  }
  const users = await response.json();
  return users;
}

export default async function Home() {
  //проверка типа данных в соответствиии с интерфейсом
  const users: IUser[] = await getUsers();

  return (
    <div>
      <main>
        <h1 className="m-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">User List</h1>
        <div className="m-5 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <Card className="w-full max-w-sm" key={user.id}>
              <CardHeader>
                <CardTitle>{user.username}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
                <CardAction>
                  <Button variant="link">
                    <Link href={`/user/${user.id}`}>More info...</Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>{user.company.name}</CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
