"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LiquidGas from "./LiquidGas"
import Socials from "../socials/SocialStrip";
import Benefits from "../gasifybenefits/Benefits";
import Download from "../gasifybenefits/Download";
import ContactOptions from "../gasifybenefits/ContactOptions";

export default function DomesticPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("lpg");

  return (
    <div className="min-h-screen bg-background">
     

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
        activeTab === "batteries" && "clrBtn text-white"
      )}
    >
      Batteries
    </TabsTrigger>
    <TabsTrigger
      value="lpg-bottles"
      className={cn(
        "hover:clrBtn",
        activeTab === "lpg-bottles" && "clrBtn text-white"
      )}
    >
      LPG Bottles
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
      <h2 className="text-2xl font-semibold mb-4">Battery Solutions</h2>
      <p>
        Our battery solutions offer reliable energy storage for domestic
        applications, ideal for solar systems and backup power in Kenyan
        homes.
      </p>
      <ul className="list-disc pl-5 mt-4">
        <li>Lithium-ion batteries for long-lasting performance</li>
        <li>Compatible with solar inverters</li>
        <li>Maintenance-free options</li>
      </ul>
    </div>
  </TabsContent>
  <TabsContent value="lpg-bottles">
    <div className="p-6 bg-muted rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">LPG Bottles</h2>
      <p>
        Our LPG bottles are designed for convenience and safety, providing
        Kenyan households with portable and durable gas storage solutions.
      </p>
      <ul className="list-disc pl-5 mt-4">
        <li>Available in 6kg, 13kg, and 25kg sizes</li>
        <li>Equipped with safety valves</li>
        <li>Nationwide delivery and exchange programs</li>
      </ul>
    </div>
  </TabsContent>
</Tabs>
          <Socials />
          <Benefits />
          <Download />
          <ContactOptions/>
      </main>
    </div>
  );
}

