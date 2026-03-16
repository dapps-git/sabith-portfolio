import ProfileHeader from "@/components/ProfileHeader";
import PhoneNumbers from "@/components/PhoneNumbers";
import LinkButton from "@/components/LinkButton";
import { Globe, Linkedin, Facebook, Instagram } from "lucide-react";

const phones = [
  { label: "Crevion.ads", number: "+91 8113908262" },
  { label: "Sabith MT", number: "+91 9526824543" },
  { label: "Dapps Solutions", number: "+971 542545909" },
];

const links = [
  { title: "Crevion.ads", url: "https://www.crevionads.com", icon: <Globe className="w-4 h-4" /> },
  { title: "Dapps Solutions", url: "https://www.dappssolutions.com", icon: <Globe className="w-4 h-4" /> },
  { title: "Connect on LinkedIn", url: "https://www.linkedin.com/in/muhammed-sabith-mt-6a63a221a", icon: <Linkedin className="w-4 h-4" /> },
  { title: "Follow on Facebook", url: "https://www.facebook.com/share/1Kh2mcCx1g/", icon: <Facebook className="w-4 h-4" /> },
  { title: "Follow on Instagram", url: "https://www.instagram.com/saabith.mt", icon: <Instagram className="w-4 h-4" /> },
];

const Index = () => {
  return (
    <>
      <style>{`
        @keyframes bgShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33%       { transform: translate(30px, -40px) scale(1.1); opacity: 0.8; }
          66%       { transform: translate(-20px, 20px) scale(0.95); opacity: 0.6; }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          33%       { transform: translate(-40px, 30px) scale(1.15); opacity: 0.7; }
          66%       { transform: translate(20px, -20px) scale(0.9); opacity: 0.5; }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50%       { transform: translate(25px, 35px) scale(1.2); opacity: 0.6; }
        }
        @keyframes glassEntrance {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseOrb {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes pulseOrb2 {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes noiseDrift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(-50%, -50%); }
        }
      `}</style>

      {/* ── Background wrapper ── */}
      <div
        className="min-h-screen flex items-start justify-center px-4 py-12 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 90% 30%, rgba(139, 92, 246, 0.45) 0%, transparent 15%),
            radial-gradient(ellipse at 70% 35%, rgba(109, 40, 217, 0.55) 0%, transparent 15%),
            radial-gradient(ellipse at 65% 45%, rgba(76, 29, 149, 0.7) 0%, transparent 15%),
            #3b0764
          `,
        }}
      >
        {/* Floating ambient orb 1 */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "5%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, transparent 70%)",
            animation: "floatOrb1 12s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Floating ambient orb 2 */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
            animation: "floatOrb2 15s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Floating ambient orb 3 — centre accent */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196, 181, 253, 0.15) 0%, transparent 70%)",
            animation: "floatOrb3 10s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Subtle noise-grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* ── Page content ── */}
        <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6">
          <ProfileHeader
            name="Muhammed Sabith MT"
            designation="Co-Founder & Marketing manager & Content creator"
            businessName="Crevion.ads LLP & Dapps Solutions LLC"
            email="sabithmanithodika8@gmail.com"
          />

          <PhoneNumbers phones={phones} />

          {/* Glass links card */}
          <div
            className="relative w-full mt-1 overflow-hidden rounded-2xl flex flex-col gap-1 p-3"
            style={{
              background: "rgba(88, 28, 135, 0.25)",
              backdropFilter: "blur(18px) saturate(180%)",
              WebkitBackdropFilter: "blur(18px) saturate(180%)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              boxShadow: `
                0 8px 32px rgba(88, 28, 135, 0.5),
                0 0 0 1px rgba(255,255,255,0.04) inset,
                0 1px 0 rgba(255,255,255,0.12) inset
              `,
              animation: "glassEntrance 0.65s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
          >
            {/* Inner orb — top left */}
            <div
              style={{
                position: "absolute",
                top: "-35%",
                left: "-10%",
                width: "55%",
                height: "70%",
                background:
                  "radial-gradient(circle, rgba(216,180,254,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
                animation: "pulseOrb 4.5s ease-in-out infinite",
              }}
            />

          

          

            {/* Top border glow */}
       

            <div className="relative z-10 flex flex-col gap-1">
              {links.map((link) => (
                <LinkButton
                  key={link.title}
                  title={link.title}
                  url={link.url}
                  icon={link.icon}
                />
              ))}
            </div>
          </div>

          <p className="text-[10px] text-white/60 mt-4">
            Powered by Dapps Solution LLC
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;