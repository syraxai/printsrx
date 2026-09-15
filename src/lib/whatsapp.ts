import { business } from "@/src/config/business";
export function whatsappUrl(
  message = "Olá! Conheci a SRX 3D pelo site e gostaria de solicitar um orçamento.",
) {
  const phone = business.whatsapp.replace(/\D/g, "");
  return phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : undefined;
}
