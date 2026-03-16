import { Phone,  } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface PhoneEntry {
  label: string;
  number: string;
}

interface PhoneNumbersProps {
  phones: PhoneEntry[];
} 
 
const PhoneNumbers = ({ phones }: PhoneNumbersProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Contact Numbers
      </h3>
      {phones.map((phone) => ( 
        <div
          key={phone.label}
          className="flex items-center justify-between w-full px-5 py-2 bg-link border border-link-border rounded-2xl"
        >
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">{phone.label}</span>
            <span className="text-sm font-medium text-foreground">{phone.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${phone.number.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(142,70%,45%)] text-white hover:bg-[hsl(142,70%,40%)] transition-colors"
              aria-label={`WhatsApp ${phone.label}`}
            >
             <FaWhatsapp className="text-green-100 text-2xl" />
            </a>
            <a
              href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label={`Call ${phone.label}`}
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneNumbers;
