import OverviewForm from "@/components/layouts/OverviewForm";
import SocialMediaForm from "@/components/layouts/SocialMediaForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const SettingsPage = () => {
  return (
    <div>
      <div className="text-semibold text-3xl mb-5">Settings</div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overveiw">
         <OverviewForm/>
        </TabsContent>
        <TabsContent value="socialLinks">
         <SocialMediaForm/>
        </TabsContent>
        <TabsContent value="Teams">
          <div>teams</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
