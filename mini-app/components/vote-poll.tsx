"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VotePoll() {
  const [votes, setVotes] = useState<{ [option: string]: number }>({
    "Option A": 0,
    "Option B": 0,
    "Option C": 0,
  });

  const handleVote = (option: string) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Decentralized Voting Poll</CardTitle>
        <CardDescription>Vote for your favorite option.</CardDescription>
      </CardHeader>
      <CardContent>
        {Object.entries(votes).map(([option, count]) => (
          <div key={option} className="flex items-center justify-between mb-2">
            <span>{option}</span>
            <div className="flex items-center gap-2">
              <span>{count}</span>
              <Button size="sm" onClick={() => handleVote(option)}>Vote</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface VotePollProps {
  header: string;
  options: string[];
  minParticipants: number;
}

export default function VotePoll({ header, options, minParticipants }: VotePollProps) {
  const [votes, setVotes] = useState<Record<string, number>>(
    options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {})
  );

  const handleVote = (option: string) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{header}</CardTitle>
        <CardDescription>Vote for your favorite option.</CardDescription>
      </CardHeader>
      <CardContent>
        {options.map((option) => (
          <div key={option} className="flex items-center justify-between mb-2">
            <span>{option}</span>
            <div className="flex items-center gap-2">
              <span>{votes[option]}</span>
              <Button size="sm" onClick={() => handleVote(option)}>Vote</Button>
            </div>
          </div>
        ))}
        <div className="mt-4 text-sm text-muted-foreground">
          Minimum participants required: {minParticipants}
        </div>
      </CardContent>
    </Card>
  );
}
