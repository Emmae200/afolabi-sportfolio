export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  
  role: string;
  platform: string;
  tools: string;
  heroImage: string;
  carouselImages: string[];
  feature1Image: string;
  feature1Label: string;
  feature2Image: string;
  feature2Label: string;
  featureRowTitle: string;
  featureRowText: string;
  featureRowImage?: string;
  finalGallery: string;
  overview: string;
  color1: string;
  color2: string;
  color3: string;
  typography: string;
  typographyDesc: string;
}

export const projects: Project[] = [
  {
    id: 'uniflow',
    title: 'UniFlow',
    description: 'An AI-powered productivity app helping university students stay organized and focused.',
    category: 'Mobile App Design',
    year: '2026',
    image: '/splash.png',
    
    role: 'UI Design',
    platform: 'Mobile App',
    tools: 'Figma',
    heroImage: '/splash.png',
    carouselImages: [
      '/home w ruby.png',
      '/splash.png',
      '/Onboarding Page 1-portrait.png',
      '/onboarding Page 2-portrait.png',
      '/Sign Up-portrait.png',
      '/Task Overview-portrait.png',
      '/Notes-portrait.png',
      '/Plans-portrait.png'
    ],
    feature1Image: '/Task Overview-portrait.png',
    feature1Label: 'Task Management System',
    feature2Image: '/Notes-portrait.png',
    feature2Label: 'Study Notes Interface',
    featureRowTitle: 'Smart Integration',
    featureRowText: 'An intelligent overview prioritizing what matters most. The layout uses generous whitespace to prevent information overload, keeping the interface feeling effortless.',
    finalGallery: '/Onboarding Page 1-portrait.png',
    overview: 'UniFlow re-imagines the student experience by consolidating scheduling, tasks, and study sessions into one intelligent interface. The goal was to reduce cognitive load and create a calm, focused environment where students can simply get work done, assisted by seamless AI integration.',
    color1: '#FFFFFF', color2: '#2ECA7F', color3: '#1A3626',
    typography: 'Nunito',
    typographyDesc: 'Friendly, rounded, and approachable.'
  },
  {
    id: 'luncheon',
    title: 'Luncheon',
    description: 'A modern, premium date discovery platform and community app.',
    category: 'UI/UX Design',
    year: '2025',
    image: '/Landing page-front.png',
    
    role: 'UI Design',
    platform: 'Web App',
    tools: 'Figma, React',
    heroImage: '/Luncheon_Date_UI_Design_2560x1664_TopAligned-front.png',
    carouselImages: [
      '/Luncheon_Date_UI_Design_2560x1664_TopAligned-front.png',
      '/Landing page-front.png',
      '/Sign In-front.png',
      '/Onboarding01_2560x1664-front.png'
    ],
    feature1Image: '/Landing page-front.png',
    feature1Label: 'Landing Page',
    feature2Image: '/Sign In-front.png',
    feature2Label: 'Authentication Flow',
    featureRowTitle: 'Editorial Welcome Experience',
    featureRowText: 'Designed to create an immediate emotional connection. The interface utilizes a striking, editorial aesthetic with refined typography and evocative imagery to invite users into the experience.',
    finalGallery: '/Onboarding01_2560x1664-front.png',
    overview: 'Luncheon started as a side project for my department to help students find a date for our upcoming departmental luncheon. I designed the interface to lean into a highly polished, editorial aesthetic with refined typography and generous whitespace, creating a seamless and delightful experience for discovering social connections.',
    color1: '#3B0D11', color2: '#FDFBF7', color3: '#5D2A2E',
    typography: 'Playfair Display',
    typographyDesc: 'Elegant, editorial, and sophisticated.'
  },
  {
    id: 'yetify-mobile',
    title: 'Yetify Mobile',
    description: 'A conceptual mobile streaming and merch platform dedicated to the Ye (Kanye West) ecosystem.',
    category: 'Concept Design',
    year: '2025',
    image: '/Home Page-music-portrait.png',
    
    role: 'Concept Designer',
    platform: 'iOS App',
    tools: 'Figma',
    heroImage: '/Home Page-music-portrait.png',
    carouselImages: [
      '/welcome-portrait.png',
      '/Home Page-music-portrait.png',
      '/ALBUM PAGE-portrait.png',
      '/Home page- merch-portrait.png',
      '/Home page- podcast-portrait.png'
    ],
    feature1Image: '/ALBUM PAGE-portrait.png',
    feature1Label: 'Album Detail View',
    feature2Image: '/Home page- podcast-portrait.png',
    feature2Label: 'Podcast Discovery',
    featureRowTitle: 'Immersive Exploration',
    featureRowText: 'A unified ecosystem that treats music, merchandise, and podcasts as equal pillars. The dark UI allows album art to pop, creating a hyper-focused environment for the superfan.',
    featureRowImage: '/Home Page-music-portrait.png',
    finalGallery: '/Home page- merch-portrait.png',
    overview: 'Yetify is a concept for an exclusive, artist-centric superfan platform designed around the Ye (Kanye West) musical universe. It seamlessly blends music streaming, exclusive merchandise drops, podcasts, and community features into a single, cohesive mobile experience. The dark, moody interface is designed to let the vibrant album artwork and exclusive content take center stage.',
    color1: '#050505', color2: '#7059FF', color3: '#2A2F2B',
    typography: 'SF Pro Display / Inter',
    typographyDesc: 'Clean, highly legible, and native to modern interfaces.'
  },
  {
    id: 'yetify-desktop',
    title: 'Yetify Desktop',
    description: 'A conceptual desktop application for the Ye audio and community ecosystem.',
    category: 'Concept Design',
    year: '2025',
    image: '/Home page-front.png',
    
    role: 'Concept Designer',
    platform: 'Desktop / Web App',
    tools: 'Figma',
    heroImage: '/Home page-front.png',
    carouselImages: [
      '/splash2-front.png',
      '/Home page-front.png',
      '/Discover01 f-front.png',
      '/Podcast 01-front.png',
      '/Podcast f-front.png',
      '/Community f-front.png'
    ],
    feature1Image: '/Discover01 f-front.png',
    feature1Label: 'Glassmorphic Sidebar Navigation',
    feature2Image: '/Community f-front.png',
    feature2Label: 'Video Player & Live Queue',
    featureRowTitle: 'High-Density Architecture',
    featureRowText: 'Scaling the mobile experience for desktop required a robust navigation system. The glassmorphic sidebar and persistent player ensure the user never loses context while exploring deep content libraries.',
    finalGallery: '/Podcast f-front.png',
    overview: 'The desktop counterpart to Yetify expands the superfan experience for larger screens. It features a complex, glassmorphic sidebar for navigation across Music, Podcasts, Community, and Vlogs. The layout accommodates a persistent "Currently Listening" video player and queue system, maintaining the moody, dark-themed visual identity with electric purple accents.',
    color1: '#050505', color2: '#7059FF', color3: '#1A1B22',
    typography: 'SF Pro Display / Inter',
    typographyDesc: 'Modern, sharp, and structured for dense information architecture.'
  }
];
