import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LiquidGas from "./LiquidGas"
import Oxygen from "./Oxygen"
import Accessory from "./Accessory"


function Tabbs() {
    // State to manage the active tab
  const [activeTab, setActiveTab] = useState("lpg");
  return (
    <div>
          <Tabs
  value={activeTab}
  onValueChange={setActiveTab}
  className=" w-full"
>
  <TabsList className="grid yellowbg text-2xl w-full grid-cols-4 mb-2">
    <TabsTrigger
      value="lpg"
      className={cn(
        "hover:clrBtn",
        activeTab === "lpg" && "bg-black text-black"
      )}
    >
      Session 1
    </TabsTrigger>
    <TabsTrigger
      value="batteries"
      className={cn(
        "hover:clrBtn",
        activeTab === "batteries" && "bg-black text-black"
      )}
    >
      Session 2
    </TabsTrigger>
    <TabsTrigger
      value="lpg-bottles"
      className={cn(
        "hover:clrBtn",
        activeTab === "lpg-bottles" && "bg-black text-black"
      )}
    >
      Session 3
    </TabsTrigger>
    <TabsTrigger
      value="events"
      className={cn(
        "hover:clrBtn",
        activeTab === "events" && "bg-black text-black"
      )}
    >
      Session 4
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
  <TabsContent value="events">
    <div className="p-6 bg-muted rounded-lg">
      <div className="text-center py-12">
        <p className="text-lg md:text-xl text-gray-300">
          The session will be announced.
        </p>
      </div>
    </div>
  </TabsContent>
</Tabs>
    </div>
  )
}

export default Tabbs