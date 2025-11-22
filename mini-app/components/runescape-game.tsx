"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function RunescapeGame() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>RuneScape Mini Game</CardTitle>
        <CardDescription>Explore a RuneScape-inspired mini game built with Next.js and shadcn components.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Game coming soon!</p>
      </CardContent>
    </Card>
  );
}
