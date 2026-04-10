import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-community-bg text-on-surface font-sans">
      {/* Navigation */}
      <nav className="w-full top-0 sticky z-50 bg-slate-950/80 backdrop-blur-xl h-24 flex items-center border-b border-border">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <Link to="/" className="flex items-center gap-4 lg:gap-5">
            <Logo size="md" className="shadow-lg shadow-black/40" />
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-white font-headline">VoxLink</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl lg:text-5xl font-headline font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-on-surface-muted mb-12 text-sm">Last updated: April 10, 2026</p>

        <div className="space-y-10 text-on-surface-muted leading-relaxed">
          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Overview</h2>
            <p>VoxLink is a push-to-talk client for SvxLink amateur radio reflectors. This policy explains what data the app accesses and how it is handled.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Data Collection</h2>
            <p>VoxLink does not collect, store, or transmit any personal data to the developer or any third party. The app contains no analytics, advertising, or tracking of any kind.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Data Stored on Your Device</h2>
            <p className="mb-4">The app stores the following data locally on your device only:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white">Server profiles</strong>: hostname, port, callsign, authentication key, and talkgroup settings you configure</li>
              <li><strong className="text-white">App preferences</strong>: PTT mode, audio settings, UI preferences</li>
            </ul>
            <p className="mt-4">This data never leaves your device except when connecting to the SvxLink reflector servers you configure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Microphone</h2>
            <p>VoxLink accesses your device microphone solely for push-to-talk voice transmission to SvxLink reflector servers. Audio is encoded using the Opus codec and sent directly to the server you are connected to. Audio is not recorded, stored, or transmitted elsewhere. The user can choose to record audio, audio is kept strictly on the device, inside the app.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Network Communication</h2>
            <p className="mb-4">VoxLink connects to SvxLink reflector servers that you configure. Communication uses:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white">TCP</strong>: control connection (authentication, heartbeat, node list, talkgroup management)</li>
              <li><strong className="text-white">UDP</strong>: real-time audio transmission</li>
            </ul>
            <p className="mt-4">The app communicates only with servers you explicitly configure. No other network connections are made.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Third-Party Services</h2>
            <p>VoxLink does not use any third-party services, SDKs, or APIs. There are no ads, analytics, crash reporting, or cloud services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">SvxLink Reflector Servers</h2>
            <p>VoxLink connects to third-party SvxLink reflector servers operated by independent parties. The developer of VoxLink does not operate, control, or moderate these servers. Communication through these servers is real-time voice between connected users and is not moderated by VoxLink.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Children</h2>
            <p>VoxLink is not directed at children under 13. The app facilitates real-time voice communication between users.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Changes</h2>
            <p>This privacy policy may be updated. Changes will be posted at this URL with an updated date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Contact</h2>
            <p>If you have questions about this privacy policy, contact: <a href="mailto:voxlink@jcalado.com" className="text-vibrant-blue hover:underline">voxlink@jcalado.com</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
