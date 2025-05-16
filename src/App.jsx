import { motion } from 'framer-motion';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>ForceHire</h1>
        <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '2rem' }}>
          Built by a law enforcement recruiter for law enforcement recruiters. ForceHire is a streamlined, automated, and customizable applicant tracking system designed to help your agency hire faster, smarter, and with less paperwork.
        </p>
        <input placeholder="Your email address" style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #D1D5DB', marginRight: '0.5rem' }} />
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#2563EB', color: 'white', borderRadius: '0.375rem' }}>Notify Me</button>
      </motion.div>
    </div>
  );
}