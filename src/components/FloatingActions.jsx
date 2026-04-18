import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingActions = () => {
  const actions = [
    {
      icon: <Phone size={24} />,
      label: "Call Us",
      href: "tel:+917610000127",
      color: "bg-purple-600",
      shadow: "shadow-purple-500/40",
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      href: "https://wa.me/917610000127",
      color: "bg-[#25D366]",
      shadow: "shadow-green-500/40",
    },
  ];

  return (
    <div className="fixed bottom-8 left-6 md:bottom-10 md:left-10 z-[200] flex flex-col gap-4">
      {actions.map((action, index) => (
        <motion.a
          key={index}
          href={action.href}
          target={index === 1 ? "_blank" : undefined}
          rel={index === 1 ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full text-white ${action.color} ${action.shadow} shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300`}
        >
          {/* Pulse Effect */}
          <span className={`absolute inset-0 rounded-full ${action.color} opacity-40 animate-ping -z-10`}></span>
          
          {action.icon}

          {/* Label Tooltip */}
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-white/10">
            {action.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingActions;
