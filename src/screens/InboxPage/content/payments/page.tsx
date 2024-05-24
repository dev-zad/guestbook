"use client";
import { columns, Payment } from "./column"
import { DataTable } from "./data-table"
import React, { useEffect, useState } from 'react';

async function getData(): Promise<Payment[]> {
  try {
    const response = await fetch('/api/messages');
    if (!response.ok) {
      throw new Error('Failed to fetch payments');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching payments:', error);
    return [];
  }
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const payments = await getData();
        setData(payments);
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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
