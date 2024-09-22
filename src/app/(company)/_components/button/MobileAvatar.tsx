import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MobileAvatar = () => {
  return (
    <div className="flex gap-5 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>Mr. Shad CN</div>
    </div>
  );
};

export default MobileAvatar;
