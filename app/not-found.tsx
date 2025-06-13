import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex-col justify-items-center m-24">
      <Image src="/404.jpg" alt="404" width="350" height="180" />
      <p>Sorry, something went wrong...</p>
    </div>
  );
}
