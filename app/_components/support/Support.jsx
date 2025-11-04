"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Coffee, CreditCard, Smartphone } from "lucide-react";

// Support data array
const supportDataArray = {
  hero: {
    mainTitle: "Support Build Bout",
    explanation: "Help us grow our community and continue building amazing things together. Your support makes a difference!",
  },
  supportOptions: [
    {
      id: "buymeacoffee",
      type: "buymeacoffee",
      icon: "Coffee",
      title: "Buy Us a Coffee",
      description: "Support our community with a small donation. Every contribution helps us grow!",
      url: "https://www.buymeacoffee.com/buildbout",
      buttonImage: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
      buttonImageAlt: "Buy Me A Coffee",
    },
    {
      id: "paypal",
      type: "paypal",
      icon: "CreditCard",
      title: "PayPal",
      description: "Make a secure donation through PayPal. Every contribution helps us grow!",
      url: "https://paypal.me/buildbout",
      buttonText: "Donate via PayPal",
    },
    {
      id: "mpesa",
      type: "mpesa",
      icon: "Smartphone",
      title: "M-Pesa",
      description: "Support us via M-Pesa through our secure payment page. Every contribution helps us grow!",
      paymentUrl: "https://short.payhero.co.ke/s/WcfczMwv7pW8iqGZyU9ooN",
      buttonText: "Pay with M-Pesa",
    },
  ],
  thankYou: {
    title: "Thank You for Your Support!",
    message: "Your contributions help us maintain our co-working space, organize events, and support builders in our community. Every donation, no matter how small, makes a meaningful impact.",
    contactText: "Have questions about supporting us?",
    contactLink: "/contact",
  },
};

const Support = () => {
  const [supportData, setSupportData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load support data
  useEffect(() => {
    const loadSupportData = () => {
      setIsLoading(true);
      try {
        // Simulate async loading with a small delay
        setTimeout(() => {
          setSupportData(supportDataArray);
          setIsLoading(false);
        }, 300);
      } catch (err) {
        setError("Failed to load support content.");
        setIsLoading(false);
      }
    };

    loadSupportData();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Icon component mapping
  const iconMap = {
    Coffee,
    CreditCard,
    Smartphone,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black pt-12 md:pt-10 md:pb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Centered text layout */}
          <div className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center">
            <h3 className="text-3xl txtBtn font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-1">
              {supportData?.hero?.mainTitle}
            </h3>
            <p className="text-xl text-gray-200 pt-2 max-w-2xl">
              {supportData?.hero?.explanation}
            </p>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-12 bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl txtBtn font-semibold text-center mb-12">Ways to Support Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportData?.supportOptions?.map((option) => {
              const IconComponent = iconMap[option.icon];
              return (
                <div
                  key={option.id}
                  className="bg-black rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}
                >
                  <div className="flex justify-center mb-4">
                    {IconComponent && <IconComponent className="w-12 h-12 txtBtn" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>

                  {option.type === "buymeacoffee" && option.buttonImage && (
                    <div className="flex justify-center">
                      <a
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-105"
                      >
                        <img
                          src={option.buttonImage}
                          alt={option.buttonImageAlt || "Buy Me A Coffee"}
                          style={{ height: '60px', width: '217px' }}
                          className="mx-auto"
                        />
                      </a>
                    </div>
                  )}

                  {option.type === "paypal" && (
                    <div>
                      <style dangerouslySetInnerHTML={{__html: `
                        .pp-C9BCRJUCVAT96 {
                          text-align: center;
                          border: none;
                          border-radius: 0.25rem;
                          min-width: 11.625rem;
                          padding: 0 2rem;
                          height: 2.625rem;
                          font-weight: bold;
                          background-color: #d95404;
                          color: #ffffff;
                          font-family: "Helvetica Neue", Arial, sans-serif;
                          font-size: 1rem;
                          line-height: 1.25rem;
                          cursor: pointer;
                          transition: background-color 0.3s ease;
                        }
                        .pp-C9BCRJUCVAT96:hover {
                          background-color: #b84303;
                        }
                      `}} />
                      <form 
                        action="https://www.paypal.com/ncp/payment/C9BCRJUCVAT96" 
                        method="post" 
                        target="_blank" 
                        style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem' }}
                      >
                        <input 
                          className="pp-C9BCRJUCVAT96" 
                          type="submit" 
                          value="Donate" 
                        />
                        <img 
                          src="https://www.paypalobjects.com/images/Debit_Credit.svg" 
                          alt="cards" 
                        />
                        <section style={{ fontSize: '0.75rem' }}>
                          Powered by{' '}
                          <img 
                            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
                            alt="paypal" 
                            style={{ height: '0.875rem', verticalAlign: 'middle', color: 'white'
                             }}
                          />
                        </section>
                      </form>
                    </div>
                  )}

                  {option.type === "mpesa" && (
                    <div className="flex justify-center">
                      <a
                        href={option.paymentUrl || "https://short.payhero.co.ke/s/WcfczMwv7pW8iqGZyU9ooN"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 min-w-[200px] text-white border-2"
                        style={{ backgroundColor: '#d95404', borderColor: '#d95404' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#b84303';
                          e.currentTarget.style.borderColor = '#b84303';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#d95404';
                          e.currentTarget.style.borderColor = '#d95404';
                        }}
                      >
                        <Smartphone className="w-5 h-5" />
                        <span>{option.buttonText || "Pay with M-Pesa"}</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Support Message */}
          {supportData?.thankYou && (
            <div className="mt-16 text-center">
              <div className="bg-black rounded-lg p-8 max-w-3xl mx-auto border border-gray-700">
                <Heart className="w-10 h-10 txtBtn mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{supportData.thankYou.title}</h3>
                <p className="text-gray-300 mb-6">
                  {supportData.thankYou.message}
                </p>
                <p className="text-gray-400 text-sm">
                  {supportData.thankYou.contactText}{" "}
                  <Link href={supportData.thankYou.contactLink} className="txtBtn hover:text-amber-400 underline">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Support;

