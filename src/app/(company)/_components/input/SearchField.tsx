import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchField = () => {
  return (
    <div className="relative w-full md:w-64">
      <Input type="text" placeholder="Search Anything..." className="pl-10" />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
    </div>
  );
};

export default SearchField;
