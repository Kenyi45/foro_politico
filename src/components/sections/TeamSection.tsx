import React from 'react';
import { useForumStore } from '../../stores/useForumStore';
import Card from '../common/Card';
import { useLanguage } from '../../contexts/LanguageContext';

const TeamSection: React.FC = () => {
  const { organizers } = useForumStore();
  const { t } = useLanguage();

  // Enhanced team with more detailed information
  const enhancedTeam = organizers.map((member, index) => ({
    ...member,
    achievements: [
      "Consultor internacional en desarrollo político",
      "Ex-Director de programas juveniles OEA", 
      "Autor de 3 libros sobre liderazgo político"
    ],
    languages: ["Español", "Inglés", "Francés"],
    socialMedia: {
      twitter: `@${member.name.toLowerCase().replace(/\s+/g, '')}`,
      linkedin: `/in/${member.name.toLowerCase().replace(/\s+/g, '-')}`,
      email: `${member.name.toLowerCase().replace(/\s+/g, '.')}@forumjp.org`
    }
  }));

  return (
    <section className="section-padding bg-white" id="equipo">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            <span className="badge-text">{t('team.badge')}</span>
          </div>
          
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            {t('team.title')}{' '}
            <span className="text-primary-700 font-extrabold">
              {t('team.title.highlight')}
            </span>
          </h2>
          
          <p className="subtitle-section text-neutral-600">
            {t('team.description')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {enhancedTeam.map((member, index) => (
            <Card 
              key={member.id}
              variant="elevated"
              hover="lift"
              className="group overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Member Photo */}
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-1">{member.position}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.country}</p>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-3">{t('team.achievements')}</h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">{t('team.languages')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.languages.map((language) => (
                      <span
                        key={language}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">{t('team.social')}</h4>
                  <div className="flex space-x-2">
                    <a
                      href={`https://twitter.com/${member.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <span className="text-xs">T</span>
                    </a>
                    <a
                      href={`https://linkedin.com${member.socialMedia.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                    >
                      <span className="text-xs">L</span>
                    </a>
                    <a
                      href={`mailto:${member.socialMedia.email}`}
                      className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-xs">@</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;