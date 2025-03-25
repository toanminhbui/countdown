'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface Task {
  day: number;
  text: string;
  completed: boolean;
}

const TaskChecklist: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Try to load saved state from localStorage
    const saved = localStorage.getItem('demoTasks');
    if (saved) {
      return JSON.parse(saved);
    }
    // Initial tasks if nothing is saved
    return [
      { day: 7, text: "Barebone MVP", completed: false },
      { day: 10, text: "10 People to Try MVP", completed: false },
      { day: 14, text: "Modify MVP + 10 More Users", completed: false },
      { day: 17, text: "Iteration Phase + Build Story/Presentation", completed: false },
      { day: 21, text: "Pre-demo Day - Test Run with V1 Community", completed: false },
      { day: 22, text: "Almost there, day before demo!", completed: false },
      { day: 23, text: "Demo Day", completed: false },
    ];
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('demoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (index: number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background border-border">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Demo Day Checklist</h3>
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-start gap-3">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(index)}
                className="mt-1"
              />
              <span className={`text-foreground ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                Day {task.day}: {task.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskChecklist; 