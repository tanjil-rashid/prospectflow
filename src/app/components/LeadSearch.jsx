import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function LeadSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6 relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search leads by company, industry or city..."
        className="pl-9"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
