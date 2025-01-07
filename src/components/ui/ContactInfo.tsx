import React from 'react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

export default function ContactInfo({ icon, title, content, href }: ContactInfoProps) {
  const ContentWrapper = href ? 'a' : 'div';
  
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <ContentWrapper
          href={href}
          className={href ? 'text-blue-600 hover:text-blue-700' : 'text-gray-600'}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}