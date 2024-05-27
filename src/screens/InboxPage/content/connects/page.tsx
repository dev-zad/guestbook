"use client";
import { columns, Connected } from "./column"
import { DataTable } from "./data-table"
import React, { useEffect, useState } from 'react';

async function getData(): Promise<Connected[]> {
  try {
    const response = await fetch('/api/messages');
    if (!response.ok) {
      throw new Error('Failed to fetch connects');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching connects:', error);
    return [];
  }
}

export default function DemoPage() {
  const [data, setData] = useState<Connected[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const connects = await getData();
        setData(connects);
      } catch (error: any) { // Specify the type of 'error'
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="px-40 py-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
