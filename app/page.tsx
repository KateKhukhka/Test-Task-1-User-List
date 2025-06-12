import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  //получение данных от сервера
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  if (!response) {
    throw new Error("Something went wrong...");
  }

  return (
    <div>
      <main>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">User List</h1>
        <div className="m-5 grid grid-cols-3 gap-4">
          {users.map((user) => (
            <Card className="w-full max-w-sm" key={user.id}>
              <CardHeader>
                <CardTitle>{user.username}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
                <CardAction>
                  <Button variant="link">More info...</Button>
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
