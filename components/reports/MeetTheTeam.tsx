'use client';

import { useState } from 'react';
import { Grid, Card, CardContent, CardTitle, CardDescription } from '@/components/ui';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  credentials: string[];
}

interface MeetTheTeamProps {
  teamMembers: TeamMember[];
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="border border-[var(--border)] h-full">
      <CardContent className="space-y-4 p-6">
        {/* Header with profile image + name/role */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--primary)]"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xl font-semibold">
                {getInitials(member.name)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
            <CardDescription className="text-sm">{member.role}</CardDescription>
          </div>
        </div>

        {/* Bio - short or full depending on state */}
        <div className="text-[var(--muted-foreground)]">
          <p className="text-sm leading-relaxed">
            {isExpanded ? member.fullBio : member.shortBio}
          </p>
        </div>

        {/* Expanded content: expertise + credentials */}
        {isExpanded && (
          <div className="space-y-4 animate-fadeIn pt-2 border-t border-[var(--border)]">
            {member.expertise && member.expertise.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-[var(--foreground)] mb-2">
                  Areas of Expertise
                </h4>
                <ul className="space-y-1">
                  {member.expertise.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                    >
                      <svg
                        className="w-4 h-4 text-[var(--primary)] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.credentials && member.credentials.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-[var(--foreground)] mb-2">
                  Credentials & Education
                </h4>
                <ul className="space-y-1">
                  {member.credentials.map((cred, idx) => (
                    <li key={idx} className="text-sm text-[var(--muted-foreground)]">
                      • {cred}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Expand/Collapse Button */}
        {/* <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity pt-2"
        >
          {isExpanded ? 'Show Less' : 'Read Full Bio'}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button> */}
      </CardContent>
    </Card>
  );
}

export default function MeetTheTeam({ teamMembers }: MeetTheTeamProps) {
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section id="meet-the-team" className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-bold text-[var(--foreground)] mb-3">
        Meet the Team
      </h2>
      <p className="text-[var(--muted-foreground)] mb-8">
        This report was prepared by our expert analysts with deep industry knowledge and
        research experience.
      </p>

      <Grid cols={2} gap="lg">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </Grid>
    </section>
  );
}
