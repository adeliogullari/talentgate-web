"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Save, FileText, Code } from "lucide-react";

// Mock data for email templates
const emailTemplates = [
  {
    id: 1,
    name: "Application Received",
    subject: "We've received your application",
    category: "Application",
  },
  {
    id: 2,
    name: "Interview Invitation",
    subject: "Invitation to interview with {company_name}",
    category: "Interview",
  },
  {
    id: 3,
    name: "Offer Letter",
    subject: "Job Offer from {company_name}",
    category: "Offer",
  },
  {
    id: 4,
    name: "Rejection",
    subject: "Update on your application",
    category: "Rejection",
  },
  {
    id: 5,
    name: "Welcome Onboard",
    subject: "Welcome to {company_name}!",
    category: "Onboarding",
  },
];

export default function EmailTemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0]);
  const [editMode, setEditMode] = useState(false);
  const [templateContent, setTemplateContent] = useState(`
Dear {candidate_name},

Thank you for applying to the {job_title} position at {company_name}. We have received your application and our team is currently reviewing it.

We appreciate your interest in joining our team and will be in touch soon with next steps.

Best regards,
{recruiter_name}
{company_name}
  `);
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    subject: "",
    category: "",
    content: "",
  });

  const handleSaveTemplate = () => {
    console.log("Saving template:", selectedTemplate.name, templateContent);
    setEditMode(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Email Templates</h1>

      <div className="flex space-x-6">
        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Template List</CardTitle>
            <CardDescription>Manage your email templates</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] w-full pr-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailTemplates.map((template) => (
                    <TableRow
                      key={template.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <TableCell className="font-medium">
                        {template.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{template.category}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Template
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Email Template</DialogTitle>
                  <DialogDescription>
                    Create a new email template for your hiring process.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newTemplate.name}
                      onChange={(e) =>
                        setNewTemplate({ ...newTemplate, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-right">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={newTemplate.subject}
                      onChange={(e) =>
                        setNewTemplate({
                          ...newTemplate,
                          subject: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select
                      value={newTemplate.category}
                      onValueChange={(value) =>
                        setNewTemplate({ ...newTemplate, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Application">Application</SelectItem>
                        <SelectItem value="Interview">Interview</SelectItem>
                        <SelectItem value="Offer">Offer</SelectItem>
                        <SelectItem value="Rejection">Rejection</SelectItem>
                        <SelectItem value="Onboarding">Onboarding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content" className="text-right">
                      Content
                    </Label>
                    <Textarea
                      id="content"
                      value={newTemplate.content}
                      onChange={(e) =>
                        setNewTemplate({
                          ...newTemplate,
                          content: e.target.value,
                        })
                      }
                      rows={5}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Template</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Card className="w-2/3">
          <CardHeader>
            <CardTitle>{selectedTemplate.name}</CardTitle>
            <CardDescription>
              {selectedTemplate.category} Template
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={selectedTemplate.subject}
                  readOnly={!editMode}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={templateContent}
                  onChange={(e) => setTemplateContent(e.target.value)}
                  className="min-h-[300px]"
                  readOnly={!editMode}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <Button variant="outline" className="mr-2">
                <FileText className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button variant="outline">
                <Code className="mr-2 h-4 w-4" />
                Variables
              </Button>
            </div>
            <div>
              {editMode ? (
                <Button onClick={handleSaveTemplate}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              ) : (
                <Button onClick={() => setEditMode(true)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Template
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
