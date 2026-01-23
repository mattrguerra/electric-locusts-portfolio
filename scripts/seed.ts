import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing data
  await prisma.portfolioItem.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.service.deleteMany();
  console.log('Cleared existing data');

  // Seed Portfolio Items - Matt Guerra's Art Series
  const portfolioItems = [
    // Self Annihilation Series - Mixed Media Self-Portraits
    { title: 'Self Annihilation I', description: 'What started with self-portraits on medium format film became a vehicle to visualize mental illness and addiction. I scratch and burn my own image from the negatives—physically removing myself from the frame.', category: 'Self Annihilation', imageUrl: '/portfolio/self_annihilation/self_annihilation_1.jpg', tags: ['self-portrait', 'mental health', 'identity', 'mixed media'], featured: true, order: 1 },
    { title: 'Self Annihilation II', description: 'The destruction of the image mirrors the destruction of self. My whole life I have had an unstable sense of identity—this work visualizes that hollow shell of a person trapped in cycles of mental illness.', category: 'Self Annihilation', imageUrl: '/portfolio/self_annihilation/self_annihilation_2.jpg', tags: ['self-portrait', 'film', 'experimental'], featured: false, order: 2 },
    { title: 'Self Annihilation III', description: 'If even one person views this work and decides to fight for mental health advocacy—or feels a little less alone—then every painful moment of its creation will have been worth it.', category: 'Self Annihilation', imageUrl: '/portfolio/self_annihilation/self_annihilation_3.jpg', tags: ['advocacy', 'vulnerability', 'healing'], featured: false, order: 3 },
    { title: 'Self Annihilation IV', description: 'Through my art, I delve into the darkest parts of my life—not to dwell there, but to create powerful images that speak to the importance of mental health care.', category: 'Self Annihilation', imageUrl: '/portfolio/self_annihilation/self_annihilation_4.jpg', tags: ['video art', 'documentary', 'personal'], featured: false, order: 4 },

    // What We Were Left With - Documentary Photography Series (formerly My Gritty Dark Nightmare)
    { title: 'What We Were Left With I', description: 'Documentary photographs from years of active addiction and the aftermath of trauma. By revisiting and curating this archive of 12,000+ images, I transform evidence of survival into art.', category: 'What We Were Left With', imageUrl: '/portfolio/what_we_were_left_with/1.jpg', tags: ['documentary', 'addiction', 'trauma', 'archive'], featured: true, order: 5 },
    { title: 'What We Were Left With II', description: 'Trauma can make you question your memories, minimize your suffering. Seeing the evidence—having it exist outside my own mind—confirms that I went through something significant and survived.', category: 'What We Were Left With', imageUrl: '/portfolio/what_we_were_left_with/2.jpg', tags: ['survival', 'documentary', 'recovery'], featured: false, order: 6 },
    { title: 'What We Were Left With III', description: 'Addiction does not happen in isolation. It is often a response to pain that feels otherwise unmanageable. By showing both the behavior and its roots, I hope to build understanding.', category: 'What We Were Left With', imageUrl: '/portfolio/what_we_were_left_with/3.jpg', tags: ['understanding', 'mental health', 'awareness'], featured: false, order: 7 },
    { title: 'What We Were Left With IV', description: 'The fact that I can look back at these images—that I am still here to curate them—is evidence that recovery is possible. The human spirit can survive devastating circumstances.', category: 'What We Were Left With', imageUrl: '/portfolio/what_we_were_left_with/4.jpg', tags: ['hope', 'recovery', 'resilience'], featured: false, order: 8 },

    // People Who Saved My Life - Cyanotype Series
    { title: 'People Who Saved My Life I', description: 'Five portraits printed as cyanotypes of people I am grateful for—people who have saved my life. On the reverse of each is a handwritten letter thanking them for their presence.', category: 'People Who Saved My Life', imageUrl: '/portfolio/people_saved/people_saved_1.jpg', tags: ['cyanotype', 'gratitude', 'portrait', 'alternative process'], featured: true, order: 9 },
    { title: 'People Who Saved My Life II', description: 'Creating work about mental health means constantly confronting darkness. This series is a deliberate shift toward gratitude—a testament to the vital importance of support networks.', category: 'People Who Saved My Life', imageUrl: '/portfolio/people_saved/people_saved_2.jpg', tags: ['cyanotype', 'support', 'healing'], featured: false, order: 10 },
    { title: 'People Who Saved My Life III', description: 'Without these five people, I truly do not believe I would have made it. Connection can be the difference between life and death.', category: 'People Who Saved My Life', imageUrl: '/portfolio/people_saved/people_saved_3.jpg', tags: ['community', 'blue print', 'connection'], featured: false, order: 11 },
    { title: 'People Who Saved My Life IV', description: 'The ethereal blue tones of cyanotype create an almost sacred quality around each subject. Acknowledging the people who save us is itself an act of healing.', category: 'People Who Saved My Life', imageUrl: '/portfolio/people_saved/people_saved_4.jpg', tags: ['alternative process', 'portrait', 'emotional'], featured: false, order: 12 },

    // Exposure - Depression Series
    { title: 'Exposure I', description: 'Depression creeps up slowly. The things you enjoy become sources of apathy. Every time you leave bed, it feels like dragging weights that leave trails in the ground behind you.', category: 'Exposure', imageUrl: '/portfolio/exposure/exposure_1.jpg', tags: ['depression', 'vulnerability', 'emotional', 'self-portrait'], featured: true, order: 13 },
    { title: 'Exposure II', description: 'Naked and raw in your emotions, you begin to unravel bit by bit and piece by piece until in the end there is nothing left. Depression is funny like that.', category: 'Exposure', imageUrl: '/portfolio/exposure/exposure_2.jpg', tags: ['mental health', 'awareness', 'raw'], featured: false, order: 14 },
    { title: 'Exposure III', description: 'I am fighting depression and it seems as if no one understands the weight of that which I am going through. Hopefully now they will understand.', category: 'Exposure', imageUrl: '/portfolio/exposure/exposure_3.jpg', tags: ['advocacy', 'understanding', 'struggle'], featured: false, order: 15 },
    { title: 'Exposure IV', description: 'Its silent predation on the mind creeps up so slowly that you do not even realize what is happening until it is too late.', category: 'Exposure', imageUrl: '/portfolio/exposure/exposure_4.jpg', tags: ['documentation', 'awareness', 'healing'], featured: false, order: 16 },

    // Mixed - Bipolar Disorder Series
    { title: 'Mixed I', description: 'An in-depth look at Bipolar Disorder. This series seeks to explore the struggles and emotions experienced in bipolar mixed episodes—the only work I could create during a very dark time.', category: 'Mixed', imageUrl: '/portfolio/mixed/mixed_1.jpg', tags: ['bipolar', 'mixed episode', 'mental health', 'personal'], featured: true, order: 17 },
    { title: 'Mixed II', description: 'The chaos of experiencing mania and depression simultaneously, visualized through layered imagery and emotional color palettes.', category: 'Mixed', imageUrl: '/portfolio/mixed/mixed_2.jpg', tags: ['chaos', 'emotion', 'struggle'], featured: false, order: 18 },
    { title: 'Mixed III', description: 'Created during one of the darkest periods of my life, this work represents the only creative output possible during the overwhelming nature of mixed episodes.', category: 'Mixed', imageUrl: '/portfolio/mixed/mixed_3.jpg', tags: ['survival', 'expression', 'darkness'], featured: false, order: 19 },
    { title: 'Mixed IV', description: 'Art as therapy—the act of creating during crisis becomes both documentation and survival mechanism.', category: 'Mixed', imageUrl: '/portfolio/mixed/mixed_4.jpg', tags: ['therapy', 'documentation', 'healing'], featured: false, order: 20 },

    // Deconstructing Masculinity Series
    { title: 'Deconstructing Masculinity I', description: 'The archetypal man in our society operates within impossibly narrow boundaries. This series confronts those limitations directly through portraits of men with varying gender expressions.', category: 'Deconstructing Masculinity', imageUrl: '/portfolio/masculinity/masculinity_1.jpg', tags: ['masculinity', 'gender', 'identity', 'portrait'], featured: true, order: 21 },
    { title: 'Deconstructing Masculinity II', description: 'These expectations damage everyone. They create a culture where femininity is demonized and men are forbidden from accessing their full emotional range.', category: 'Deconstructing Masculinity', imageUrl: '/portfolio/masculinity/masculinity_2.jpg', tags: ['vulnerability', 'emotion', 'expression'], featured: false, order: 22 },
    { title: 'Deconstructing Masculinity III', description: 'The work asks viewers to examine their own assumptions: What do we expect men to be? Who benefits from those expectations? What becomes possible when we expand our definitions?', category: 'Deconstructing Masculinity', imageUrl: '/portfolio/masculinity/masculinity_3.jpg', tags: ['identity', 'society', 'challenge'], featured: false, order: 23 },
    { title: 'Deconstructing Masculinity IV', description: 'Masculinity does not have to mean emotional absence. Strength does not require suppression. This series imagines what manhood could look like if we allowed it to include the full spectrum of human experience.', category: 'Deconstructing Masculinity', imageUrl: '/portfolio/masculinity/masculinity_4.jpg', tags: ['confrontation', 'questioning', 'freedom'], featured: false, order: 24 },
  ];

  for (const item of portfolioItems) {
    await prisma.portfolioItem.create({ data: item });
  }
  console.log('Created portfolio items');

  // Seed Blog Posts
  const blogPosts = [
    {
      title: 'The Intersection of Technology and Art',
      slug: 'intersection-technology-art',
      excerpt: 'Exploring how modern technology is reshaping the creative landscape and opening new possibilities for artistic expression.',
      content: `<h2>A New Creative Frontier</h2>
<p>We live in an unprecedented era where technology and art have become deeply intertwined. From digital painting tools that simulate traditional media to AI-assisted creation, the boundaries of what's possible continue to expand.</p>

<h2>Tools of the Trade</h2>
<p>Today's digital artists have access to an incredible array of tools. Software like Procreate, Photoshop, and Blender have democratized art creation, allowing anyone with a vision to bring their ideas to life. But it's not just about the tools—it's about how we use them to tell stories and evoke emotions.</p>

<h2>The Human Element</h2>
<p>Despite all the technological advances, the human element remains central to meaningful art. Technology is merely a conduit for human expression. The most powerful digital art still comes from deeply personal places, addressing universal themes of love, loss, identity, and hope.</p>

<h2>Looking Forward</h2>
<p>As we move forward, I believe we'll see even more exciting developments. Virtual and augmented reality, generative AI, and new interfaces will continue to push the boundaries of what's possible. The key is to embrace these tools while staying true to our artistic vision.</p>`,
      coverImage: '/blog/blog_cover_1.jpg',
      category: 'Technology',
      tags: ['technology', 'digital art', 'creative process', 'future'],
      published: true,
      publishedAt: new Date('2024-01-15'),
      readTime: 6,
    },
    {
      title: 'Finding Inspiration in Unexpected Places',
      slug: 'finding-inspiration-unexpected-places',
      excerpt: 'Sometimes the best creative ideas come from the most unlikely sources. Here are my strategies for staying inspired.',
      content: `<h2>Breaking Out of Creative Ruts</h2>
<p>Every artist faces periods where inspiration seems elusive. The blank canvas or empty screen can feel daunting. Over the years, I've developed strategies for finding creative fuel in unexpected places.</p>

<h2>Cross-Pollination of Ideas</h2>
<p>Some of my best work has come from exploring disciplines outside my comfort zone. A fascinating documentary about architecture might inspire a new approach to composition. A piece of music could suggest a color palette. The key is staying curious and open.</p>

<h2>The Power of Walking</h2>
<p>There's something magical about taking a walk without a specific destination. The act of moving through space, observing details, and letting the mind wander often leads to breakthrough moments. I always carry a small notebook for these occasions.</p>

<h2>Embracing Constraints</h2>
<p>Counter-intuitively, limitations can spark creativity. Try working with a restricted color palette, a tight deadline, or an unusual format. Constraints force you to think differently and often lead to innovative solutions.</p>`,
      coverImage: '/blog/blog_cover_2.jpg',
      category: 'Process',
      tags: ['inspiration', 'creativity', 'process', 'tips'],
      published: true,
      publishedAt: new Date('2024-01-08'),
      readTime: 5,
    },
    {
      title: 'The Evolution of My Photography Practice',
      slug: 'evolution-photography-practice',
      excerpt: 'A reflection on how my approach to photography has changed over the years and the lessons learned along the way.',
      content: `<h2>Early Days</h2>
<p>When I first picked up a camera, I was obsessed with technical perfection. Every shot had to be sharp, properly exposed, and follow the "rules" of composition. While this foundation was important, it took me years to understand that great photography is about so much more.</p>

<h2>Finding My Voice</h2>
<p>The turning point came when I stopped trying to emulate other photographers and started asking what I wanted to say. Photography became less about capturing what I saw and more about sharing how I felt. This shift transformed everything.</p>

<h2>Embracing Imperfection</h2>
<p>Some of my favorite images now are ones that break the rules. Motion blur that captures energy, unusual crops that create tension, or colors that evoke mood rather than reality. Imperfection can be powerful.</p>

<h2>Continual Learning</h2>
<p>Even after years of practice, I'm still learning. Each project presents new challenges and opportunities for growth. The day I think I've mastered photography will be the day I stop improving.</p>`,
      coverImage: '/portfolio/photography/photography_2.jpg',
      category: 'Photography',
      tags: ['photography', 'learning', 'growth', 'reflection'],
      published: true,
      publishedAt: new Date('2024-01-01'),
      readTime: 7,
    },
    {
      title: 'Designing for Emotion: Color Theory in Practice',
      slug: 'designing-emotion-color-theory',
      excerpt: 'How understanding color psychology can elevate your design work and create deeper emotional connections with viewers.',
      content: `<h2>Beyond Aesthetics</h2>
<p>Color is one of the most powerful tools in a designer's arsenal. It's not just about making things look pretty—color can evoke specific emotions, guide attention, and communicate meaning before a single word is read.</p>

<h2>The Psychology of Color</h2>
<p>Different colors trigger different psychological responses. Blue often conveys trust and calm, while red creates urgency and excitement. However, context matters tremendously. A deep forest green might feel natural and organic in one context but clinical in another.</p>

<h2>Building Palettes</h2>
<p>Creating effective color palettes is both science and intuition. I typically start with an emotional goal—what feeling do I want to evoke? Then I explore colors that support that emotion while ensuring sufficient contrast and accessibility.</p>

<h2>Testing and Iteration</h2>
<p>No color choice is final until it's tested. What looks perfect in isolation might not work in context. I always test color choices across different devices, lighting conditions, and with real users whenever possible.</p>`,
      coverImage: '/portfolio/graphic_design/graphic_design_1.jpg',
      category: 'Design',
      tags: ['design', 'color theory', 'psychology', 'tips'],
      published: true,
      publishedAt: new Date('2023-12-20'),
      readTime: 6,
    },
    {
      title: 'Creating Immersive Installation Experiences',
      slug: 'creating-immersive-installation-experiences',
      excerpt: 'Behind the scenes of creating large-scale art installations that engage all the senses.',
      content: `<h2>Beyond the Frame</h2>
<p>Installation art offers something unique—the ability to create environments that visitors can physically enter and experience. Instead of viewing art from a distance, people become part of the work itself.</p>

<h2>Planning and Logistics</h2>
<p>Creating installations requires careful planning. Space dimensions, power requirements, safety considerations, and viewer flow all need to be considered. I typically create detailed models and simulations before any physical construction begins.</p>

<h2>Engaging the Senses</h2>
<p>The most memorable installations engage multiple senses. Light, sound, texture, temperature, and even scent can all contribute to the experience. Each element should support the overall concept without overwhelming the visitor.</p>

<h2>The Role of Technology</h2>
<p>Modern technology has expanded what's possible in installation art. Projectors, sensors, and custom software allow for interactive, responsive environments. However, technology should serve the art, not dominate it.</p>`,
      coverImage: '/portfolio/installation_art/installation_art_1.jpg',
      category: 'Art',
      tags: ['installation', 'immersive', 'experience', 'process'],
      published: true,
      publishedAt: new Date('2023-12-10'),
      readTime: 8,
    },
    {
      title: 'Web Development as Creative Expression',
      slug: 'web-development-creative-expression',
      excerpt: 'Why I consider coding to be another form of artistic expression and how it complements my other creative work.',
      content: `<h2>Code as Medium</h2>
<p>When most people think of web development, they picture technical work devoid of creativity. But for me, code is just another medium for expression—like paint or photography. The difference is that this medium responds, changes, and interacts.</p>

<h2>Problem-Solving as Art</h2>
<p>Every project presents unique challenges. Finding elegant solutions to these problems is deeply satisfying in the same way completing a complex artwork is. There's beauty in clean, efficient code that does exactly what it needs to do.</p>

<h2>Animation and Motion</h2>
<p>The web allows for motion in ways traditional media doesn't. Subtle animations can guide users, create delight, and add personality. I love crafting these micro-interactions that make digital experiences feel alive.</p>

<h2>Bridging Disciplines</h2>
<p>My background in visual arts directly influences my web work. Understanding composition, color, and visual hierarchy makes me a better developer. Conversely, coding skills open up new possibilities in my digital art practice.</p>`,
      coverImage: '/portfolio/web_development/web_development_1.jpg',
      category: 'Technology',
      tags: ['web development', 'coding', 'creativity', 'design'],
      published: true,
      publishedAt: new Date('2023-12-01'),
      readTime: 5,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({ data: post });
  }
  console.log('Created blog posts');

  // Seed Services
  const services = [
    { name: 'Digital Art', description: 'Custom digital illustrations and artwork', category: 'Creative', priceRange: '$300 - $2,000+', features: ['Custom illustrations', 'Concept art', 'Digital paintings', 'NFT-ready artwork'], order: 1 },
    { name: 'Photography', description: 'Professional photography services', category: 'Creative', priceRange: '$250 - $1,500+', features: ['Portrait sessions', 'Event coverage', 'Product photography', 'Photo editing'], order: 2 },
    { name: 'Video Art', description: 'Motion graphics and video production', category: 'Creative', priceRange: '$500 - $5,000+', features: ['Motion graphics', 'Video editing', 'Music videos', 'Social content'], order: 3 },
    { name: 'Graphic Design', description: 'Brand identity and marketing design', category: 'Design', priceRange: '$200 - $3,000+', features: ['Logo design', 'Brand identity', 'Marketing materials', 'Print design'], order: 4 },
    { name: 'Installation Art', description: 'Immersive art installations', category: 'Creative', priceRange: '$2,000 - $25,000+', features: ['Gallery installations', 'Interactive experiences', 'Light installations', 'Public art'], order: 5 },
    { name: 'Web Development', description: 'Custom websites and web applications', category: 'Technical', priceRange: '$1,500 - $15,000+', features: ['Custom websites', 'E-commerce', 'Portfolio sites', 'Web applications'], order: 6 },
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }
  console.log('Created services');

  console.log('Database seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
