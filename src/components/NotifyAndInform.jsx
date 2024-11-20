import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

const NotifyAndInform = () => {
  const audioUrl = "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/dc2b725a-444c-4e0a-92c8-1899d2c396bf.mp3?alt=media&token=0be73900-f5a9-4633-b83b-df1b941f5a86";
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/Photo_6.webp?alt=media&token=cb795b64-6186-4177-b522-093d7334b9fc";

  return (
    <div className="bg-gradient-to-br from-[#DFF2FF] to-[#F0F9FF] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[540px] h-fit hidden lg:block"
        >
          <img
            src={imageUrl}
            alt="Woman on phone with laptop"
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#DFF2FF]/20 to-[#F0F9FF]/20 rounded-lg pointer-events-none"></div>
        </motion.div>

        <div className="max-w-xl w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-[1.1] mb-6"
          >
            Notify and
            <br />
            Inform
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#425466] text-xl md:text-2xl leading-relaxed max-w-2xl mb-12"
          >
            Remind your customers about upcoming events, deliveries or doctor appointments.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            <h3 className="text-lg font-medium text-[#0A2540]">As a call result Mimis AI</h3>
            <ul className="list-disc pl-6 space-y-3 text-[#425466]">
              <li>Sends an SMS message with information</li>
              <li>Updates data in the CRM system if plans have changed</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <AudioPlayer 
              audioUrl={audioUrl}
              duration={72}
            />
          </motion.div>

          <div className="h-px bg-gray-200 my-8"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-8 mb-8"
          >
            <div>
              <h4 className="text-3xl font-bold text-[#0A2540] mb-2">1.5x</h4>
              <p className="text-[#425466]">increased attendance</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#0A2540] mb-2">30%</h4>
              <p className="text-[#425466]">more orders</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="https://calendly.com/mimis-ai/30min"
              className="bg-[#64007B] text-white px-6 py-3 rounded-full hover:bg-[#C80D83] transition-colors inline-flex items-center"
            >
              Learn more
              <svg className="ml-2 w-5 h-5" viewBox="64 64 896 896" fill="currentColor">
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotifyAndInform;