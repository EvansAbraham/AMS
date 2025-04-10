"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Pen, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePicker } from "@/components/datepicker";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LapaRight = () => {
  const [isOpen, setIsOpen] = useState<string | undefined>("item-1");

  const toggleAccordion = () => {
    setIsOpen(isOpen ? undefined : "item-1");
  };

  return (
    <div className="bg-gray-50 flex-grow hidden sm:flex flex-col h-screen p-6">
      {/* Title and its buttons */}
      <div className="flex justify-between items-start w-full">
        <div>
          <p className="text-md">WO No.</p>
          <p className="text-2xl font-bold">661642</p>
        </div>
        <div className="flex gap-2 my-2">
          <Button variant={"custom"}>Submit</Button>
          <Button variant={"outline"}>
            <Pen /> Edit
          </Button>
          <Button variant={"ghost"} onClick={toggleAccordion}>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>

      {/* Fields and Content */}
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={isOpen}
        onValueChange={setIsOpen}
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="hidden">LAPA Details</AccordionTrigger>
          <AccordionContent className="pt-0 pb-0">
            <ScrollArea className="h-[calc(100vh-100px)] w-full overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {/* Left Column - Basic Info */}
                <div className="py-2">
                  <Label htmlFor="assetBarcode">Asset Barcode</Label>
                  <Input
                    id="assetBarcode"
                    placeholder="Asset Barcode"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger className="w-sm bg-white my-2">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="py-2">
                  <Label htmlFor="wing">Wing</Label>
                  <Input
                    id="wing"
                    placeholder="Wing"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="certificateNo">Certificate No</Label>
                  <Input
                    id="certificateNo"
                    placeholder="Certificate No"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="processNo">Process No</Label>
                  <Input
                    id="processNo"
                    placeholder="Process No"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="riskAssessmentWONo">
                    Risk Assessment WO No.
                  </Label>
                  <Input
                    id="riskAssessmentWONo"
                    placeholder="Risk Assessment WO No."
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="riskAssessmentWODate">
                    Risk Assessment WO Date
                  </Label>
                  <div className="w-sm">
                    <div className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2">
                      <DatePicker id="riskAssessmentWODate" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Label htmlFor="room">Room</Label>
                  <Input
                    id="room"
                    placeholder="Room"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Location"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialWONo">Remedial WO No.</Label>
                  <Input
                    id="remedialWONo"
                    placeholder="Remedial WO No."
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialCompletedOn">
                    Remedial Completed On
                  </Label>
                  <div className="w-sm">
                    <div className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2">
                      <DatePicker id="remedialCompletedOn" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Label htmlFor="sample">
                    Sample ( Original or Resample )
                  </Label>
                  <Input
                    id="sample"
                    placeholder="Original/Resample"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="sampleNoPre">Sample No (Pre)</Label>
                  <Input
                    id="sampleNoPre"
                    placeholder="Sample No (Pre)"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="sampleOn">Sample On</Label>
                  <DatePicker id="sampleOn" />
                </div>
                <div className="py-2">
                  <Label htmlFor="nextResampleDate">Next Resample Date</Label>
                  <DatePicker id="nextResampleDate" />
                </div>

                {/* Right Column - Assessment Details */}
                <div className="py-2">
                  <Label htmlFor="laPA">LA/ PA</Label>
                  <Select>
                    <SelectTrigger className="w-sm bg-white my-2">
                      <SelectValue placeholder="Choose an Option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="la">LA</SelectItem>
                        <SelectItem value="pa">PA</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="py-2">
                  <Label htmlFor="bacteriaVariant">Bacteria Variant</Label>
                  <Input
                    id="bacteriaVariant"
                    placeholder="Bacteria Variant"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="resultPre">Result (Pre)</Label>
                  <Input
                    id="resultPre"
                    placeholder="Result (Pre)"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="resultPost">Result (Post)</Label>
                  <Input
                    id="resultPost"
                    placeholder="Result (Post)"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="reportTemp">Report Temp</Label>
                  <Input
                    id="reportTemp"
                    placeholder="Report Temp"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="temperatureHot">Temperature ( Hot )</Label>
                  <Input
                    id="temperatureHot"
                    placeholder="Temperature (Hot)"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="temperatureCold">Temperature ( Cold )</Label>
                  <Input
                    id="temperatureCold"
                    placeholder="Temperature (Cold)"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="labName">Lab Name</Label>
                  <Input
                    id="labName"
                    placeholder="Lab Name"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="receivedOn">Received On</Label>
                  <DatePicker id="receivedOn" />
                </div>
                <div className="py-2">
                  <Label htmlFor="notifiedOn">Notified On</Label>
                  <DatePicker id="notifiedOn" />
                </div>
                <div className="py-2">
                  <Label htmlFor="attachments">Attachments</Label>
                  <Input
                    id="attachments"
                    type="file"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="filterDetails">Filter Details</Label>
                  <Textarea
                    id="filterDetails"
                    placeholder="Filter Details"
                    className="bg-white my-2 w-sm"
                  />
                </div>

                {/* Risk Assessment Scores */}
                <div className="py-2">
                  <Label htmlFor="systemContamination">
                    System Contamination
                  </Label>
                  <Input
                    id="systemContamination"
                    placeholder="System Contamination"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="systemContaminationScore">
                    System Contamination Score
                  </Label>
                  <Input
                    id="systemContaminationScore"
                    placeholder="Score"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="patientSusceptibility">
                    Patient Susceptibility
                  </Label>
                  <Input
                    id="patientSusceptibility"
                    placeholder="Patient Susceptibility"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="patientSusceptibilityScore">
                    Patient Susceptibility Score
                  </Label>
                  <Input
                    id="patientSusceptibilityScore"
                    placeholder="Score"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="systemOperationalConditions">
                    System Operational Conditions
                  </Label>
                  <Input
                    id="systemOperationalConditions"
                    placeholder="System Operational Conditions"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="systemOperationalConditionsScore">
                    System Operational Conditions Score
                  </Label>
                  <Input
                    id="systemOperationalConditionsScore"
                    placeholder="Score"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="managedMitigation">Managed Mitigation</Label>
                  <Input
                    id="managedMitigation"
                    placeholder="Managed Mitigation"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="managedMitigationScore">
                    Managed Mitigation Score
                  </Label>
                  <Input
                    id="managedMitigationScore"
                    placeholder="Score"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="overallRiskScore">Overall Risk Score</Label>
                  <Input
                    id="overallRiskScore"
                    placeholder="Overall Risk Score"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="riskLevel">Risk Level</Label>
                  <Select>
                    <SelectTrigger className="w-sm bg-white my-2">
                      <SelectValue placeholder="Select Risk Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Comments and Plans */}
                <div className="py-2">
                  <Label htmlFor="assessedRisk">Assessed Risk</Label>
                  <Textarea
                    id="assessedRisk"
                    placeholder="Assessed Risk"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="actions">Actions</Label>
                  <Textarea
                    id="actions"
                    placeholder="Actions"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialActions">Remedial Actions</Label>
                  <Textarea
                    id="remedialActions"
                    placeholder="Remedial Actions"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="agreedActions">Agreed Actions</Label>
                  <Textarea
                    id="agreedActions"
                    placeholder="Agreed Actions"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="mitigationPlan">Mitigation Plan</Label>
                  <Textarea
                    id="mitigationPlan"
                    placeholder="Mitigation Plan"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="additionalComments">
                    Additional Comments
                  </Label>
                  <Textarea
                    id="additionalComments"
                    placeholder="Additional Comments"
                    className="bg-white my-2 w-sm"
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="comments">Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Comments"
                    className="bg-white my-2 w-sm"
                  />
                </div>
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LapaRight;
