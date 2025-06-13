import UserInfo from "@/app/userInfo";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user) => ({ id: user.id.toString() }));
}

export default async function User({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  console.log(user);

  return (
    <div>
      <main>
        <h1>{user.username}</h1>
        <div id={id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {`${user.street}, ${user.city}`}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
      </main>
    </div>
  );
}
