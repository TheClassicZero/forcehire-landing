import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ForceHireLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xgvkdzbd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black p-6 flex flex-col items-center justify-center text-white font-['Orbitron']">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="relative inline-block mb-4 w-64 h-72 mx-auto">
          <img
            src="/shield.png"
            alt="Shield"
            className="absolute inset-0 w-full h-full object-contain z-0"
          />
          <h1 className="text-4xl font-extrabold relative z-10 pt-24">
            <span className="text-blue-400">Force</span>
            <span className="text-white">Hire</span>
          </h1>
        </div>
        <p className="text-lg text-gray-300 mb-6">
          Built by a law enforcement recruiter for law enforcement recruiters. ForceHire is a streamlined, automated, and customizable applicant tracking system designed to help your agency hire faster, smarter, and with less paperwork.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg bg-white text-black">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Get Early Access</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <Mail className="text-gray-400" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit">Notify Me</Button>
              </form>
            ) : (
              <p className="text-green-600 text-center font-medium">Thanks! We'll be in touch.</p>
            )}
            <p className="text-sm text-gray-500 mt-4 text-center">
              Be the first to know when ForceHire launches.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
