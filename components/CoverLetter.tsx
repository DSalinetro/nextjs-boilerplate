import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Globe, BookOpen } from "lucide-react";

interface CoverLetterProps {
  companyName?: string;
  positionTitle?: string;
  hiringManager?: string;
}

export function CoverLetter({ 
  companyName = "[Company Name]", 
  positionTitle = "[Position Title]",
  hiringManager = "Hiring Manager"
}: CoverLetterProps) {
  const personalInfo = {
    name: "Danielle Salinetro",
    title: "Creative Designer & Researcher | Empathy-Driven Branding, UX & Content",
    email: "dsalinetro@pm.me",
    phone: "636.252.5894",
    location: "Kansas City, MO (Remote)",
    linkedin: "linkedin.com/in/danielle-salinetro",
    portfolio: "daniellesalinetro.design",
    medium: "medium.com/@dsalinetro"
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-background print:p-4 print:break-inside-auto print:orphans-3 print:widows-3">
      {/* Header */}
      <div className="text-center mb-8 print:mb-6 print:break-inside-avoid">
        <h1 className="mb-2">{personalInfo.name}</h1>
        <h2 className="text-muted-foreground mb-4 print:mb-3">{personalInfo.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-4 print:gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4 print:h-3 print:w-3" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 print:h-3 print:w-3" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 print:h-3 print:w-3" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-4 w-4 print:h-3 print:w-3" />
            <span>Portfolio: {personalInfo.portfolio}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 print:h-3 print:w-3" />
            <span>Medium: {personalInfo.medium}</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="h-4 w-4 print:h-3 print:w-3" />
            <span>{personalInfo.linkedin}</span>
          </div>
        </div>
      </div>

      <Separator className="mb-8 print:separator" />

      {/* Letter Content */}
      <div className="space-y-6 print:space-y-3">
        {/* Date and Address */}
        <div className="text-right mb-8 print:mb-3 print:break-inside-avoid">
          <p className="text-muted-foreground">{currentDate}</p>
        </div>

        <div className="mb-8 print:mb-3 print:break-inside-avoid">
          <p>Dear {hiringManager},</p>
        </div>

        {/* Opening Paragraph */}
        <Card className="print:no-shadow print:border-thin print:break-inside-avoid print:mb-3">
          <CardContent className="p-6 print:p-3">
            <p className="leading-relaxed print:leading-snug">
              I am writing to express my strong interest in the {positionTitle} position at {companyName}. 
              As a creative professional who blends design, research, and storytelling to create human-centered solutions, 
              I am excited about the opportunity to contribute to your team's mission of creating meaningful user experiences 
              that drive engagement and impact.
            </p>
          </CardContent>
        </Card>

        {/* Experience Paragraph */}
        <Card className="print:no-shadow print:border-thin print:break-inside-avoid print:mb-3">
          <CardContent className="p-6 print:p-3">
            <p className="leading-relaxed print:leading-snug mb-4 print:mb-2">
              My unique background combines extensive creative experience with robust analytical skills. As the Founder & 
              Creative Director of AdorablyInkedxo since 2013, I have built a sustainable fashion brand from concept to 
              launch, designing complete brand ecosystems including packaging, photography, and e-commerce platforms. 
              This hands-on experience has taught me the importance of user-centered design in driving conversions and 
              building brand loyalty.
            </p>
            <p className="leading-relaxed print:leading-snug">
              My analytical background from roles at Moody's Analytics and as an Appraiser has strengthened my ability 
              to translate complex data into compelling visual narratives. I've collaborated with C-suite stakeholders, 
              presenting findings with clarity and visual impact, skills that directly translate to creating user-friendly 
              design solutions that resonate with diverse audiences.
            </p>
          </CardContent>
        </Card>

        {/* Skills and Passion Paragraph */}
        <Card className="print:no-shadow print:border-thin print:break-inside-avoid print:mb-3">
          <CardContent className="p-6 print:p-3">
            <p className="leading-relaxed print:leading-snug mb-4 print:mb-2">
              What sets me apart is my commitment to empathy-driven design. Through my published work on Medium, including 
              "The Empathy Audit" series and "Empathy in Design: Transforming Struggles into Strength," I have developed 
              frameworks for evaluating design's human impact. My Google UX Design Certificate, combined with proficiency 
              in Adobe Creative Suite, Figma, and modern web technologies, ensures I can contribute immediately to your 
              design and development processes.
            </p>
            <p className="leading-relaxed print:leading-snug">
              My freelance work has allowed me to design websites, brand systems, and marketing campaigns for 20+ clients 
              across tech, healthcare, and retail industries. This diverse experience has honed my ability to adapt design 
              solutions to different business needs while maintaining user-centered principles.
            </p>
          </CardContent>
        </Card>

        {/* Closing Paragraph */}
        <Card className="print:no-shadow print:border-thin print:break-inside-avoid print:mb-3">
          <CardContent className="p-6 print:p-3">
            <p className="leading-relaxed print:leading-snug mb-4 print:mb-2">
              I am particularly drawn to {companyName} because of your commitment to innovative design solutions and 
              user experience excellence. I am excited about the possibility of bringing my unique blend of creative 
              vision, research acumen, and empathy-driven approach to your team.
            </p>
            <p className="leading-relaxed print:leading-snug">
              I would welcome the opportunity to discuss how my experience in building brands, conducting user research, 
              and creating compelling visual narratives can contribute to {companyName}'s continued success. Thank you 
              for your time and consideration.
            </p>
          </CardContent>
        </Card>

        {/* Sign-off */}
        <div className="mt-8 print:mt-4 print:break-inside-avoid">
          <p className="mb-4 print:mb-2">Sincerely,</p>
          <p className="mb-2 print:mb-1">{personalInfo.name}</p>
          <div className="text-sm text-muted-foreground print:text-xs">
            <p>Portfolio: {personalInfo.portfolio}</p>
            <p>Medium: {personalInfo.medium}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
