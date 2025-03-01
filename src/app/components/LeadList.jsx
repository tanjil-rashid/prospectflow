import LeadCard from "./LeadCard";

export default function LeadList({ leads }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
