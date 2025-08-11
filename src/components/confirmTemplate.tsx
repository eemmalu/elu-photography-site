import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Thanks for your inquiry, {firstName}!</h1>
    </div>
  );
}