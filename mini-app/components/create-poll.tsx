"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePoll() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [quorum, setQuorum] = useState("");
  const [action, setAction] = useState("");

  const handleCreate = () => {
    // Placeholder: In a real app, this would interact with a backend or blockchain
    console.log({ title, description, duration, quorum, action });
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
          <Label htmlFor="poll-title">Title</Label>
          <Input id="poll-title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="poll-description">Description</Label>
          <Textarea id="poll-description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="poll-duration">Duration (seconds)</Label>
          <Input id="poll-duration" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="poll-quorum">Quorum (%)</Label>
          <Input id="poll-quorum" type="number" value={quorum} onChange={(e) => setQuorum(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="poll-action">Execution Action (URL)</Label>
          <Input id="poll-action" value={action} onChange={(e) => setAction(e.target.value)} />
        </div>
        <Button onClick={handleCreate}>Create Poll</Button>
      </CardContent>
    </Card>
  );
}
