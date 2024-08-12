interface EmailTemplateProps {
  firstName: string;
}

export const WelcomeEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Someone from our team will reach out to schedule a demo with you.</p>
  </div>
);
