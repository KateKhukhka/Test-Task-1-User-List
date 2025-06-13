import { Button } from "@/components/ui/button";

const UserInfo = ({ user }) => {
  const { id, name, username, email, address, phone, website, company } = user || {};
  const { street, city } = address || {};

  if (!user) {
    return <p>No information</p>;
  }
  return (
    <div>
      <main>
        <h1>{username}</h1>
        <div id={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {`${street}, ${city}`}</p>
          <p>Website: {website}</p>
          <p>Company: {company}</p>
        </div>
      </main>
    </div>
  );
};

export default UserInfo;
