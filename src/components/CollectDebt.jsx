import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

const CollectDebt = () => {
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/Photo_8.webp?alt=media&token=467bb41b-f421-42a0-9177-7c7df44cfbd5";
  const audioUrl = "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/collect%20debts.mp3?alt=media&token=a1928385-4874-4ca1-8edf-92dbb5d17fc2";

  return (
    <div className="bg-gradient-to-br from-[#FCE1AF] to-[#FFF6E4] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-xl w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium mb-6"
          >
            Collect Debts
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed mb-12"
          >
            Our Voice Assistant covers all stages of the process, including in-time notifications, soft collection, debt restructuring and information updates.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-lg font-medium mb-4">As a call result Mimis AI</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Increases debt recovery without increasing the headcount</li>
              <li>Offers several options for debt repayment</li>
              <li>Saves operators from burnout</li>
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
              duration={64}
            />
          </motion.div>

          <div className="h-px bg-gray-200 my-8"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h4 className="text-lg font-medium mb-1">Up to 2 times</h4>
            <p className="text-sm text-gray-700">communication costs down</p>
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

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full lg:w-[540px] h-fit hidden lg:block"
        >
          <img
            src={imageUrl}
            alt="Man writing at desk"
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FCE1AF]/20 to-[#FFF6E4]/20 rounded-lg pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectDebt;