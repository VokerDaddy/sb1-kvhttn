import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const businesses = [
  {
    icon: "🏪",
    title: "Small Business",
    items: [
      { name: "Barbershops", description: "Appointment bookings, inquiries, availability" },
      { name: "Landscaping", description: "Appointment bookings, inquiries, availability" },
      { name: "Restaurant", description: "Reservations, inquiries, takeaway orders" },
      { name: "Photography Studios", description: "Appointment bookings, inquiries, availability" },
      { name: "Spa and Wellness", description: "Appointment bookings, inquiries, availability" }
    ]
  },
  {
    icon: "💼",
    title: "Professional Services",
    items: [
      { name: "Law Firms", description: "Appointments, legal inquiries, communication" },
      { name: "Accounting Firms", description: "Scheduling, tax inquiries, client satisfaction" },
      { name: "Consulting Agencies", description: "Consultation bookings, inquiries, engagement" },
      { name: "Marketing Agencies", description: "Appointments, inquiries, client communication" },
      { name: "Real Estate", description: "Listing inquiries, communication, efficiency" }
    ]
  }
];

const BusinessCard = ({ name, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg mb-4"
  >
    <h4 className="text-xl font-semibold mb-2">{name}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function BusinessTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#230635] mb-12"
        >
          For contact centers serving <span className="text-[#BD3078]">any industry</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {businesses.map((business, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl">{business.icon}</span>
                <h3 className="text-2xl font-bold text-[#230635]">{business.title}</h3>
              </div>
              <div className="space-y-4">
                {business.items.map((item, itemIndex) => (
                  <BusinessCard key={itemIndex} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}