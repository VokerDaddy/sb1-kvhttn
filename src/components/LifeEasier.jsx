import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LifeEasier() {
  const [categories] = useState([
    {
      title: 'Get setup in a minute',
      description: 'Let Mimis AI connect to your website to build an agent in minutes.',
      icon: 'icon-countdown-timer',
      image: '/images/tfr-4.webp'
    },
    {
      title: 'Integrate with your tools',
      description: 'Let Mimis AI integrate with your software so that it can do things live on call.',
      icon: 'icon-settings1',
      image: '/images/tfr-3.webp'
    },
    {
      title: 'Transfer calls like a human',
      description: 'Let Mimis AI\'s transfer calls in a natural conversational style.',
      icon: 'icon-phone-handset',
      image: '/images/tfr-1.webp'
    },
    {
      title: 'Analyze every call',
      description: 'View call transcriptions and AI powered analytics.',
      icon: 'icon-database1',
      image: '/images/dsda.webp'
    }
  ]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#230635] mb-6">
            Your life just got easier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet <b>Mimis AI</b>, an AI answering system that talks just like a person, all while never–forgetting information, having a bad day, or, well, sleeping.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <Tab.Group vertical>
            <Tab.List className="flex flex-col space-y-2 lg:w-1/2">
              {categories.map((category, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      'flex items-start p-6 text-left rounded-lg transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BD3078]',
                      selected
                        ? 'bg-[#F7F7F7] shadow-lg'
                        : 'bg-white hover:bg-gray-50'
                    )
                  }
                >
                  <div className="flex items-start">
                    <span className={`text-[#BD3078] text-2xl mr-4 ${category.icon}`} />
                    <div>
                      <h3 className="text-xl font-semibold text-[#230635]">{category.title}</h3>
                      <p className="mt-2 text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="lg:w-1/2">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BD3078]'
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}