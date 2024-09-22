import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Bell className="transition ease-in-out hover:stroke-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit relative top-4 right-20">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-6">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                alt="@shadcn"
              />
              <AvatarFallback delayMs={6000}>SC</AvatarFallback>
            </Avatar>
            <p>
              <span className="font-bold">Name Surname 7</span> has been moved
              from <span className="font-bold">Cols 1</span> to{" "}
              <span className="font-bold"> Cols 2</span>
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-6">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                alt="@shadcn"
              />
              <AvatarFallback delayMs={6000}>SC</AvatarFallback>
            </Avatar>
            <p>
              <span className="font-bold">Name Surname 10</span> has been moved
              from <span className="font-bold">Cols 2</span> to{" "}
              <span className="font-bold"> Cols 4</span>
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
