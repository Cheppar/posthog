"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LiquidGas from "./LiquidGas"
import Socials from "../socials/SocialStrip";
import Benefits from "../gasifybenefits/Benefits";
import Download from "../gasifybenefits/Download";
import ContactOptions from "../gasifybenefits/ContactOptions";
import Oxygen from "./Oxygen";
import Accessory from "./Accessory";

export default function DomesticPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("lpg");

  return (
    <div className="min-h-screen pt-1 bg-background">
     

      {/* Main content */}
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
   

        <Tabs
  value={activeTab}
  onValueChange={setActiveTab}
  className="w-full"
>
  <TabsList className="grid text-2xl w-full grid-cols-3 mb-2">
    <TabsTrigger
      value="lpg"
      className={cn(
        "hover:clrBtn",
        activeTab === "lpg" && "clrBtn text-black"
      )}
    >
      LPG
    </TabsTrigger>
    <TabsTrigger
      value="batteries"
      className={cn(
        "hover:clrBtn",
        activeTab === "batteries" && "clrBtn text-black"
      )}
    >
      Oxygen Gas
    </TabsTrigger>
    <TabsTrigger
      value="lpg-bottles"
      className={cn(
        "hover:clrBtn",
        activeTab === "lpg-bottles" && "clrBtn text-black"
      )}
    >
      Accessories
    </TabsTrigger>
  </TabsList>

  {/* Tab content remains unchanged */}
  <TabsContent value="lpg">
    <div className="bg-muted rounded-lg">
      <LiquidGas />
    </div>
  </TabsContent>
  <TabsContent value="batteries">
    <div className="p-1 bg-muted rounded-lg">
      <Oxygen />
    </div>
  </TabsContent>
  <TabsContent value="lpg-bottles">
    <div className="p-6 bg-muted rounded-lg">
      <Accessory />
    </div>
  </TabsContent>
</Tabs>
          <Socials />
          <Benefits />
          <div id="download"> 
          <Download />
          </div>
          <ContactOptions/>
      </main>
    </div>
  );
}

