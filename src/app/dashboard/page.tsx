"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const formatDate = (date: Date) => format(date, "do MMM yyyy").toLowerCase();

// Placeholder UI data only; real data fetching comes later.
const workouts = [
  {
    id: 1,
    name: "Push Day",
    time: "07:30",
    exercises: [
      { name: "Bench Press", sets: "4 sets · 8 reps · 80 kg" },
      { name: "Overhead Press", sets: "3 sets · 10 reps · 45 kg" },
      { name: "Tricep Pushdown", sets: "3 sets · 12 reps · 30 kg" },
    ],
  },
  {
    id: 2,
    name: "Evening Mobility",
    time: "19:00",
    exercises: [{ name: "Hip Openers", sets: "2 sets · 10 reps · Bodyweight" }],
  },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger render={<Button variant="outline" />}>
            <CalendarIcon />
            {formatDate(date)}
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              defaultMonth={date}
              onSelect={(next) => {
                if (!next) return;
                setDate(next);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <h2 className="mb-4 text-sm font-medium text-muted-foreground">
        Workouts on {formatDate(date)}
      </h2>

      <div className="flex flex-col gap-4">
        {workouts.map((workout) => (
          <Card key={workout.id}>
            <CardHeader>
              <CardTitle>{workout.name}</CardTitle>
              <CardDescription>{workout.time}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {workout.exercises.map((exercise) => (
                  <li
                    key={exercise.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-medium">{exercise.name}</span>
                    <Badge variant="secondary">{exercise.sets}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
