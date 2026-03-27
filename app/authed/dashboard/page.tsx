'use client'
import { useAuth } from "@/app/lib/useAuth";
export default function Dashboard() {
  useAuth({middleware:'auth'})
  return (
    <div>
      dashboard
    </div>
  );
}
