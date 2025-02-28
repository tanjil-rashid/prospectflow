"use client"

import { useState } from "react"
import { CalendarDays, Mail, MapPin, Phone, Plus, Search, Tags, Users2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// Sample lead data structure
interface Lead {
  id: number
  companyName: string
  industry: string
  website: string
  contactPerson: string
  email: string
  phone: string
  city: string
  currentWebsite: string
  status: string
  notes: string
}

const sampleLeads: Lead[] = [
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
]

const industries = [
  "Marketing Agency",
  "Beauty & Wellness",
  "Healthcare",
  "Education",
  "HR & Recruitment",
  "Hospitality",
  "Professional Services",
  "Retail",
  "Construction",
  "Real Estate",
]

export default function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>(sampleLeads)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = leads.filter(
    (lead) =>
      lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const addLead = (newLead: Omit<Lead, "id">) => {
    setLeads([...leads, { ...newLead, id: leads.length + 1 }])
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dutch Business Leads</h1>
          <p className="text-muted-foreground">Manage and track potential WordPress clients</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Lead
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Lead</DialogTitle>
              <DialogDescription>
                Enter the details of your new potential client. All fields are required for better lead management.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const newLead = {
                  companyName: formData.get("companyName") as string,
                  industry: formData.get("industry") as string,
                  website: formData.get("website") as string,
                  contactPerson: formData.get("contactPerson") as string,
                  email: formData.get("email") as string,
                  phone: formData.get("phone") as string,
                  city: formData.get("city") as string,
                  currentWebsite: formData.get("currentWebsite") as string,
                  status: "New Lead",
                  notes: formData.get("notes") as string,
                }
                addLead(newLead)
                ;(e.target as HTMLFormElement).reset()
              }}
              className="grid gap-4 py-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" name="companyName" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select name="industry" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Industries</SelectLabel>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" type="url" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="currentWebsite">Current Platform</Label>
                  <Select name="currentWebsite" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Platforms</SelectLabel>
                        <SelectItem value="wordpress">WordPress</SelectItem>
                        <SelectItem value="wix">Wix</SelectItem>
                        <SelectItem value="squarespace">Squarespace</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                        <SelectItem value="none">No Website</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input id="contactPerson" name="contactPerson" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" />
              </div>
              <DialogFooter>
                <Button type="submit">Add Lead</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads by company, industry or city..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLeads.map((lead) => (
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
        ))}
      </div>
    </div>
  )
}

