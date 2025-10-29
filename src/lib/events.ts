
export interface EventImage {
  src: string;
  alt: string;
  hint: string; // For data-ai-hint
  width: number;
  height: number;
}

export interface EventData {
  slug: string;
  title: string;
  date: string;
  teaser: string;
  summaryParagraphs: string[];
  images: EventImage[];
  imageCard: EventImage;
}

export const events: EventData[] = [
  {
    slug: 'world-war-i',
    title: 'World War I',
    date: '1914–1918',
    teaser: 'The Great War, a crucible that reshaped empires and heralded a new, terrifying epoch of conflict.',
    imageCard: {
      src: 'https://cdn.britannica.com/49/135149-050-D6B8878A/troops-British-trench-Western-Front-World-War.jpg',
      alt: 'British troops in a trench on the Western Front during World War I',
      hint: 'trenches war',
      width: 1600,
      height: 1067
    },
    summaryParagraphs: [
      "World War I, often called the Great War, erupted in 1914, fundamentally altering the global landscape. Its roots lay in a complex web of rising nationalism, intricate military alliances, imperial rivalries, and an escalating arms race among European powers. The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on June 28, 1914, by a Serbian nationalist, acted as the spark that ignited the conflict.",
      "The war was characterized by unprecedented brutality and scale, largely due to new military technologies clashing with outdated tactics. Trench warfare on the Western Front, stretching from the Swiss border to the North Sea, became a symbol of the war's futile horror, with soldiers enduring horrific conditions, machine gun fire, artillery bombardments, and poison gas attacks. Major battles like the Somme, Verdun, and Passchendaele resulted in millions of casualties for minimal territorial gains.",
      "The Eastern Front saw more fluid combat but was equally devastating. The war also extended to the Middle East, Africa, and Asia, involving empires like the Ottoman, Russian, German, Austro-Hungarian, British, and French. The entry of the United States in 1917 provided a crucial boost to the Allied forces.",
      "The war concluded with the armistice on November 11, 1918. Its aftermath was profound: empires collapsed (Russian, Ottoman, Austro-Hungarian, and German), new nations were born, and the Treaty of Versailles imposed harsh terms on Germany, sowing seeds for future conflict. The immense loss of life and psychological trauma led to widespread disillusionment, fundamentally reshaping societies and ushering in an era of political instability."
    ],
    images: [
      {
        src: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTkyMzUxOTMxNjg1OTM4Mjc1/wwi-the-trenches-of-world-war-one.webp',
        alt: 'Soldiers in a muddy trench during WWI',
        hint: 'soldiers trench mud',
        width: 700,
        height: 513
      },
      {
        src: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MjAyMjYyMzkxNTU0MDU3MjI4/trench-fever-in-world-war-1.webp',
        alt: 'Medical staff attending to soldiers with trench fever in WWI',
        hint: 'trench fever WWI',
        width: 700,
        height: 466
      },
    ],
  },
  {
    slug: 'world-war-ii',
    title: 'World War II',
    date: '1939–1945',
    teaser: 'A global conflagration born of unresolved resentments and ideologies of domination, marking humanity\'s darkest hours.',
    imageCard: {
      src: 'https://www.nationalww2museum.org/sites/default/files/2020-05/HItler%20and%20HImmler%20salute%20SS%20troops%20USHMM%20-%20Connie%20Gentry.jpg',
      alt: 'Hitler and Himmler salute SS troops during WWII',
      hint: 'nazi salute wwii',
      width: 600, 
      height: 400
    },
    summaryParagraphs: [
      "World War II, the deadliest conflict in human history, spanned from 1939 to 1945. It was ignited by a confluence of factors, including the unresolved grievances from World War I, particularly the harsh terms of the Treaty of Versailles, the rise of aggressive, expansionist ideologies like Nazism in Germany under Adolf Hitler, Fascism in Italy under Benito Mussolini, and militarism in Japan. The failure of appeasement policies by Western powers also contributed to the outbreak.",
      "The war began in Europe on September 1, 1939, with Germany's invasion of Poland, prompting Britain and France to declare war. Germany's Blitzkrieg tactics led to rapid conquests across Western Europe. The conflict became truly global with Japan's attack on Pearl Harbor on December 7, 1941, bringing the United States into the war on the side of the Allies.",
      "A defining and horrific aspect of World War II was the Holocaust, the systematic, state-sponsored persecution and genocide of six million Jews by the Nazi regime and its collaborators. This genocide also targeted millions of other victims, including Roma, Poles, Soviet prisoners of war, disabled individuals, and political opponents. Jews were forced into ghettos, subjected to slave labor, and ultimately murdered in extermination camps like Auschwitz-Birkenau, Treblinka, and Sobibor through gas chambers, mass shootings, and deliberate starvation and disease. The Holocaust stands as an unparalleled example of human cruelty and industrialized mass murder, driven by racist ideology.",
      "Key theaters of war included Europe, the Eastern Front (Germany vs. Soviet Union), North Africa, and the Pacific. Pivotal battles like Stalingrad, Midway, D-Day (Normandy landings), and the Battle of Britain significantly shifted the war's momentum. The war saw unprecedented aerial bombing campaigns against civilian populations and culminated in the use of atomic bombs on Hiroshima and Nagasaki by the United States in August 1945, leading to Japan's surrender.",
      "The war ended with an Allied victory in 1945. Its consequences were staggering: tens of millions dead, widespread destruction, the redrawing of global political boundaries, the emergence of the United States and the Soviet Union as superpowers, the beginning of the Cold War, and the establishment of the United Nations to prevent future global conflicts."
    ],
    images: [
      {
        src: 'https://cdn.theatlantic.com/thumbor/s1qlkdJY1r489ZKov-dkCGin6iA=/1200x856/media/img/photo/2011/10/world-war-ii-the-holocaust/w13_51425462/original.jpg',
        alt: 'Holocaust victims being forcibly removed from their homes',
        hint: 'holocaust victims',
        width: 1200,
        height: 856
      },
      {
        src: 'https://cdn.theatlantic.com/thumbor/2vnukSUWJ-mRYjcOZVA0hsZe-TM=/1200x868/media/img/photo/2011/10/world-war-ii-the-holocaust/w40_04200223/original.jpg',
        alt: 'Jewish prisoners in Buchenwald concentration camp, April 1945',
        hint: 'concentration camp',
        width: 1200,
        height: 868
      },
    ],
  },
  {
    slug: 'british-colonization-of-india',
    title: 'British Colonization of India',
    date: 'c. 1757–1947',
    teaser: 'The long shadow of empire, a complex interplay of power, exploitation, and the seeds of modern nationhood.',
    imageCard: {
      src: 'https://d1sxy7l4fhu207.cloudfront.net/assets/img/series/PowerPreachers.jpg',
      alt: 'Symbolic representation of British power in India',
      hint: 'colonial india power',
      width: 1920, 
      height: 1080 
    },
    summaryParagraphs: [
      "The British colonization of India was a gradual process that spanned nearly two centuries, beginning with the establishment of the English East India Company's trading posts in the early 17th century and culminating in direct British Crown rule (the British Raj) from 1858 to 1947. Initially focused on trade in spices, textiles, and other goods, the East India Company progressively increased its political and military influence, exploiting internal divisions among Indian rulers.",
      "The Battle of Plassey in 1757 is often considered a pivotal moment, marking the Company's ascendancy in Bengal and the beginning of its territorial expansion. Through a combination of military victories, alliances, and controversial policies like the Doctrine of Lapse, the Company extended its control over vast swathes of the Indian subcontinent. The Indian Mutiny (also known as the First War of Independence) in 1857-58 led to the dissolution of the East India Company and the transfer of governance directly to the British Crown.",
      "British rule brought significant changes to India. Economically, India became a major supplier of raw materials for British industries and a captive market for British manufactured goods, leading to the decline of indigenous industries like textiles. Policies often prioritized British economic interests, contributing to famines and widespread poverty. Socially, the British introduced Western education, a new legal system, and undertook some social reforms, but also employed 'divide and rule' tactics that exacerbated religious and social tensions.",
      "A particularly tragic event underscoring the brutality of colonial rule was the Jallianwala Bagh massacre in Amritsar on April 13, 1919. British troops, under the command of Brigadier-General Reginald Dyer, fired upon a large, peaceful gathering of unarmed Indians who were protesting repressive new measures and celebrating the Baisakhi festival. Hundreds were killed and many more wounded, an event that profoundly shocked the nation, galvanized the independence movement, and became a stark symbol of British oppression.",
      "Resistance to British rule grew steadily throughout the late 19th and early 20th centuries. The Indian National Congress, formed in 1885, became a key platform for nationalist aspirations. Leaders like Mahatma Gandhi spearheaded mass movements based on non-violent civil disobedience, significantly challenging British authority. After World War II, weakened by the war and facing mounting pressure, Britain granted independence to India in 1947, but also partitioned the subcontinent into India and Pakistan, leading to immense violence and displacement."
    ],
    images: [
      {
        src: 'https://i.guim.co.uk/img/media/eca81b0b9fcc479685d167b9572b2d02a7bbc764/56_58_2890_1944/master/2890.jpg?width=1900&dpr=2&s=none&crop=none',
        alt: 'Lord Curzon and Indian princes, representing British rule in India',
        hint: 'british raj officials',
        width: 1900, 
        height: 1278
      },
      {
        src: 'https://static.toiimg.com/thumb/msid-75125758,imgsize-95326,width-400,resizemode-4/75125758.jpg',
        alt: 'A painting depicting the Jallianwala Bagh massacre',
        hint: 'jallianwala bagh massacre',
        width: 400,
        height: 267
      },
    ],
  },
  {
    slug: 'american-revolution',
    title: 'American Revolution',
    date: '1765–1783', 
    teaser: 'A colony\'s audacious declaration of self-mastery, birthing a nation on the anvil of Enlightenment ideals.',
    imageCard: {
      src: 'https://digitallylearn.com/wp-content/uploads/2019/04/Goals-and-Outcomes-of-the-American-Revolution-1776.jpg.webp',
      alt: 'Depiction of the goals and outcomes of the American Revolution',
      hint: 'american revolution goals',
      width: 1024, 
      height: 576
    },
    summaryParagraphs: [
      "The American Revolution (1765–1783) was a political upheaval during which thirteen British colonies in North America rejected British rule and established the United States of America. The conflict arose from growing colonial grievances against British policies, particularly issues of taxation without representation and infringements on colonial liberties following the French and Indian War (1754-1763).",
      "Key catalysts included the Stamp Act (1765), the Townshend Acts (1767), and the Tea Act (1773), which led to significant colonial protest, including the Boston Massacre (1770) and the Boston Tea Party (1773). Enlightenment ideas about natural rights, liberty, and self-government, championed by thinkers like John Locke, profoundly influenced colonial leaders such as Thomas Jefferson, Benjamin Franklin, and John Adams.",
      "The war began with the Battles of Lexington and Concord in April 1775. On July 4, 1776, the Continental Congress adopted the Declaration of Independence, formally asserting the colonies' separation from Great Britain. George Washington led the Continental Army, facing immense challenges against the well-trained British forces. Pivotal battles like Saratoga (1777), which secured crucial French support for the colonists, and Yorktown (1781), where the British army under Cornwallis surrendered, were turning points in the war.",
      "The Treaty of Paris, signed in 1783, officially ended the war and recognized American independence. The revolution resulted in the birth of a new nation founded on republican principles. However, the initial government under the Articles of Confederation proved weak, leading to the Constitutional Convention of 1787, which drafted the United States Constitution, establishing a federal republic that continues to shape American governance."
    ],
    images: [
      {
        src: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JsYWNrLWxveWFsaXN0LTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=',
        alt: 'Black Loyalist soldier during the American Revolution',
        hint: 'black loyalist soldier',
        width: 828,
        height: 552
      },
      {
        src: 'https://i0.wp.com/theimaginativeconservative.org/wp-content/uploads/2020/03/The-Death-of-Major-Peirson-6-January-1781.jpg?ssl=1',
        alt: 'Painting: The Death of Major Peirson, January 6, 1781, during the American Revolution',
        hint: 'american revolution battle death',
        width: 1200, 
        height: 800 
      },
    ],
  },
  {
    slug: 'french-revolution',
    title: 'French Revolution',
    date: '1789–1799',
    teaser: 'A tempestuous upheaval that dethroned monarchy and unleashed the fierce, unpredictable power of the people.',
    imageCard: {
      src: 'https://cdn.britannica.com/40/167640-050-A45EDB7E/execution-Louis-XVI-1793.jpg',
      alt: 'Execution of Louis XVI',
      hint: 'louis execution',
      width: 1600, 
      height: 1001
    },
    summaryParagraphs: [
      "The French Revolution (1789–1799) was a period of radical social and political upheaval in France that profoundly impacted French and modern history, marking the decline of powerful monarchies and churches and the rise of democracy and nationalism. It was driven by widespread discontent with the French monarchy under King Louis XVI, severe financial crises exacerbated by costly wars and an inequitable tax system, and the influence of Enlightenment ideals promoting liberty, equality, and fraternity.",
      "The revolution began with the convocation of the Estates-General in May 1789, leading to the formation of the National Assembly by the Third Estate (commoners). The storming of the Bastille on July 14, 1789, became a symbolic act of rebellion. Key developments included the abolition of feudalism, the Declaration of the Rights of Man and of the Citizen, and the establishment of a constitutional monarchy.",
      "However, the revolution grew more radical. The monarchy was abolished in 1792, and Louis XVI was executed in 1793. This period, known as the Reign of Terror (1793-1794), led by Maximilien Robespierre and the Committee of Public Safety, saw mass executions of perceived enemies of the revolution. The revolution also involved wars with neighboring European powers who sought to crush the revolutionary government.",
      "The Thermidorian Reaction led to Robespierre's downfall and execution, ushering in a more conservative phase known as the Directory (1795-1799). The Directory was characterized by instability and corruption, eventually paving the way for Napoleon Bonaparte's rise to power in a coup d'état in 1799, effectively ending the revolutionary period. Despite its violent excesses, the French Revolution fundamentally transformed French society, dismantled the old aristocratic order, and spread revolutionary ideals across Europe."
    ],
    images: [
      {
        src: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-587493410-2?_a=BAVAZGDX0',
        alt: 'French Revolution mob scene depicting popular uprising',
        hint: 'revolution crowd',
        width: 1200, 
        height: 600 
      },
      {
        src: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1920,h_1254,g_auto/dpr_auto/f_auto/q_auto:eco/v1/french-revolution?_a=BAVAZGDX0',
        alt: 'Liberty Leading the People by Delacroix, symbolizing the French Revolution',
        hint: 'marianne liberty',
        width: 1200, 
        height: 784
      },
    ],
  },
  {
    slug: 'moon-landing',
    title: 'Moon Landing',
    date: '1969',
    teaser: 'Humanity\'s giant leap, transcending earthly bounds to touch another world, a monument to ambition and ingenuity.',
    imageCard: {
      src: 'https://media.cnn.com/api/v1/images/stellar/prod/190507165152-apollo-11-moon-moments-still-3.jpg?q=x_2,y_0,h_1078,w_1915,c_crop/w_1280',
      alt: 'Buzz Aldrin on the Moon with the US flag',
      hint: 'moon astronaut flag',
      width: 1280,
      height: 720 
    },
    summaryParagraphs: [
      "The first crewed Moon landing, achieved by NASA's Apollo 11 mission on July 20, 1969, was a landmark event in human history. It represented the culmination of the Space Race, a fierce technological and ideological competition between the United States and the Soviet Union during the Cold War. President John F. Kennedy's 1961 declaration of the goal to land a man on the Moon and return him safely to Earth by the end of the decade galvanized a massive national effort.",
      "The Apollo 11 mission was crewed by astronauts Neil Armstrong (Commander), Buzz Aldrin (Lunar Module Pilot), and Michael Collins (Command Module Pilot). The Saturn V rocket launched the spacecraft from Kennedy Space Center on July 16, 1969. After entering lunar orbit, Armstrong and Aldrin descended to the Moon's surface in the Lunar Module, named 'Eagle', while Collins remained in orbit aboard the Command Module, 'Columbia'.",
      "On July 20, 1969, Neil Armstrong became the first human to step onto the lunar surface, famously declaring, 'That's one small step for [a] man, one giant leap for mankind.' Buzz Aldrin joined him shortly thereafter. They spent about two and a half hours outside the Lunar Module, collecting samples, planting the American flag, conducting experiments, and documenting their activities. The event was broadcast live on television and watched by an estimated 650 million people worldwide.",
      "The successful return of Apollo 11 on July 24, 1969, marked a monumental achievement in science, engineering, and human exploration. It demonstrated unprecedented technological capabilities, significantly advanced our understanding of the Moon, and inspired generations. Beyond its scientific and technical importance, the Moon landing held immense cultural and symbolic significance, embodying human aspiration and the potential for extraordinary accomplishment."
    ],
    images: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Apollo_11_Crew.jpg',
        alt: 'Apollo 11 Crew: Neil Armstrong, Michael Collins, Buzz Aldrin',
        hint: 'apollo crew astronaut',
        width: 1024,
        height: 819
      },
      {
        src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_avif,q_auto:eco,dpr_2/newscms/2019_28/563601/140714-armstrong.jpg',
        alt: 'Neil Armstrong on the Moon with the Lunar Module in the background',
        hint: 'armstrong moon module',
        width: 1120, 
        height: 742 
      },
    ],
  },
  {
    slug: 'fall-of-the-berlin-wall',
    title: 'Fall of the Berlin Wall',
    date: '1989',
    teaser: 'A concrete scar torn down by the will of a people, symbolizing the end of an era and the reunification of a continent.',
    imageCard: {
      src: 'https://d2eehagpk5cl65.cloudfront.net/img/q60/uploads/2019/11/Fall-of-the-Berlin-Wall-1024x666.jpg',
      alt: 'People on top of the Berlin Wall celebrating its fall',
      hint: 'berlin wall celebration',
      width: 1024,
      height: 666
    },
    summaryParagraphs: [
      "The fall of the Berlin Wall on November 9, 1989, was a pivotal event that symbolized the end of the Cold War and the impending collapse of communist regimes across Eastern Europe. The Wall, constructed by East Germany (German Democratic Republic, GDR) in 1961, physically and ideologically divided Berlin, separating the communist East from the democratic West. It became a potent symbol of the Iron Curtain that divided Europe for decades.",
      "By 1989, the GDR was facing mounting economic problems and growing popular unrest, fueled by reform movements in other Eastern Bloc countries, particularly Mikhail Gorbachev's policies of Glasnost (openness) and Perestroika (restructuring) in the Soviet Union. Mass protests, such as the Monday demonstrations in Leipzig, put immense pressure on the East German government. A crucial catalyst was Hungary's decision in May 1989 to open its border with Austria, allowing thousands of East Germans to flee to the West.",
      "On the evening of November 9, 1989, amidst chaotic circumstances and a misunderstood announcement by an East German official, Günter Schabowski, it was declared that East Germans would be free to travel to West Germany. Thousands of East Berliners flocked to the border crossings, where overwhelmed guards eventually opened the gates. People from both East and West Berlin joyously climbed onto the Wall, danced, and began to dismantle it with hammers and chisels.",
      "The fall of the Berlin Wall had profound consequences. It paved the way for German reunification, which was formally completed on October 3, 1990. It accelerated the collapse of communist governments across Eastern Europe and ultimately contributed to the dissolution of the Soviet Union in 1991. The event was celebrated globally as a victory for freedom and democracy, marking a significant turning point in modern world history."
    ],
    images: [
      {
        src: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-11/6/17/asset/b423642ecd34/sub-buzz-389-1573062407-1.jpg?downsize=1600:*&output-format=auto&output-quality=auto',
        alt: 'East and West Germans celebrating at the fallen Berlin Wall',
        hint: 'berlin celebration dismantle',
        width: 1600,
        height: 1067 
      },
      {
        src: 'https://www.young-diplomats.com/wp-content/uploads/2019/11/berlin-wall.jpg',
        alt: 'People dismantling a section of the Berlin Wall',
        hint: 'dismantle wall graffiti',
        width: 1000, 
        height: 665
      },
    ],
  },
  {
    slug: 'the-renaissance',
    title: 'The Renaissance',
    date: 'c. 14th–17th Century',
    teaser: 'A cultural rebirth that bridged ages, reawakening classical wisdom and unleashing a torrent of artistic and intellectual innovation.',
    imageCard: {
      src: 'https://cdn.britannica.com/41/3341-050-825E2B57/The-Creation-of-Adam-ceiling-fresco-Sistine.jpg',
      alt: 'The Creation of Adam by Michelangelo, Sistine Chapel ceiling',
      hint: 'creation adam michelangelo',
      width: 1600,
      height: 883
    },
    summaryParagraphs: [
      "The Renaissance, meaning 'rebirth,' was a transformative period in European history, spanning roughly from the 14th to the 17th century. It marked a transition from the Middle Ages to modernity, characterized by a renewed interest in the art, literature, and philosophy of classical antiquity, particularly ancient Greece and Rome. Originating in Italy, especially Florence, its influence gradually spread across Europe.",
      "Key features of the Renaissance included humanism, a philosophical and ethical stance that emphasized human potential, achievements, and concerns, often shifting focus from purely religious dogma to secular subjects. This led to significant advancements in art, where artists like Leonardo da Vinci, Michelangelo, and Raphael created masterpieces that showcased anatomical accuracy, perspective, and emotional depth. Patrons, such as the Medici family in Florence, played a crucial role in fostering artistic and intellectual endeavors.",
      "Literature flourished with writers like Petrarch, considered the 'Father of Humanism,' and later, William Shakespeare, who explored complex human emotions and experiences. The invention of the printing press by Johannes Gutenberg around 1440 was revolutionary, enabling the widespread dissemination of knowledge and ideas, which further fueled intellectual curiosity and debate.",
      "Scientific inquiry also advanced significantly. Figures like Nicolaus Copernicus proposed a heliocentric model of the universe, challenging the long-held geocentric view. Galileo Galilei made crucial astronomical observations with the telescope, and Andreas Vesalius advanced the study of human anatomy. The Renaissance fostered a spirit of exploration, innovation, and critical thinking that laid the groundwork for the Scientific Revolution and the Enlightenment, profoundly shaping the course of Western civilization."
    ],
    images: [
      {
        src: 'https://img.etimg.com/thumb/msid-69201397,width-650,height-488,imgsize-912935,resizemode-75/ets-dualpane-2019-05-06t161833-568.jpg',
        alt: 'Mona Lisa by Leonardo da Vinci',
        hint: 'mona lisa painting',
        width: 650,
        height: 488
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Sanzio_01_cropped.png',
        alt: 'Self-portrait by Raphael, a prominent Renaissance artist',
        hint: 'raphael portrait artist',
        width: 575, 
        height: 733
      },
    ],
  },
];

export function getEventBySlug(slug: string): EventData | undefined {
  return events.find(event => event.slug === slug);
}

export function getAllEvents(): EventData[] {
  return events;
}

