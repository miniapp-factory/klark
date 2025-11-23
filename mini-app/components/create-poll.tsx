"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreatePoll() {
  const [header, setHeader] = useState("");
  const [type, setType] = useState<"four" | "yesno">("four");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [minParticipants, setMinParticipants] = useState("");

  const handleOptionChange = (index: number, value: string) => {
    setOptions((prev) => {
      const newOpts = [...prev];
      newOpts[index] = value;
      return newOpts;
    });
  };

  const handleCreate = () => {
    const pollData = {
      header,
      type,
      options: type === "four" ? options : ["Yes", "No"],
      minParticipants: Number(minParticipants),
    };
    console.log("Poll created:", pollData);
    alert("Poll created (placeholder)");
  };

  return (
    <Card className="w-full max-w-md mt-4">
      <CardHeader>
        <CardTitle>Create a New Poll</CardTitle>
        <CardDescription>Enter poll details below.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-1.5">
          <Label htmlFor="poll-header">Header (Question or Statement)</Label>
          <Input id="poll-header" value={header} onChange={(e) => setHeader(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="poll-type">Poll Type</Label>
          <select
            id="poll-type"
            value={type}
            onChange={(e) => setType(e.target.value as "four" | "yesno")}
            className="border rounded px-2 py-1"
          >
            <option value="four">Four Options</option>
            <option value="yesno">Yes/No</option>
          </select>
        </div>
        {type === "four" && (
          <>
            {options.map((opt, idx) => (
              <div key={idx} className="grid gap-1.5">
                <Label htmlFor={`option-${idx}`}>Option {idx + 1}</Label>
                <Input
                  id={`option-${idx}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                />
              </div>
            ))}
          </>
        )}
        <div className="grid gap-1.5">
          <Label htmlFor="poll-min-participants">Minimum Participants</Label>
          <Input
            id="poll-min-participants"
            type="number"
            value={minParticipants}
            onChange={(e) => setMinParticipants(e.target.value)}
          />
        </div>
        <Button onClick={handleCreate}>Create Poll</Button>
      </CardContent>
    </Card>
  );
}
