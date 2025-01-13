"use client"
import { useState } from 'react';
import SparklesText from "@/components/ui/sparkles-text";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Download, Plus, Trash2 } from "lucide-react";

interface EnvVariable {
  id: string;
  variiable: string;
  projectId: string;
}

// Dummy data to simulate database records
const dummyData: EnvVariable[] = [
  {
    id: '1',
    variiable: 'DATABASE_URL=postgresql://user:password@localhost:5432/mydb',
    projectId: 'project1'
  },
  {
    id: '2',
    variiable: 'API_KEY=your-secret-key-123',
    projectId: 'project1'
  },
  {
    id: '3',
    variiable: 'PORT=3000',
    projectId: 'project1'
  }
];

export default function EnvManager() {
  const params = useParams();
  const [variables, setVariables] = useState<EnvVariable[]>(dummyData);
  const [newVariable, setNewVariable] = useState<string>('');

  const handleAddVariable = async (): Promise<void> => {
    if (!newVariable.trim()) return;
    const newEnvVariable: EnvVariable = {
      id: Math.random().toString(),
      variiable: newVariable,
      projectId: params.id as string
    };
    setVariables([...variables, newEnvVariable]);
    setNewVariable('');
  };

  const handleRemoveVariable = async (id: string): Promise<void> => {
    setVariables(variables.filter(v => v.id !== id));
  };

  const handleCopyVariable = async (variable: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(variable);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleDownloadVariable = (variable: string, index: number): void => {
    const blob = new Blob([variable], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `env-variable-${index + 1}.env`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = (): void => {
    const allVariables = variables.map(v => v.variiable).join('\n');
    const blob = new Blob([allVariables], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '.env';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div >
      <ShootingStars />
      <StarsBackground />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            <SparklesText text="Env-Variables" />
          </div>
          <Button 
            onClick={handleDownloadAll}
            className="w-full rounded-full sm:w-auto"
          >
            <Download className="h-4 w-4 mr-2" /> Download All Variables
          </Button>
        </header>

        <Card className="p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <Input
              placeholder="Add new environment variable (KEY=value)"
              value={newVariable}
              onChange={(e) => setNewVariable(e.target.value)}
              className=""
            />
            <Button 
              onClick={handleAddVariable}
              className="md:w-auto rounded-full"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Variable
            </Button>
          </div>

          <div className="space-y-6">
            {variables.map((variable, index) => (
              <Card 
                key={variable.id} 
                className="p-6 bg-slate-100 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <code className=" text-sm p-2 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {variable.variiable}
                  </code>
                  <div className="flex gap-4 shrink-0">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleCopyVariable(variable.variiable)}
                      className="hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDownloadVariable(variable.variiable, index)}
                      className="hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemoveVariable(variable.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}