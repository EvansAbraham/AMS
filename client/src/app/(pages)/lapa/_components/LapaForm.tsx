import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const LapaForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="assetBarcode">Asset Barcode</Label>
          <Input id="assetBarcode" placeholder="Asset Barcode" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="certificateNo">Certificate No</Label>
          <Input id="certificateNo" placeholder="Certificate No" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="riskAssessmentWONo">Risk Assessment WO No.</Label>
          <Input id="riskAssessmentWONo" placeholder="Risk Assessment WO No." className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="riskAssessmentWODate">Risk Assessment WO Date</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="riskAssessmentWODate" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialWONo">Remedial WO No.</Label>
          <Input id="remedialWONo" placeholder="Remedial WO No." className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialCompletedOn">Remedial Completed On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="remedialCompletedOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sampleNoPre">Sample No (Pre)</Label>
          <Input id="sampleNoPre" placeholder="Sample No (Pre)" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sampleOn">Sample On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="sampleOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="room">Room</Label>
          <Input id="room" placeholder="Room" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Location" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filterDetails">Filter Details</Label>
          <Textarea
            id="filterDetails"
            placeholder="Filter Details"
            className="bg-white h-24"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="temperatureHot">Temperature (Hot)</Label>
          <Input id="temperatureHot" placeholder="Temperature (Hot)" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="temperatureCold">Temperature (Cold)</Label>
          <Input id="temperatureCold" placeholder="Temperature (Cold)" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="laPA">LA/PA</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
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

        <div className="space-y-2">
          <Label htmlFor="sample">Sample (Original or Resample)</Label>
          <Input id="sample" placeholder="Original/Resample" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resultPre">Result (Pre)</Label>
          <Input id="resultPre" placeholder="Result (Pre)" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resultPost">Result (Post)</Label>
          <Input id="resultPost" placeholder="Result (Post)" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="labName">Lab Name</Label>
          <Input id="labName" placeholder="Lab Name" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bacteriaVariant">Bacteria Variant</Label>
          <Input id="bacteriaVariant" placeholder="Bacteria Variant" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="receivedOn">Received On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="receivedOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="attachments">Attachments</Label>
          <Input id="attachments" type="file" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="comments">Comments</Label>
          <Textarea
            id="comments"
            placeholder="Comments"
            className="bg-white h-24"
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="custom" className="bg-[#071487]">Save</Button>
      </div>
    </form>
  );
};

export default LapaForm;
