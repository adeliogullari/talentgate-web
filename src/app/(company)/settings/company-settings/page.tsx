import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CompanySettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Company Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>Manage your company information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" placeholder="Company Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-email">Company Email</Label>
            <Input
              id="company-email"
              type="email"
              placeholder="Company Email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-phone">Company Phone</Label>
            <Input id="company-phone" type="tel" placeholder="Company Phone" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-location">Company Location</Label>
            <Input
              id="company-location"
              type="text"
              placeholder="Company Location"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-bio">Company Bio</Label>
            <Textarea id="company-bio" placeholder="Company Bio" />
          </div>

          <Button type="submit">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySettingsPage;
