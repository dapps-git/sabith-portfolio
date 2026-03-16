import { CheckCircle, MapPin, Mail } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";

interface ProfileHeaderProps {
  name: string;
  designation: string;
  businessName: string; 
  email?: string;
}

const ProfileHeader = ({ name, designation, businessName, email }: ProfileHeaderProps) => {
  return (
    <div className="flex text-white flex-col items-center gap-4 py-6 px-4">
      {/* Avatar - clean, no bold border */}
      <div className="relative">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
         <img
  src={avatarImg}
  alt={name} 
  className="w-full h-full object-cover object-[center_-10%] scale-110"
/>
        </div>
        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full" />
      </div>

      {/* Info */}
      <div className="text-center  space-y-1">
        <div className="flex items-center justify-center gap-1.5">
          <h1 className="text-2xl font-bold tracking-tight text-white  text-foreground">{name}</h1>
          <CheckCircle className="w-5 h-5 text-verified fill-verified stroke-primary-foreground flex-shrink-0" />
        </div>

        <p className="text-sm text-white font-semibold text-primary">{designation}</p>

        <div className="flex items-center text-white  justify-center gap-1 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <p className="text-sm">{businessName}</p>
        </div>

        {email && (
          <div className="flex text-white  items-center justify-center gap-1 text-muted-foreground">
            <Mail className="w-3.5 h-3.5" />
            <p className="text-sm">{email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;