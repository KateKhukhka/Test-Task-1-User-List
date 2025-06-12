import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //if (!response) throw new Error("Something went wrong...");
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  console.log(data);
  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  console.log(users);
  return (
    <div>
      <main>
        <h1>Users</h1>
        <div>
          <ul>
            {users &&
              users.map(({ id, username, email }) => (
                <li key={id}>
                  {username}({email})
                </li>
              ))}
          </ul>
          <Button>click a</Button>
        </div>
      </main>
    </div>
  );
};

export default Users;
