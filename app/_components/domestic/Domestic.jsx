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
import FAQ from "../gasifybenefits/FAQ";
import Tabbs from "./Tabs";
import Process from "../gasifybenefits/Process";

export default function DomesticPage() {
  

  return (
    <div className="min-h-screen pt-1 bg-black">
      {/* Main content */}
      <main className="container bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
   

      <Benefits />
          
          <Tabbs/>
          <Socials />
          <Process/>
          <div id="download"> 
          <Download />
          </div>
          {/* <ContactOptions/> */}
          <FAQ/>
      </main>
    </div>
  );
}

