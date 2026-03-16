import { Globe, Linkedin, Facebook, Instagram, LucideIcon } from "lucide-react";

export type SocialType = "website" | "linkedin" | "facebook" | "instagram";

export interface SocialLink {
  type: SocialType;
  url: string;
}

export interface BusinessCardProps {
  name: string;
  socials: SocialLink[];
}

const iconMap: Record<SocialType, LucideIcon> = {
  website: Globe,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

const BusinessCard = ({ name, socials }: BusinessCardProps) => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-4 bg-yellow-400 rounded-2xl border border-yellow-500">
      <span className="font-semibold text-sm text-gray-900">{name}</span>
      <div className="flex items-center gap-3">
        {socials.map((social) => {
          const Icon = iconMap[social.type];
         return (
  <a
    key={social.type}
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 hover:text-gray-600 transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);
        })}
      </div>
    </div>
  );
};

export default BusinessCard;