import ProfileHeader from "@/components/ProfileHeader";
// import SocialIcons from "@/components/SocialIcons";
import PhoneNumbers from "@/components/PhoneNumbers";
import LinkButton from "@/components/LinkButton";
import { Globe, Linkedin, Facebook, ShoppingBag, Mail, Video, Instagram } from "lucide-react";

const phones = [ 
  { label: "Crevion.ads ", number: "+91 8113908262" },
  { label: "Sabith MT", number: "+91 9526824543" },
  { label: "Dapps Solutions ", number: "+971 542545909" },
];
 
const links = [ 
  { title: "Crevion.ads", url: "https://www.crevionads.com", icon: <Globe className="w-4 h-4" /> },
  { title: "Dapps Solutions", url: "https://www.dappssolutions.com", icon: <Globe className="w-4 h-4" /> },
  { title: "Connect on LinkedIn", url: " https://www.linkedin.com/in/muhammed-sabith-mt-6a63a221a?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: <Linkedin className="w-4 h-4" /> },
  { title: "Follow on Facebook", url: " https://www.facebook.com/share/1Kh2mcCx1g/?mibextid=wwXIfr", icon: <Facebook className="w-4 h-4" /> },
  { title: "Follow on Instagram", url: "https://www.instagram.com/saabith.mt?igsh=djZjcnp6aHR5MXFr&utm_source=qr", icon: <Instagram className="w-4 h-4" /> },
  // { title: "Join My Newsletter", url: "https://newsletter.example.com", icon: <Mail className="w-4 h-4" /> },
  // { title: "Shop My Store", url: "https://store.example.com", icon: <ShoppingBag className="w-4 h-4" /> },
  // { title: "Watch Latest Video", url: "https://youtube.com", icon: <Video className="w-4 h-4" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <ProfileHeader
          name="Muhammed Sabith MT"
          designation="Co-Founder & Marketing manager & Content creator"
          businessName="Crevion.ads LLP & Dapps Solutions LLC"
          email="sabithmanithodika8@gmail.com"
        />  

        {/* <SocialIcons /> */}

        <PhoneNumbers phones={phones} />

        <div className="w-full flex flex-col gap-1 mt-1">
          {links.map((link) => (
            <LinkButton
              key={link.title}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
 
        <p className="text-[10px] text-muted-foreground mt-4">
          Powered by Dapps Solution LLC
        </p>
      </div>
    </div>
  );
};

export default Index;
