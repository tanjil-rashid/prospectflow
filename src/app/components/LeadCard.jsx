import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Mail, MapPin, Phone, Tags, Users2 } from "lucide-react";

export default function LeadCard({ lead }) {
  return (
    <Card key={lead.id}>
      <CardHeader>
        <CardTitle>{lead.companyName}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Tags className="h-4 w-4" />
          {lead.industry}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Users2 className="h-4 w-4 text-muted-foreground" />
            {lead.contactPerson}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            {lead.email}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            {lead.phone}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            {lead.city}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            Current Platform: {lead.currentWebsite}
          </div>
        </div>
        <div className="text-sm text-muted-foreground">{lead.notes}</div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Update Status
        </Button>
      </CardFooter>
    </Card>
  );
}
