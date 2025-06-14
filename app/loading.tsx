import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return <div className="flex-col justify-items-center m-24">
    <Skeleton className="h-[20px] w-[100px] rounded-full" />
    <p>Loading...</p>
    </div>;
}
