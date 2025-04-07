import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Pen, Plus } from "lucide-react";
import React from "react";
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

const LapaRight = () => {
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
          <Button variant={"ghost"}>
            <Plus />
          </Button>
        </div>
      </div>

      {/* Fields and Content */}
      <ScrollArea className="h-[calc(100vh-100px)] w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="py-2">
            <Label htmlFor="assetBarcode">Asset Barcode</Label>
            <Input
              id="assetBarcode"
              placeholder="Asset Barcode"
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
            <Label htmlFor="certificateNo">Certificate No</Label>
            <Input
              id="certificateNo"
              placeholder="Certificate No"
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
            <Label htmlFor="riskAssessmentWONo">Risk Assessment WO No.</Label>
            <Input
              id="riskAssessmentWONo"
              placeholder="Risk Assessment WO No."
              className="bg-white my-2 w-sm"
            />
          </div>
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
            <Label htmlFor="riskAssessmentWODate">
              Risk Assessment WO Date
            </Label>
           <div className="w-sm">
              <DatePicker 
                id="riskAssessmentWODate"
                className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2"
              />
            </div>
          </div>
          <div className="py-2">
            <Label htmlFor="sample">Sample ( Original or Resample )</Label>
            <Input
              id="sample"
              placeholder="Original/Resample"
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
            <Label htmlFor="resultPre">Result (Pre)</Label>
            <Input
              id="resultPre"
              placeholder="Result (Pre)"
              className="bg-white my-2 w-sm"
            />
          </div>
          <div className="py-2">
            <Label htmlFor="remedialCompletedOn">Remedial Completed On</Label>
            <div className="w-sm">
              <DatePicker 
                id="remedialCompletedOn"
                className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2"
              />
            </div>
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
            <Label htmlFor="labName">Lab Name</Label>
            <Input
              id="labName"
              placeholder="Lab Name"
              className="bg-white my-2 w-sm"
            />
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
            <Label htmlFor="receivedOn">Received On</Label>
            <DatePicker id="receivedOn" />
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
    </div>
  );
};

export default LapaRight;
