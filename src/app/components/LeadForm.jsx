"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

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
];

export default function LeadForm({ addLead }) {
  return (
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
            Enter the details of your new potential client.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const newLead = {
              companyName: formData.get("companyName"),
              industry: formData.get("industry"),
              website: formData.get("website"),
              contactPerson: formData.get("contactPerson"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              city: formData.get("city"),
              currentWebsite: formData.get("currentWebsite"),
              status: "New Lead",
              notes: formData.get("notes"),
            };
            addLead(newLead);
            e.target.reset();
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
  );
}
