import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ForceHireLanding() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold mb-4">ForceHire</h1>
        <p className="text-lg text-gray-700 mb-6">
          Built by a law enforcement recruiter for law enforcement recruiters. ForceHire is a streamlined, automated, and customizable applicant tracking system designed to help your agency hire faster, smarter, and with less paperwork.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Get Early Access</h2>
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400" />
              <Input placeholder="Your email address" className="flex-1" />
              <Button>Notify Me</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Be the first to know when ForceHire launches.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}