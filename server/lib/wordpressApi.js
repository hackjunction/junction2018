import axios from 'axios';
import { WORDPRESS_BASE_URL } from '../config';

const wordpressApiClient = axios.create({
  baseURL: `${WORDPRESS_BASE_URL}/wp-json/wp/v2`,
  timeout: 50000
});

wordpressApiClient.interceptors.request.use(config => {
  return config;
});

export const getPosts = () => wordpressApiClient.get('/posts&per_page=100');

export const getTracks = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=2&per_page=100')
    .then(tracks => tracks.data)
    .then(tracks => {
      return tracks.map(track => {
        return {
          title: track.title.rendered,
          content: track.content.rendered,
          description: track.acf.description,
          image: track.acf.image,
          year: track.acf.year,
          challenges: track.acf.challenges
            ? track.acf.challenges.map(challenge => {
                return {
                  title: challenge.post_title,
                  content: challenge.post_content,
                  id: challenge.ID
                };
              })
            : [],
          mentors: track.acf.mentors
            ? track.acf.mentors.map(mentor => {
                return {
                  title: mentor.post_title,
                  content: mentor.post_content,
                  id: mentor.ID
                };
              })
            : [],
          mentor_label: track.acf.mentor_label,
          main_partners: track.main_partners,
          partners: track.partners,
          slug: track.slug
        };
      });
    });
};

export const getChallenge = id => {
  return wordpressApiClient
    .get('/posts' + (isNaN(id) ? '?slug=' : '/') + id)
    .then(challenge => (isNaN(id) ? challenge.data[0] : challenge.data))
    .then(challenge => {
      if (challenge.status === 404) {
        return {
          id,
          status: 404
        };
      }
      return {
        id: challenge.id,
        slug: challenge.slug,
        title: challenge.title.rendered,
        description: challenge.acf.description,
        text: challenge.content.rendered,
        image: challenge.acf.image,
        criteria: challenge.acf.criteria,
        prize: challenge.acf.prize,
        partners:
          challenge.acf.partner &&
          challenge.acf.partner.map(partner => {
            return { id: partner.ID, name: partner.post_title };
          }),
        content: challenge.acf.content,
        challenge_bg: challenge.acf.challenge_bg,
        challenge_type: challenge.acf.challenge_type,
        year: challenge.acf.year
      };
    })
    .catch(error => {
      console.log('error:', error);
      if (error.response && error.response.status === 404) {
        return {
          id,
          status: 404
        };
      }
    });
};

export const getChallenges = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=4&per_page=100')
    .then(challenges => challenges.data)
    .then(challenges => {
      return challenges.map(challenge => {
        return {
          id: challenge.id,
          slug: challenge.slug,
          title: challenge.title.rendered,
          description: challenge.acf.description,
          text: challenge.content.rendered,
          image: challenge.acf.image,
          criteria: challenge.acf.criteria,
          prize: challenge.acf.prize,
          partners:
            challenge.acf.partner &&
            challenge.acf.partner.map(partner => {
              return { id: partner.ID, name: partner.post_title };
            }),
          content: challenge.acf.content,
          challenge_bg: challenge.acf.challenge_bg,
          challenge_type: challenge.acf.challenge_type,
          year: challenge.acf.year
        };
      });
    });
};

var mapMentor = mentor => {
  return {
    id: mentor.id,
    slug: mentor.slug,
    title: mentor.title.rendered,
    text: mentor.content.rendered,
    content: mentor.acf.content,
    partners:
      mentor.acf.partners &&
      mentor.acf.partners.map(partner => {
        return { id: partner.ID, name: partner.post_title };
      }),
    mentor_bg: mentor.acf.mentor_bg,
    year: mentor.acf.year
  };
};
export const getMentor = id => {
  return wordpressApiClient
    .get('/posts' + (isNaN(id) ? '?slug=' : '/') + id)
    .then(mentor => (isNaN(id) ? mentor.data[0] : mentor.data))
    .then(mentor => {
      if (mentor.status === 404) {
        return {
          id,
          status: 404
        };
      }
      return mapMentor(mentor);
    })
    .catch(error => {
      console.log('error:', error);
      if (error.response && error.response.status === 404) {
        return {
          id,
          status: 404
        };
      }
    });
};

export const getMentors = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=10&per_page=100')
    .then(mentors => mentors.data)
    .then(mentors => {
      return mentors.map(mapMentor);
    });
};

export const getFaqs = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=8&per_page=100')
    .then(faqs => faqs.data)
    .then(faqs => {
      return faqs.map(faq => {
        return {
          id: faq.id,
          slug: faq.slug,
          title: faq.title.rendered,
          question: faq.title.rendered,
          answer: faq.content,
          year: faq.acf.year
        };
      });
    });
};

export const getJobs = () => {
  var currentTime = new Date();
  currentTime.setUTCHours(0, 0, 0, 0);
  return wordpressApiClient
    .get('/posts?_embed&categories=7&per_page=100')
    .then(jobs => jobs.data)
    .then(jobs => {
      return jobs
        .map(job => {
          return {
            title: job.acf.title,
            content: job.content.rendered,
            partner: job.acf.partner,
            application_end_date: job.acf.application_end_date,
            partner_logo: job.acf.partner_logo,
            // Example input: 'HTML<br />\r\nCSS<br />\r\nJavaScript<br />\r\n'
            // Example output: 'HTML|CSS|Javscript'
            skills: job.acf.skills
              .split('<br />\r\n')
              .filter(sk => sk !== '')
              .join(' | '),
            link: job.acf.link
          };
        })
        .filter(job => {
          var jobDate = new Date(job.application_end_date);
          jobDate.setUTCHours(0, 0, 0, 0);
          return currentTime <= jobDate;
        });
    });
};

export const getCalendarEvents = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=9&per_page=100')
    .then(calendarEvents => calendarEvents.data)
    .then(calendarEvents => {
      return calendarEvents.map(calendarEvent => {
        return {
          id: calendarEvent.id,
          slug: calendarEvent.slug,
          title: calendarEvent.title.rendered,
          logo: calendarEvent.acf.logo,
          category: calendarEvent.acf.category,
          start_date: calendarEvent.acf.start_date,
          start_time: calendarEvent.acf.start_time,
          end_date: calendarEvent.acf.end_date,
          end_time: calendarEvent.acf.end_time,
          partner: calendarEvent.acf.partner,
          content: calendarEvent.content,
          background_image: calendarEvent.acf.background_image,
          link_1: calendarEvent.acf.link_1,
          link_2: calendarEvent.acf.link_2,
          link_1_text: calendarEvent.acf.link_1_text,
          link_2_text: calendarEvent.acf.link_2_text
        };
      });
    });
};

export const getPartners = year => {
  return wordpressApiClient
    .get('/posts?_embed&categories=3&per_page=100')
    .then(partners => partners.data)
    .then(partners => {
      return partners.map(partner => {
        return {
          id: partner.id,
          name: partner.title.rendered,
          logo: partner.acf.logo,
          url: partner.acf.url,
          year: partner.acf.year,
          priority: partner.acf.priority
        };
      });
    })
    .then(partners => {
      if (year) {
        return partners.filter(partner => partner.year === year);
      } else {
        return partners;
      }
    });
};
