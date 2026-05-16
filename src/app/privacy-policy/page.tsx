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
                  <li>Location data is collected</li>
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
                <h3 className="text-lg font-semibold text-white mb-3">Incident Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-400">
                  <li>Incident category</li>
                  <li>Descriptions provided by users</li>
                  <li>Time and location of incident</li>
                  <li>Attached media or supporting information (if enabled)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technical & Usage Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-400 text-sm">
                  <li>Login timestamps</li>
                  <li>Device identifiers</li>
                  <li>IP address</li>
                  <li>Application activity logs</li>
                  <li>Error reports and diagnostics</li>
                  <li className="text-primary font-medium">Background location</li>
                  <li className="text-primary font-medium">Precise location</li>
                  <li className="text-primary font-medium">Real-time tracking</li>
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
                  'System administration and troubleshooting',
                  'Performance improvement and analytics'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-sm text-slate-500">
                Information collected will not be used for unrelated commercial purposes.
              </p>
            </div>
          </section>

          {/* Location Tracking & SMS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-white font-bold mb-4">Location Tracking</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Continuous location updates during emergencies</li>
                <li>• Used solely for response coordination</li>
                <li>• Background tracking while app is minimized</li>
                <li className="text-primary/80 pt-2 font-medium">Location access is essential for emergency operation.</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-white font-bold mb-4">Offline & SMS</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Transmit information through SMS when offline</li>
                <li>• SMS contains coordinates and identifiers</li>
                <li>• Ensures alerts delivered in low-network areas</li>
              </ul>
            </div>
          </section>

          {/* New Section: Background Access */}
          <section id="background-access" className="scroll-mt-24 p-8 bg-primary/10 border border-primary/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Location Data Collection & Background Access</h2>
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                Rainbow EWER collects and processes precise device location data, including background location access, for emergency response and incident tracking purposes.
              </p>
              <p>
                When a user activates a panic alert or an active emergency incident is in progress, the application may continue to access and transmit the user’s location even when:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                {['the app is minimized', 'the device screen is locked', 'the app is in the background'].map((item, idx) => (
                  <li key={idx} className="bg-slate-900/50 p-3 rounded-lg text-center text-xs text-white border border-white/5">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-white">This background location functionality is necessary to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-slate-400">
                <li>Provide real-time tracking during emergencies</li>
                <li>Help security personnel locate affected users</li>
                <li>Coordinate emergency response operations</li>
                <li>Improve responder accuracy and safety</li>
              </ul>
              <p className="pt-4 text-sm">
                Location data is only used for security incident management, emergency response coordination, and operational monitoring within the Rainbow EWER system.
              </p>
              <p className="text-xs text-slate-500 italic mt-4">
                Users may disable location permissions through device settings; however, some emergency tracking features may not function properly without location access.
              </p>
            </div>
          </section>

          {/* Sharing & RBAC */}
          <section id="sharing" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6">Data Sharing & Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">Sharing & Disclosure</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Authorized Rainbow EWER personnel</li>
                  <li>• Assigned security response officers</li>
                  <li>• Government/Law enforcement (as required)</li>
                  <li className="font-bold text-white pt-2">No selling of user data to third parties.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Access Control (RBAC)</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Strict role-based jurisdiction access</li>
                  <li>• HQ administrators oversight</li>
                  <li>• Monitored access logs for accountability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Retention & Security */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Data Retention</h3>
              <p className="text-sm text-slate-400 mb-2">Retained for:</p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>• Incident investigation</li>
                <li>• Operational review</li>
                <li>• Legal compliance & Auditing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Security Measures</h3>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>• Encrypted communication</li>
                <li>• Authentication controls</li>
                <li>• Secure infrastructure</li>
                <li>• Continuous activity logging</li>
              </ul>
            </div>
          </section>

          {/* Footer content */}
          <div className="space-y-12 pt-12 border-t border-white/10">
            <section id="responsibilities" className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">User Responsibilities</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• No false or misleading alerts</li>
                  <li>• No misuse of the Platform</li>
                  <li>• No unauthorized access attempts</li>
                  <li>• Lawful and legitimate usage only</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Limitations</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• GPS accuracy varies by environment</li>
                  <li>• SMS depends on network availability</li>
                  <li>• Tracking stops on uninstall/shutdown</li>
                </ul>
              </div>
            </section>

            <section className="text-center bg-white/5 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Acceptance of Policy</h3>
              <p className="text-sm text-slate-400 mb-6">
                By using the Rainbow EWER system, users confirm they have read, understood, and consented to the data practices described.
              </p>
              <div className="inline-flex items-center gap-3 text-xs text-slate-500">
                <span>Children's Privacy Protection Active</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>Last updated: May 2026</span>
              </div>
            </section>

            <section id="contact" className="pt-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <h4 className="text-white font-bold">Address</h4>
                  <p className="text-sm text-slate-400">No. 1 Aliyu Makama Street, Jos, Plateau State, Nigeria</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-sm text-primary">info@operationrainbowews.org</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-sm text-slate-400">+234 9060 1000 10</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
