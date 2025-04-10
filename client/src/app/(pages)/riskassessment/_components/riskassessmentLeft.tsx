"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowDownUp,
  ArrowRight,
  ChevronRight,
  Cross,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "../../assets/_components/modal";
import RiskAssessmentForm from "./RiskAssessmentForm";

const RiskAssessmentLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCardClick = (id: string) => {
    router.push(`/riskassessment/${id}`);
  };

  return (
    <div className="parent h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col px-4 flex-shrink-0">
      <div className="p-2">
        <Label className="font-semibold text-lg flex items-center gap-2">
          Risk Assessments <ChevronRight size={18} />
        </Label>
      </div>

      <div className="p-1">
        <Input placeholder="Search..." />
      </div>

      <div className="flex justify-between items-center p-1 my-2">
        <Button variant={"custom_outline"} onClick={openModal}>
          <PlusCircle size={20} />
          New
        </Button>

        <div className="flex gap-2">
          <Button variant={"outline"}>
            <ArrowDownUp /> Sort
          </Button>
          <Button variant="outline">
            <Link href={"/riskassessment"}>
              <Cross />
            </Link>
          </Button>
        </div>
      </div>

      <ScrollArea className="w-full flex-grow">
        <Card
          className="p-5 mb-4 cursor-pointer hover:bg-gray-50"
          onClick={() => handleCardClick("661642")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="text-[#071487]">
              Asset Barcode - Completed
            </CardTitle>
            <div className="flex space-x-2">
              <Button
                variant={"card_button"}
                className="h-6 w-6 hidden md:flex items-center justify-center"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
          <CardContent className="p-0 mt-2">
            <h1 className="font-medium">Primary Identifier</h1>
            <p className="text-sm text-gray-600">Wing Name: Room name</p>
            <p className="text-sm text-gray-600">Risk Assessment</p>
          </CardContent>
        </Card>
      </ScrollArea>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create New Risk Assessment"
      >
        <RiskAssessmentForm />
      </Modal>
    </div>
  );
};

export default RiskAssessmentLeft;
