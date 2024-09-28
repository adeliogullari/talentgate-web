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

export default function SettingsPasswordPage() {
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
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Manage your password settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="mr-2">
            <Lock className="w-4 h-4 mr-2" />
            Change Password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
