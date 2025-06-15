import { IUserInfo } from "../interfaceUser";

export default function UserInfoCard({ user }: { user: IUserInfo }) {
  if (!user) {
    return <p>No information</p>;
  }
  return (
    <>
      <main>
        <h1 className="m-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {user.username}
        </h1>
        <div id={user.id} className="m-5">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Address:</strong> {`${user.address.street}, ${user.address.city}`}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      </main>
    </>
  );
}
