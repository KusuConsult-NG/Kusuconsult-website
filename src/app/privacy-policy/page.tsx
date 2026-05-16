import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#030014] text-slate-300 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-slate-400">Rainbow EWER Security Incident Management System</p>
          <div className="mt-6 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </header>

        <div className="space-y-12 backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
          {/* Overview */}
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">01</span>
              Privacy Policy Overview
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Rainbow EWER is committed to protecting the privacy, confidentiality, and security of all users of the Rainbow EWER Security Incident Management System (“the Platform”).
              </p>
              <p>This Privacy Policy explains:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li>What information is collected</li>
                <li>Why the information is collected</li>
                <li>How the information is used</li>
                <li>How the information is stored and protected</li>
                <li>The rights and responsibilities of users</li>
              </ul>
              <p className="pt-4">
                By accessing or using the Platform, users acknowledge and agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Purpose */}
          <section id="purpose" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">02</span>
              Purpose of the Platform
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The Rainbow EWER Security Incident Management System is designed to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li>Enable citizens to report emergencies and security incidents</li>
                <li>Support real-time response coordination</li>
                <li>Facilitate structured escalation of unresolved incidents</li>
                <li>Improve accountability and operational visibility across security agencies</li>
              </ul>
              <p className="pt-4 italic text-slate-500 text-sm">
                The Platform is intended strictly for lawful security and emergency response purposes.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section id="collection" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">03</span>
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-400">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Device information</li>
                  <li>Location data</li>
                  <li>User role and assigned location (for staff users)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Location Information</h3>
                <p className="mb-3">The Platform collects GPS location data during:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-400">
                  <li>Emergency alert activation</li>
                  <li>Active incident tracking</li>
                  <li>Field officer operations</li>
                </ul>
                <p className="mt-3 text-sm text-primary/80">
                  Location tracking may continue temporarily during active incidents, even when the application is running in the background.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technical & Usage Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-400">
                  <li>Login timestamps</li>
                  <li>Device identifiers</li>
                  <li>IP address</li>
                  <li>Application activity logs</li>
                  <li>Error reports and diagnostics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section id="usage" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">04</span>
              How Information is Used
            </h2>
            <div className="space-y-4">
              <p>Collected information is used strictly for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Emergency response coordination',
                  'Incident management and escalation',
                  'Real-time operational monitoring',
                  'Security investigations',
                  'System administration',
                  'Performance analytics'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Offline & SMS Functionality</h3>
                <p className="text-sm text-slate-400">
                  Where internet connectivity is unavailable, the application may transmit emergency information through SMS. These messages may contain location coordinates and emergency identifiers.
                </p>
              </div>
            </div>
          </section>

          {/* Sharing & Disclosure */}
          <section id="sharing" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">05</span>
              Data Sharing & Disclosure
            </h2>
            <div className="space-y-4">
              <p>Information may be shared only with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li>Authorized Rainbow EWER personnel</li>
                <li>Assigned security response officers</li>
                <li>Relevant government or law enforcement agencies where required by law</li>
              </ul>
              <p className="font-semibold text-white pt-2">
                Rainbow EWER does not sell user information to third parties.
              </p>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">06</span>
              Security & Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Our Safeguards</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Encrypted communication channels</li>
                  <li>• Authentication & access controls</li>
                  <li>• Secure server infrastructure</li>
                  <li>• Activity logging & monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">User Responsibilities</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• No false or misleading alerts</li>
                  <li>• No misuse of the Platform</li>
                  <li>• No unauthorized access attempts</li>
                  <li>• Lawful and legitimate usage only</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
              <p className="text-slate-300 mb-6">
                For questions, complaints, or requests relating to this Privacy Policy, users may contact:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-slate-400">No. 1 Aliyu Makama Street, Jos, Plateau State, Nigeria</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-primary hover:underline cursor-pointer">info@operationrainbowews.org</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-slate-400">+234 9060 1000 10</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center text-sm text-slate-500 italic">
              Last updated: May 2026
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
