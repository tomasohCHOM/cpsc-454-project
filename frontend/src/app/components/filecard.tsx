import Image from "next/image";

export default function Filecard({
  name,
  size,
}: {
  name: string;
  size: string;
}) {
  return (
    <>
      <div className="w-full flex flex-row  justify-between items-center border-2 border-sky-300 rounded-md p-4 my-2">
        <div className="flex flex-row items-center space-x-2">
          <div className="relative aspect-video h-full min-h-16">
            <Image
              src="/placeholder.png"
              fill
              alt="Placeholder"
              className="rounded-md object-cover"
            />
          </div>
          <div className="text-xl font-extrabold text-center">{name}</div>
        </div>
        <div className="text-xl font-extrabold text-center">
          Size: {size} mb
        </div>
      </div>
    </>
  );
}
