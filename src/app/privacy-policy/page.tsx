import React from 'react';

export const metadata = {
  title: 'Privacy Policy | KusuConsult',
  description:
    'KusuConsult Master Privacy Policy — learn how we collect, use, store, protect and process personal data across our technology ecosystem.',
};

const sections = [
  { id: 'introduction', number: '01', title: 'Introduction' },
  { id: 'commitment', number: '02', title: 'Our Commitment to Privacy' },
  { id: 'scope', number: '03', title: 'Scope of This Policy' },
  { id: 'data-collected', number: '04', title: 'Personal Data We May Collect' },
  { id: 'not-collected', number: '05', title: 'Information We Do Not Intentionally Collect' },
  { id: 'how-collected', number: '06', title: 'How We Collect Information' },
  { id: 'why-process', number: '07', title: 'Why We Process Personal Data' },
  { id: 'lawful-bases', number: '08', title: 'Lawful Bases for Processing' },
  { id: 'client-data', number: '09', title: 'Client Applications and Client Data' },
  { id: 'ai-processing', number: '10', title: 'Artificial Intelligence and Automated Processing' },
  { id: 'cookies', number: '11', title: 'Cookies and Similar Technologies' },
  { id: 'sharing', number: '12', title: 'How We Share Personal Data' },
  { id: 'transfers', number: '13', title: 'International Data Transfers' },
  { id: 'security', number: '14', title: 'Data Security' },
  { id: 'retention', number: '15', title: 'Data Retention' },
  { id: 'rights', number: '16', title: 'Data Subject Rights' },
  { id: 'exercise-rights', number: '17', title: 'How to Exercise Your Privacy Rights' },
  { id: 'children', number: '18', title: "Children's Privacy" },
  { id: 'third-party', number: '19', title: 'Third-Party Services and Links' },
  { id: 'breaches', number: '20', title: 'Data Breaches and Security Incidents' },
  { id: 'privacy-by-design', number: '21', title: 'Privacy by Design' },
  { id: 'business-transfers', number: '22', title: 'Business Transfers' },
  { id: 'changes', number: '23', title: 'Changes to This Privacy Policy' },
  { id: 'governing-framework', number: '24', title: 'Governing Privacy Framework' },
  { id: 'contact', number: '25', title: 'Contact KusuConsult' },
  { id: 'complaints', number: '26', title: 'Complaints' },
  { id: 'final', number: '27', title: 'Final Statement' },
];

function SectionHeading({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-white mb-6 flex items-center gap-3 scroll-mt-28"
    >
      <span className="w-9 h-9 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
        {number}
      </span>
      {title}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1.5 text-slate-400">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-white mb-3 mt-6">{children}</h3>;
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#030014] text-slate-300 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Page Header ── */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-primary">Privacy&nbsp;Policy</span>
          </h1>
          <p className="text-slate-400">KusuConsult — Digital Innovation &amp; Solutions</p>
          <div className="mt-6 h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-sm text-slate-500">Last Updated: August 2026</p>
        </header>

        {/* ── Table of Contents ── */}
        <nav
          aria-label="Table of contents"
          className="mb-14 backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl"
        >
          <h2 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
            Contents
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-slate-400">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="hover:text-primary transition-colors"
                >
                  <span className="text-primary/60 mr-2">{s.number}.</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Policy Body ── */}
        <div className="space-y-14 backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">

          {/* 01 Introduction */}
          <section id="introduction" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="introduction" number="01" title="Introduction" />
            <p>
              KusuConsult (&ldquo;KusuConsult&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is a technology, software development, digital innovation and
              consulting company that designs, develops, deploys, operates and supports digital
              products and technology solutions for individuals, businesses, government
              institutions, organisations and other clients.
            </p>
            <p>
              This Master Privacy Policy explains how KusuConsult collects, uses, stores,
              protects, discloses and otherwise processes personal data in connection with:
            </p>
            <BulletList
              items={[
                'our corporate website;',
                'websites and web applications developed or operated by KusuConsult;',
                'mobile applications developed or operated by KusuConsult;',
                'software-as-a-service products and digital platforms;',
                'artificial intelligence and machine-learning solutions;',
                'APIs, integrations and other technology services;',
                'cloud-hosted applications and systems;',
                'customer support and technical support services;',
                'software development and implementation projects;',
                'consulting, training and technology services; and',
                'other digital products and services provided by KusuConsult.',
              ]}
            />
            <p>
              This Policy is intended to provide a general privacy framework applicable across
              KusuConsult&rsquo;s technology ecosystem.
            </p>
            <p>
              Because KusuConsult develops and operates technology on behalf of different clients,
              the specific processing of personal data within a particular application may also be
              governed by an application-specific privacy notice, terms of service, client privacy
              policy, consent notice or other applicable documentation.
            </p>
            <p>
              Where a KusuConsult-developed application is operated on behalf of a client, that
              client may determine the purposes and means of processing personal data and may
              therefore act as the Data Controller, while KusuConsult may act as a Data Processor
              or technology service provider.
            </p>
            <p>
              Where KusuConsult determines the purposes and means of processing personal data for
              its own services, KusuConsult may act as the Data Controller.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 02 Commitment */}
          <section id="commitment" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="commitment" number="02" title="Our Commitment to Privacy" />
            <p>
              KusuConsult recognises that privacy and responsible handling of personal data are
              fundamental to the development and operation of trustworthy technology.
            </p>
            <p>
              We are committed to processing personal data in a manner that is lawful, fair,
              transparent, secure and proportionate to the purpose for which the information is
              collected.
            </p>
            <p>
              Our privacy practices are guided by applicable data protection and privacy laws,
              including the Nigeria Data Protection Act 2023 and applicable regulations, guidelines
              and regulatory requirements.
            </p>
            <p>
              The Nigeria Data Protection Commission identifies principles including lawful and
              transparent processing, purpose limitation, data minimisation, accuracy, storage
              limitation and appropriate security of personal data.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 03 Scope */}
          <section id="scope" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="scope" number="03" title="Scope of This Policy" />
            <p>
              This Policy applies generally to personal data processed through KusuConsult&rsquo;s
              services and technology ecosystem.
            </p>
            <p>It applies regardless of whether the service is accessed through:</p>
            <BulletList
              items={[
                'a website;',
                'mobile phone;',
                'tablet;',
                'desktop computer;',
                'web browser;',
                'application;',
                'API;',
                'cloud platform;',
                'third-party integration; or',
                'another supported digital interface.',
              ]}
            />
            <p>
              Some KusuConsult products or client projects may have additional privacy notices.
              Where an application has a specific privacy notice, that notice should be read
              together with this Policy.
            </p>
            <p>
              If there is a conflict between this general Policy and a specific privacy notice
              relating to a particular service, the specific notice may apply to the processing
              described in that notice.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 04 Personal Data Collected */}
          <section id="data-collected" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="data-collected"
              number="04"
              title="Personal Data We May Collect"
            />
            <p>
              The information collected depends on the particular service, application or
              relationship involved. Depending on the circumstances, we may process categories of
              information such as:
            </p>

            <SubHeading>4.1 Identity Information</SubHeading>
            <BulletList
              items={[
                'name;',
                'username;',
                'account identifier;',
                'profile information;',
                'photograph or avatar;',
                'date of birth where necessary;',
                'identification information where required for a particular service.',
              ]}
            />

            <SubHeading>4.2 Contact Information</SubHeading>
            <BulletList
              items={[
                'email address;',
                'telephone number;',
                'postal or contact address;',
                'business address;',
                'emergency contact information where relevant to a particular service.',
              ]}
            />

            <SubHeading>4.3 Account and Authentication Information</SubHeading>
            <BulletList
              items={[
                'account credentials;',
                'authentication identifiers;',
                'login information;',
                'verification information;',
                'account preferences;',
                'security and authentication records.',
              ]}
            />
            <p className="text-slate-400 text-sm">
              Passwords and other authentication credentials are intended to be protected using
              appropriate technical and organisational safeguards.
            </p>

            <SubHeading>4.4 Transaction and Service Information</SubHeading>
            <p>
              Depending on the application, we may process information relating to:
            </p>
            <BulletList
              items={[
                'purchases;',
                'subscriptions;',
                'payments;',
                'invoices;',
                'service requests;',
                'orders;',
                'bookings;',
                'customer interactions;',
                'transaction references;',
                'account balances or related records.',
              ]}
            />
            <p className="text-slate-400 text-sm">
              Where payments are processed through an external payment provider, payment
              information may be processed directly by that provider under its own privacy policy
              and terms.
            </p>

            <SubHeading>4.5 Technical and Device Information</SubHeading>
            <p>
              When you interact with our websites, applications or digital services, we may
              collect technical information such as:
            </p>
            <BulletList
              items={[
                'IP address;',
                'browser type;',
                'operating system;',
                'device type;',
                'device identifiers;',
                'application version;',
                'language and regional settings;',
                'network information;',
                'access times;',
                'referring pages;',
                'error logs;',
                'diagnostic information;',
                'usage information.',
              ]}
            />

            <SubHeading>4.6 Location Information</SubHeading>
            <p>
              Certain applications may require location information to provide particular
              functions. Location information may include approximate or precise location
              information depending on the application and the permissions granted by the user.
              Where location information is not necessary for a service, we seek to avoid
              collecting it unnecessarily.
            </p>

            <SubHeading>4.7 Communications</SubHeading>
            <p>
              Where users contact KusuConsult or interact with an application, we may process
              information contained in:
            </p>
            <BulletList
              items={[
                'emails;',
                'support requests;',
                'feedback;',
                'enquiries;',
                'messages;',
                'customer service interactions;',
                'technical reports.',
              ]}
            />

            <SubHeading>4.8 Information Provided by Organisations or Clients</SubHeading>
            <p>
              Where KusuConsult provides software or technology services to an organisation, the
              organisation may provide information to us for processing on its behalf. In such
              circumstances, KusuConsult may process the information according to the client&rsquo;s
              instructions and applicable contractual arrangements.
            </p>

            <SubHeading>4.9 Information Generated Through Use of Our Services</SubHeading>
            <p>
              Some applications may generate information based on interactions with the service.
              This may include:
            </p>
            <BulletList
              items={[
                'activity records;',
                'system events;',
                'application usage;',
                'preferences;',
                'audit logs;',
                'performance information;',
                'security events;',
                'interaction history.',
              ]}
            />
          </section>

          <hr className="border-white/10" />

          {/* 05 Not Collected */}
          <section id="not-collected" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="not-collected"
              number="05"
              title="Information We Do Not Intentionally Collect"
            />
            <p>
              KusuConsult does not intentionally collect personal information that is unnecessary
              for the operation of a service.
            </p>
            <p>
              Where an application requires sensitive or special-category information because of
              its legitimate purpose, the applicable application-specific privacy notice should
              explain the relevant processing.
            </p>
            <p>
              We encourage clients and users to avoid submitting information that is not required
              for the service.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 06 How Collected */}
          <section id="how-collected" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="how-collected" number="06" title="How We Collect Information" />
            <p>We may obtain personal data through:</p>
            <BulletList
              items={[
                'information provided directly by users;',
                'account registration;',
                'forms;',
                'applications;',
                'websites;',
                'customer support;',
                'contracts;',
                'client organisations;',
                'authorised integrations;',
                'APIs;',
                'third-party service providers;',
                'cookies and similar technologies;',
                'automated technical logs; and',
                'other lawful sources.',
              ]}
            />
          </section>

          <hr className="border-white/10" />

          {/* 07 Why Process */}
          <section id="why-process" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="why-process" number="07" title="Why We Process Personal Data" />
            <p>Depending on the service, personal data may be processed to:</p>
            <BulletList
              items={[
                'create and manage user accounts;',
                'provide requested services;',
                'operate applications and platforms;',
                'authenticate users;',
                'process transactions;',
                'provide customer support;',
                'communicate with users;',
                'maintain system security;',
                'prevent fraud and misuse;',
                'monitor application performance;',
                'diagnose technical problems;',
                'improve our products and services;',
                'develop and maintain software;',
                'perform analytics;',
                'comply with legal and regulatory obligations;',
                'enforce agreements;',
                'protect our rights and property;',
                'respond to lawful requests; and',
                'perform other purposes disclosed to the user at the point of collection.',
              ]}
            />
            <p>
              We aim to collect and use only information reasonably necessary for the relevant
              purpose.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 08 Lawful Bases */}
          <section id="lawful-bases" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="lawful-bases"
              number="08"
              title="Lawful Bases for Processing"
            />
            <p>
              Depending on the circumstances, KusuConsult may rely on one or more lawful bases
              for processing personal data, including:
            </p>
            <BulletList
              items={[
                'consent;',
                'performance of a contract;',
                'compliance with a legal obligation;',
                'protection of vital interests;',
                'performance of a task carried out in the public interest where applicable; and',
                'legitimate interests, where permitted by applicable law.',
              ]}
            />
            <p>
              Where consent is relied upon, individuals may withdraw their consent where legally
              permitted. Withdrawal of consent does not necessarily affect processing that was
              lawfully carried out before the withdrawal.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 09 Client Data */}
          <section id="client-data" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="client-data"
              number="09"
              title="Client Applications and Client Data"
            />
            <p>
              KusuConsult develops technology for a wide range of organisations and industries.
              Where KusuConsult develops or hosts an application for a client, the client may
              determine:
            </p>
            <BulletList
              items={[
                'what information is collected;',
                'why it is collected;',
                'how it is used;',
                'who is authorised to access it;',
                'how long it is retained; and',
                'whether it is shared with other parties.',
              ]}
            />
            <p>
              In these circumstances, the client may be the Data Controller and KusuConsult may
              act as a Data Processor.
            </p>
            <p>
              KusuConsult will process such information in accordance with applicable contractual
              obligations, documented instructions and applicable data protection laws.
            </p>
            <p>
              Users who have questions about information controlled by a particular KusuConsult
              client may also need to contact that client directly.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 10 AI Processing */}
          <section id="ai-processing" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="ai-processing"
              number="10"
              title="Artificial Intelligence and Automated Processing"
            />
            <p>
              Some KusuConsult applications may use artificial intelligence, machine learning,
              automation, analytics or other computational technologies. Depending on the service,
              information may be processed to:
            </p>
            <BulletList
              items={[
                'generate responses;',
                'provide recommendations;',
                'classify information;',
                'automate workflows;',
                'analyse patterns;',
                'improve service functionality;',
                'provide customer assistance;',
                'detect potentially fraudulent or abnormal activity; or',
                'perform other functions described by the relevant application.',
              ]}
            />
            <p>
              Where automated decision-making has legal or similarly significant effects on an
              individual, KusuConsult will apply appropriate safeguards required by applicable law
              and the particular service.
            </p>
            <p>
              Not every KusuConsult application uses artificial intelligence or automated
              decision-making.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 11 Cookies */}
          <section id="cookies" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="cookies"
              number="11"
              title="Cookies and Similar Technologies"
            />
            <p>
              Our websites and some applications may use cookies, software development
              technologies, local storage, analytics tools and similar technologies. These
              technologies may be used to:
            </p>
            <BulletList
              items={[
                'keep users signed in;',
                'remember preferences;',
                'maintain security;',
                'understand how services are used;',
                'diagnose technical problems;',
                'improve performance; and',
                'measure service effectiveness.',
              ]}
            />
            <p>
              Users may be able to control certain cookies and similar technologies through their
              browser or device settings. Disabling certain technologies may affect the
              functionality of some services.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 12 Sharing */}
          <section id="sharing" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="sharing" number="12" title="How We Share Personal Data" />
            <p>
              KusuConsult does not sell personal data as a general business practice. We may
              disclose or provide access to personal data where reasonably necessary for
              legitimate business, contractual, technical or legal purposes. This may include
              sharing information with:
            </p>
            <BulletList
              items={[
                'our authorised employees and personnel;',
                'clients and organisations that control a particular application;',
                'cloud hosting providers;',
                'database and infrastructure providers;',
                'payment service providers;',
                'communication providers;',
                'analytics providers;',
                'authentication providers;',
                'cybersecurity and fraud-prevention providers;',
                'software and technology vendors;',
                'professional advisers;',
                'auditors;',
                'regulators and government authorities where legally required; and',
                'other service providers necessary to operate or support a service.',
              ]}
            />
            <p>
              Third parties receiving personal data are expected to process it in accordance with
              applicable law and appropriate contractual or other safeguards.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 13 International Transfers */}
          <section id="transfers" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="transfers"
              number="13"
              title="International Data Transfers"
            />
            <p>
              Because modern software infrastructure may involve cloud services and technology
              providers operating in different countries, personal data may in some circumstances
              be processed or stored outside Nigeria.
            </p>
            <p>
              Where personal data is transferred across borders, KusuConsult will take reasonable
              steps to ensure that the transfer is carried out in accordance with applicable data
              protection requirements. The specific countries or providers involved may vary
              between applications.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 14 Security */}
          <section id="security" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="security" number="14" title="Data Security" />
            <p>
              KusuConsult implements reasonable technical and organisational measures designed to
              protect personal data against:
            </p>
            <BulletList
              items={[
                'unauthorised access;',
                'unlawful processing;',
                'accidental loss;',
                'destruction;',
                'alteration;',
                'disclosure;',
                'misuse; and',
                'other security risks.',
              ]}
            />
            <p>Depending on the application, safeguards may include:</p>
            <BulletList
              items={[
                'access controls;',
                'authentication mechanisms;',
                'encryption where appropriate;',
                'secure development practices;',
                'logging and monitoring;',
                'backups;',
                'vulnerability management;',
                'security testing;',
                'role-based permissions;',
                'infrastructure security controls; and',
                'organisational security procedures.',
              ]}
            />
            <p>
              No internet-based system can be guaranteed to be completely secure. We therefore
              continuously review and improve our security measures.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 15 Retention */}
          <section id="retention" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="retention" number="15" title="Data Retention" />
            <p>
              We retain personal data only for as long as reasonably necessary for the purpose
              for which it was collected, to provide the relevant service, to comply with legal
              obligations, resolve disputes, enforce agreements, maintain security, or for other
              legitimate purposes permitted by law. Retention periods may differ between
              applications.
            </p>
            <p>
              For client-managed applications, retention may be determined by the client in
              accordance with the applicable contract, service requirements and law.
            </p>
            <p>
              When personal data is no longer required, we may delete, anonymise or securely
              dispose of it, subject to applicable legal and operational requirements.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 16 Rights */}
          <section id="rights" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="rights" number="16" title="Data Subject Rights" />
            <p>
              Subject to applicable law and relevant limitations, individuals may have rights
              concerning their personal data, including the right to:
            </p>
            <BulletList
              items={[
                'be informed about processing;',
                'request access to personal data;',
                'request correction of inaccurate or incomplete information;',
                'request deletion or erasure;',
                'object to certain processing;',
                'request restriction of processing;',
                'request data portability where applicable;',
                'withdraw consent where processing is based on consent;',
                'object to certain automated decision-making;',
                'lodge a complaint with a relevant data protection authority; and',
                'exercise other rights provided under applicable data protection law.',
              ]}
            />
            <p>
              The Nigeria Data Protection Commission identifies these rights among the rights
              available to data subjects under the Nigeria Data Protection Act.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 17 Exercise Rights */}
          <section id="exercise-rights" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="exercise-rights"
              number="17"
              title="How to Exercise Your Privacy Rights"
            />
            <p>
              Requests concerning personal data processed directly by KusuConsult may be
              submitted through:
            </p>
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="font-semibold text-white">Email:</p>
              <a
                href="mailto:admin@kusuconsult.com"
                className="text-primary hover:underline"
              >
                admin@kusuconsult.com
              </a>
            </div>
            <p>
              When making a request, we may need sufficient information to verify the identity of
              the requester and locate the relevant information.
            </p>
            <p>
              Where the information is controlled by one of our clients, we may direct the
              requester to the relevant client or assist the client in responding, depending on
              the applicable contractual arrangement. We will respond to legitimate requests
              within the period required by applicable law.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 18 Children */}
          <section id="children" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="children" number="18" title="Children's Privacy" />
            <p>Our services are not automatically intended for children.</p>
            <p>
              Where a particular application is intended for children or may reasonably be
              accessed by children, the relevant application-specific privacy notice and
              applicable legal requirements will apply.
            </p>
            <p>
              We do not knowingly collect personal data from children in circumstances where such
              collection is prohibited by applicable law. Where we become aware that personal data
              has been collected improperly, we will take reasonable steps to address the
              situation.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 19 Third-Party */}
          <section id="third-party" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="third-party"
              number="19"
              title="Third-Party Services and Links"
            />
            <p>
              Our websites and applications may integrate with or contain links to third-party
              services. These services may include:
            </p>
            <BulletList
              items={[
                'payment platforms;',
                'authentication services;',
                'cloud infrastructure;',
                'mapping services;',
                'communication platforms;',
                'analytics services;',
                'social media services;',
                'artificial intelligence services; and',
                'other external technology providers.',
              ]}
            />
            <p>
              Third-party services operate under their own terms and privacy policies. KusuConsult
              is not responsible for the privacy practices of third-party services that it does
              not control. Users should review the privacy information applicable to those services
              where appropriate.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 20 Breaches */}
          <section id="breaches" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="breaches"
              number="20"
              title="Data Breaches and Security Incidents"
            />
            <p>
              KusuConsult maintains procedures intended to identify, investigate, contain and
              respond to suspected personal data breaches and security incidents.
            </p>
            <p>
              Where a breach occurs, KusuConsult will take appropriate action based on the nature
              and circumstances of the incident and will make notifications where required by
              applicable law.
            </p>
            <p>
              Where KusuConsult processes information on behalf of a client, we will follow the
              applicable contractual and legal requirements governing notification and incident
              response.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 21 Privacy by Design */}
          <section id="privacy-by-design" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="privacy-by-design"
              number="21"
              title="Privacy by Design"
            />
            <p>
              KusuConsult seeks to incorporate privacy and data protection considerations into the
              design and development of its digital products. Depending on the nature of a
              project, this may include:
            </p>
            <BulletList
              items={[
                'collecting only necessary information;',
                'implementing appropriate access controls;',
                'separating user roles;',
                'limiting data exposure;',
                'protecting sensitive information;',
                'applying appropriate security controls;',
                'considering data retention requirements;',
                'providing privacy notices;',
                'supporting user privacy controls; and',
                'assessing privacy risks where appropriate.',
              ]}
            />
            <p>
              The NDPC&rsquo;s guidance specifically recognises privacy by design and privacy by
              default as important considerations in software development.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 22 Business Transfers */}
          <section id="business-transfers" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="business-transfers" number="22" title="Business Transfers" />
            <p>
              If KusuConsult undergoes a merger, acquisition, restructuring, sale of assets,
              investment, or similar corporate transaction, personal data may be transferred as
              part of the relevant business transaction where legally permitted.
            </p>
            <p>
              Any such transfer will remain subject to applicable privacy and data protection
              requirements.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 23 Changes */}
          <section id="changes" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="changes"
              number="23"
              title="Changes to This Privacy Policy"
            />
            <p>
              KusuConsult may update this Master Privacy Policy from time to time to reflect:
            </p>
            <BulletList
              items={[
                'changes to our services;',
                'changes in technology;',
                'changes in applicable laws;',
                'regulatory guidance;',
                'changes in our privacy practices; or',
                'improvements to our policies and procedures.',
              ]}
            />
            <p>
              The updated version will be published on our website and may also be made available
              through relevant applications. The &ldquo;Last Updated&rdquo; date at the beginning
              of this Policy indicates when it was most recently revised. Where required by law,
              we will provide additional notice of material changes.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 24 Governing Framework */}
          <section id="governing-framework" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading
              id="governing-framework"
              number="24"
              title="Governing Privacy Framework"
            />
            <p>
              This Policy is intended to operate in accordance with applicable data protection
              and privacy laws. For services operated in or involving Nigeria, this includes the
              Nigeria Data Protection Act 2023 and applicable regulations, guidelines and
              requirements issued by the Nigeria Data Protection Commission.
            </p>
            <p>
              Where services are provided in other jurisdictions, additional privacy requirements
              may apply. Nothing in this Policy is intended to remove or limit a right that
              cannot lawfully be excluded under applicable law.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 25 Contact */}
          <section id="contact" className="space-y-6 leading-relaxed scroll-mt-28">
            <SectionHeading id="contact" number="25" title="Contact KusuConsult" />
            <p>
              For questions, requests, complaints or concerns regarding privacy and personal data
              processed directly by KusuConsult, please contact:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <h4 className="text-white font-bold">Address</h4>
                <p className="text-sm text-slate-400">
                  No. 23, Nenrot Plaza, Domkat Bali Road
                  <br />
                  Jos, Plateau State, Nigeria
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <h4 className="text-white font-bold">Email</h4>
                <a
                  href="mailto:admin@kusuconsult.com"
                  className="text-sm text-primary hover:underline"
                >
                  admin@kusuconsult.com
                </a>
                <p className="text-sm text-slate-400 pt-1">
                  <a
                    href="http://www.kusuconsult.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.kusuconsult.com
                  </a>
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <h4 className="text-white font-bold">Telephone</h4>
                <p className="text-sm text-slate-400">+234 703 617 1049</p>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              When contacting us about a privacy matter, please provide enough information for us
              to understand the nature of your request or concern.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 26 Complaints */}
          <section id="complaints" className="space-y-4 leading-relaxed scroll-mt-28">
            <SectionHeading id="complaints" number="26" title="Complaints" />
            <p>
              We encourage individuals to contact KusuConsult first so that we can understand and
              address privacy concerns where possible.
            </p>
            <p>
              Nothing in this Policy prevents an individual from exercising their right to lodge a
              complaint with the relevant data protection authority where permitted by applicable
              law.
            </p>
            <p>
              For Nigeria, the relevant supervisory authority is the Nigeria Data Protection
              Commission (NDPC). The Commission provides mechanisms for data protection complaints
              and regulatory engagement.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 27 Final Statement */}
          <section
            id="final"
            className="p-8 bg-primary/10 border border-primary/20 rounded-2xl space-y-4 leading-relaxed scroll-mt-28"
          >
            <SectionHeading id="final" number="27" title="Final Statement" />
            <p>
              KusuConsult builds technology for people, organisations and communities. We
              recognise that responsible technology development requires more than functionality
              and security. It also requires respect for the information entrusted to the systems
              we build.
            </p>
            <p>
              We therefore seek to maintain privacy and responsible data handling as part of the
              way we design, develop, deploy and support our technology solutions.
            </p>
            <p className="font-semibold text-white pt-2">
              KusuConsult — <em className="font-normal text-slate-300">Digital Innovation &amp; Solutions</em>
            </p>
          </section>

        </div>

        {/* ── Footer Note ── */}
        <p className="mt-10 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} KusuConsult. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;Last Updated: August 2026
        </p>
      </div>
    </main>
  );
}
