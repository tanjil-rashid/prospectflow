"use client";

import { useState } from "react";
import LeadForm from "../components/LeadForm";
import LeadSearch from "../components/LeadSearch";
import LeadList from "../components/LeadList";

const sampleLeads = [
  {
    id: 1,
    companyName: "Digital Marketing Bureau",
    industry: "Marketing Agency",
    website: "www.digitalbureau.nl",
    contactPerson: "Jan de Vries",
    email: "jan@digitalbureau.nl",
    phone: "+31 20 123 4567",
    city: "Amsterdam",
    currentWebsite: "wordpress",
    status: "New Lead",
    notes: "Looking for website redesign",
  },
  {
    id: 2,
    companyName: "Beauty Salon Emma",
    industry: "Beauty & Wellness",
    website: "www.emmasalon.nl",
    contactPerson: "Emma Peters",
    email: "info@emmasalon.nl",
    phone: "+31 30 234 5678",
    city: "Utrecht",
    currentWebsite: "wix",
    status: "Contacted",
    notes: "Needs online booking system",
  },
];

export default function LeadManagement() {
  const [leads, setLeads] = useState(sampleLeads);
  const [searchTerm, setSearchTerm] = useState("");

  const addLead = (newLead) =>
    setLeads([...leads, { ...newLead, id: leads.length + 1 }]);

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dutch Business Leads</h1>
          <p className="text-muted-foreground">
            Manage and track potential WordPress clients
          </p>
        </div>
        <LeadForm addLead={addLead} />
      </div>
      <LeadSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LeadList
        leads={leads.filter((lead) =>
          lead.companyName.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
}
