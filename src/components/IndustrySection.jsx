import React, { useState } from 'react';

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState('small-business');

  const tabs = [
    {
      id: 'small-business',
      icon: '🛍️',
      label: 'Small Business',
      businesses: [
        {
          icon: '🌿',
          title: 'Landscaping',
          description: 'Appointment bookings, inquiries, availability'
        },
        {
          icon: '🏪',
          title: 'Restaurant',
          description: 'Reservations, inquiries, takeaway orders'
        },
        {
          icon: '📸',
          title: 'Photography Studios',
          description: 'Appointment bookings, inquiries, availability'
        }
      ],
      tech: [
        {
          icon: '📅',
          title: 'Live appointment scheduling',
          description: 'Connect your scheduling software, define the infromation you need Mimis AI to know, and Mimis AI will automatically answer and schedule your customers in.'
        },
        {
          icon: '📞',
          title: 'Automatic phone follow ups',
          description: 'Reduce your no show percentage by letting Mimis AI automatically call, and reschedule appointments.'
        },
        {
          icon: '🔊',
          title: 'FAQ voice engine',
          description: 'Stop wasting time answering questions around pricing, hours, locations and let Mimis AI\'s FAQ engine answer your customers most asked question.'
        }
      ]
    },
    {
      id: 'professional-services',
      icon: '💼',
      label: 'Professional Services',
      businesses: [
        {
          icon: '⚖️',
          title: 'Law Firms',
          description: 'Appointments, legal inquiries, communication'
        },
        {
          icon: '📊',
          title: 'Accounting Firms',
          description: 'Scheduling, tax inquiries, client satisfaction'
        },
        {
          icon: '🤝',
          title: 'Consulting Agencies',
          description: 'Consultation bookings, inquiries, engagement'
        }
      ],
      tech: [
        {
          icon: '🔒',
          title: 'HIPPA Compliance',
          description: 'Enable full HIPPA compliance mode with the click of the button and ensure that you\'re remaining compliant with all regulations.'
        },
        {
          icon: '📱',
          title: 'Appointment reminders',
          description: 'Reduce your no show percentage by letting Mimis AI automatically call, and reschedule appointments.'
        },
        {
          icon: '📝',
          title: 'Enhanced Transcription',
          description: 'Enjoy improved transcription accuracy of industry specific medications and medical and veterinary terminology.'
        }
      ]
    },
    {
      id: 'commerce-saas',
      icon: '🌐',
      label: 'Commerce & SaaS',
      businesses: [
        {
          icon: '📈',
          title: 'Digital Marketing Platforms',
          description: 'Demos, feature inquiries, sales, engagement'
        },
        {
          icon: '📦',
          title: 'Subscription Box Services',
          description: 'Renewals, customization, retention, efficiency'
        },
        {
          icon: '🛒',
          title: 'E-commerce Stores',
          description: 'Appointments, product inquiries, sales'
        }
      ],
      tech: [
        {
          icon: '📚',
          title: 'Knowledge base Integration',
          description: 'Connect your documents and procedures to Mimis AI\'s inbuilt knowledge base to answer even the most technical of questions.'
        },
        {
          icon: '🌐',
          title: 'Web RTC Streaming',
          description: 'Connect Mimis AI directly to your website to help with onboarding, product demos and so much more.'
        },
        {
          icon: '🔄',
          title: 'CRM Integration',
          description: 'Store all of your customer information directly into any CRM with Mimis AI\'s Zapier and webhook integration.'
        }
      ]
    },
    {
      id: 'enterprise',
      icon: '🏢',
      label: 'Enterprise',
      businesses: [
        {
          icon: '🏨',
          title: 'Hospitality',
          description: 'Event bookings, guest inquiries, satisfaction'
        },
        {
          icon: '🏥',
          title: 'Healthcare',
          description: 'Appointments, medical inquiries, patient access'
        },
        {
          icon: '🏦',
          title: 'Financial Institutions',
          description: 'Appointments, inquiries, client satisfaction'
        }
      ],
      tech: [
        {
          icon: '🧠',
          title: 'Custom Language Models',
          description: 'Bring your own LLM\'s or let Mimis AI build a fine tuned LLM specifically on your data.'
        },
        {
          icon: '🔄',
          title: 'Custom Software Integration',
          description: 'Let Mimis AI\'s team of engineers built out specific integrations with your software so it can interact with businesses tools just like a person.'
        },
        {
          icon: '🔒',
          title: 'Private Data and Controls',
          description: 'Lean on Mimis AI\'s private internet backbone and state of the art data security to ensure your data is never used for training or leaves your organization.'
        }
      ]
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          for contact centers serving{' '}
          <span className="relative">
            any industry
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#BD3078]"></div>
          </span>
        </h2>

        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full p-1.5 md:p-2 flex flex-wrap justify-center gap-1.5 md:gap-2 shadow-lg border border-gray-100">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-1 md:gap-2 transition-all text-sm md:text-base ${
                  activeTab === tab.id 
                    ? 'bg-[#64007B] text-white' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-base md:text-xl">{tab.icon}</span>
                <span className="font-medium whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Some of the businesses we serve...</h3>
            <div className="space-y-6">
              {currentTab.businesses.map((business, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg border-2 border-[#64007B] bg-white"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{business.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{business.title}</h4>
                      <p className="text-gray-600">{business.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Tech we have built for you...</h3>
            <div className="space-y-6">
              {currentTab.tech.map((tech, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-white shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{tech.title}</h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;