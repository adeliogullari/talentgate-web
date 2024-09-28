// const SettingsProfilePage = () => {

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Lock } from "lucide-react";

export default function SettingsProfilePage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+90 512 345 67 89");
  const [location, setLocation] = useState("New York, NY");
  const [bio, setBio] = useState(
    "I'm a software engineer with a passion for building great products."
  );

  const handleSave = () => {
    // Logic to save profile changes would go here
    console.log("Profile saved");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
         <div className="flex flex-col items-center gap-8 w-fit">
            <Avatar className="w-28 h-28">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt={name}
              />
              <AvatarFallback className="text-3xl">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <Button>Change Photo</Button>
         </div>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="flex">
              <User className="w-4 h-4 mr-2 mt-3 text-gray-500" />
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex">
              <Mail className="w-4 h-4 mr-2 mt-3 text-gray-500" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <div className="flex">
              <Phone className="w-4 h-4 mr-2 mt-3 text-gray-500" />
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="flex">
              <MapPin className="w-4 h-4 mr-2 mt-3 text-gray-500" />
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
