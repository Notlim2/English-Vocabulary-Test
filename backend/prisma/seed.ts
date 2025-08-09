import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertWords() {
  return prisma.word.createMany({
    data: [
      {
        term: 'Apple',
        definition:
          'A round fruit with red, green, or yellow skin and white inside.',
        example: 'I eat an ????? every morning.',
        difficult: 'A1',
      },
      {
        term: 'Book',
        definition: 'A set of pages with words that you read.',
        example: 'She is reading a ?????.',
        difficult: 'A1',
      },
      {
        term: 'Cat',
        definition: 'A small animal with fur, often kept as a pet.',
        example: 'The ??? is sleeping on the sofa.',
        difficult: 'A1',
      },
      {
        term: 'Dog',
        definition:
          "A common animal often kept as a pet, known as man's best friend.",
        example: 'My ??? loves to play outside.',
        difficult: 'A1',
      },
      {
        term: 'Eat',
        definition: 'To put food in your mouth and swallow it.',
        example: 'We ??? lunch at noon.',
        difficult: 'A1',
      },
      {
        term: 'Family',
        definition: 'A group of people related to each other.',
        example: 'I love my ?????? very much.',
        difficult: 'A1',
      },
      {
        term: 'Go',
        definition: 'To move or travel from one place to another.',
        example: 'I ?? to school every day.',
        difficult: 'A1',
      },
      {
        term: 'House',
        definition: 'A building where people live.',
        example: 'My ????? is near the park.',
        difficult: 'A1',
      },
      {
        term: 'Jump',
        definition: 'To push yourself off the ground and into the air.',
        example: 'The children ???? on the trampoline.',
        difficult: 'A1',
      },
      {
        term: 'Love',
        definition: 'A strong feeling of affection.',
        example: 'I ???? my parents.',
        difficult: 'A1',
      },
      {
        term: 'Man',
        definition: 'An adult male human being.',
        example: 'The ??? is very tall.',
        difficult: 'A1',
      },
      {
        term: 'Name',
        definition: 'The word used to identify a person or thing.',
        example: 'My ???? is John.',
        difficult: 'A1',
      },
      {
        term: 'Open',
        definition: 'To move something so that it is no longer closed.',
        example: 'Please ???? the window.',
        difficult: 'A1',
      },
      {
        term: 'Pen',
        definition: 'A tool used for writing.',
        example: 'Can I borrow your ????',
        difficult: 'A1',
      },
      {
        term: 'Run',
        definition: 'To move quickly using your legs.',
        example: 'I ??? every morning.',
        difficult: 'A1',
      },
      {
        term: 'Sun',
        definition: 'The star that gives light and heat to the Earth.',
        example: 'The ??? is shining today.',
        difficult: 'A1',
      },
      {
        term: 'Tree',
        definition: 'A tall plant with a trunk and branches.',
        example: 'There is a big ???? in the garden.',
        difficult: 'A1',
      },
      {
        term: 'Water',
        definition: 'A clear liquid that people and animals drink.',
        example: 'I drink ????? every day.',
        difficult: 'A1',
      },
      {
        term: 'Yes',
        definition: 'A word used to express agreement or affirmation.',
        example: '???, I like ice cream.',
        difficult: 'A1',
      },
      {
        term: 'You',
        definition: 'Used to talk about the person or people being spoken to.',
        example: '??? are my friend.',
        difficult: 'A1',
      },
      {
        term: 'Answer',
        definition:
          'To say, write, or do something as a response to a question or situation.',
        example: 'Please ?????? the phone when it rings.',
        difficult: 'A2',
      },
      {
        term: 'Beautiful',
        definition: 'Very nice to look at; attractive.',
        example: 'The garden is ????????? in spring.',
        difficult: 'A2',
      },
      {
        term: 'Brother',
        definition:
          'A male sibling; a boy or man who has the same parents as you.',
        example: 'My ??????? is older than me.',
        difficult: 'A2',
      },
      {
        term: 'Choose',
        definition: 'To select something from a number of options.',
        example: 'I ?????? the blue shirt to wear today.',
        difficult: 'A2',
      },
      {
        term: 'Dance',
        definition: 'To move your body to music.',
        example: 'They like to ????? at parties.',
        difficult: 'A2',
      },
      {
        term: 'Early',
        definition: 'Before the usual or expected time.',
        example: 'She arrived ????? to the meeting.',
        difficult: 'A2',
      },
      {
        term: 'Friend',
        definition: 'A person you like and trust.',
        example: 'I am going to the movies with my ??????.',
        difficult: 'A2',
      },
      {
        term: 'Help',
        definition: 'To do something to make it easier for someone else.',
        example: 'Can you ???? me with my homework?',
        difficult: 'A2',
      },
      {
        term: 'Idea',
        definition: 'A thought or plan about what to do.',
        example: 'I have an ???? for our project.',
        difficult: 'A2',
      },
      {
        term: 'Jump',
        definition: 'To push yourself off the ground and into the air.',
        example: 'The children ???? high on the trampoline.',
        difficult: 'A2',
      },
      {
        term: 'Know',
        definition: 'To have information or understanding about something.',
        example: 'I ???? how to swim.',
        difficult: 'A2',
      },
      {
        term: 'Listen',
        definition: 'To pay attention to sounds or someone speaking.',
        example: 'Please ?????? carefully to the instructions.',
        difficult: 'A2',
      },
      {
        term: 'Mother',
        definition: 'A female parent.',
        example: 'My ?????? is very kind.',
        difficult: 'A2',
      },
      {
        term: 'Open',
        definition: 'To move something so it is no longer closed.',
        example: 'He ?????? the window to let in fresh air.',
        difficult: 'A2',
      },
      {
        term: 'Place',
        definition: 'A particular area or location.',
        example: 'This is a nice ????? to visit.',
        difficult: 'A2',
      },
      {
        term: 'Question',
        definition: 'A sentence or phrase used to ask for information.',
        example: 'I asked a ???????? during the class.',
        difficult: 'A2',
      },
      {
        term: 'Rain',
        definition: 'Water that falls from clouds in drops.',
        example: 'It is going to ???? this afternoon.',
        difficult: 'A2',
      },
      {
        term: 'School',
        definition: 'A place where children go to learn.',
        example: 'The children go to ?????? every day.',
        difficult: 'A2',
      },
      {
        term: 'Teacher',
        definition: 'A person who helps students learn.',
        example: 'My ??????? is very helpful.',
        difficult: 'A2',
      },
      {
        term: 'Write',
        definition: 'To form letters or words on paper or a screen.',
        example: 'I like to ????? stories.',
        difficult: 'A2',
      },
      {
        term: 'Approach',
        definition: 'A way of dealing with something or someone.',
        example: 'We need a new ????????? to solve this problem.',
        difficult: 'B2',
      },
      {
        term: 'Concern',
        definition: 'A feeling of worry about something important.',
        example: 'There is growing ????????? about climate change.',
        difficult: 'B2',
      },
      {
        term: 'Criticize',
        definition: 'To express disapproval of someone or something.',
        example: 'She was ????????? for her decision.',
        difficult: 'B2',
      },
      {
        term: 'Demand',
        definition: 'A strong request or need for something.',
        example: 'Workers ????????? higher salaries.',
        difficult: 'B2',
      },
      {
        term: 'Emphasize',
        definition: 'To give special importance to something.',
        example: 'The teacher ????????? the importance of homework.',
        difficult: 'B2',
      },
      {
        term: 'Figure out',
        definition: 'To understand or solve something.',
        example: 'I finally ??????? ??? how to use the software.',
        difficult: 'B2',
      },
      {
        term: 'Generate',
        definition: 'To produce or create something.',
        example: 'The wind turbines ????????? electricity.',
        difficult: 'B2',
      },
      {
        term: 'Host',
        definition: 'To organize an event or welcome guests.',
        example: 'They ?????? a party last weekend.',
        difficult: 'B2',
      },
      {
        term: 'Income',
        definition:
          'Money received, especially regularly, for work or investment.',
        example: 'Her ??????? has increased this year.',
        difficult: 'B2',
      },
      {
        term: 'Issue',
        definition: 'An important topic or problem for discussion.',
        example: 'They discussed several political ???????.',
        difficult: 'B2',
      },
      {
        term: 'Maintain',
        definition: 'To keep something in good condition.',
        example: "It's important to ????????? a healthy lifestyle.",
        difficult: 'B2',
      },
      {
        term: 'Notice',
        definition: 'To become aware of something.',
        example: 'Did you ?????? the change in his attitude?',
        difficult: 'B2',
      },
      {
        term: 'Outcome',
        definition: 'The final result of a process or event.',
        example: 'We are waiting for the ??????? of the meeting.',
        difficult: 'B2',
      },
      {
        term: 'Persuade',
        definition: 'To convince someone to do or believe something.',
        example: 'He ????????? me to join the team.',
        difficult: 'B2',
      },
      {
        term: 'Require',
        definition: 'To need something for a particular purpose.',
        example: 'The course ????????? a lot of reading.',
        difficult: 'B2',
      },
      {
        term: 'Risk',
        definition: 'The possibility of danger or loss.',
        example: 'He took a big ???? by investing all his money.',
        difficult: 'B2',
      },
      {
        term: 'Strength',
        definition: 'The quality of being strong in body or mind.',
        example: 'She showed great ????????? during the crisis.',
        difficult: 'B2',
      },
      {
        term: 'Threat',
        definition: 'A possible cause of harm or danger.',
        example: 'Pollution is a serious ??????? to the environment.',
        difficult: 'B2',
      },
      {
        term: 'Upset',
        definition: 'Unhappy or worried about something.',
        example: 'He was ?????? after hearing the news.',
        difficult: 'B2',
      },
      {
        term: 'Widespread',
        definition:
          'Existing or happening over a large area or among many people.',
        example: 'The disease is ?????????? in the region.',
        difficult: 'B2',
      },
      {
        term: 'Ability',
        definition: 'The skill or power to do something.',
        example: 'She has the ??????? to speak three languages.',
        difficult: 'B1',
      },
      {
        term: 'Advice',
        definition: 'A suggestion about what someone should do.',
        example: 'My teacher gave me good ???????.',
        difficult: 'B1',
      },
      {
        term: 'Agree',
        definition: 'To have the same opinion as someone else.',
        example: 'I ?????? with your idea.',
        difficult: 'B1',
      },
      {
        term: 'Believe',
        definition: 'To accept something as true or real.',
        example: 'I ??????? that we can succeed.',
        difficult: 'B1',
      },
      {
        term: 'Choose',
        definition: 'To decide what you want from a number of options.',
        example: 'She ?????? the red dress for the party.',
        difficult: 'B1',
      },
      {
        term: 'Different',
        definition: 'Not the same as another or each other.',
        example: 'We have ????????? opinions on this topic.',
        difficult: 'B1',
      },
      {
        term: 'Enjoy',
        definition: 'To like something or find pleasure in it.',
        example: 'I ????? listening to music.',
        difficult: 'B1',
      },
      {
        term: 'Experience',
        definition: 'The knowledge or skill gained from doing something.',
        example: 'She has a lot of ??????????? in teaching.',
        difficult: 'B1',
      },
      {
        term: 'Famous',
        definition: 'Known by many people.',
        example: 'He is a ?????? actor.',
        difficult: 'B1',
      },
      {
        term: 'Feel',
        definition: 'To experience an emotion or physical sensation.',
        example: 'I ???? happy today.',
        difficult: 'B1',
      },
      {
        term: 'Forget',
        definition: 'To not remember something.',
        example: 'Don’t ?????? your keys.',
        difficult: 'B1',
      },
      {
        term: 'Help',
        definition: 'To make it easier for someone to do something.',
        example: 'Can you ???? me with my homework?',
        difficult: 'B1',
      },
      {
        term: 'Important',
        definition: 'Of great significance or value.',
        example: 'This is an ????????? meeting.',
        difficult: 'B1',
      },
      {
        term: 'Job',
        definition: 'The work someone does to earn money.',
        example: 'He has a new ??? at the bank.',
        difficult: 'B1',
      },
      {
        term: 'Keep',
        definition: 'To continue having or holding something.',
        example: 'Please ???? your room clean.',
        difficult: 'B1',
      },
      {
        term: 'Listen',
        definition: 'To pay attention to sounds or speech.',
        example: '?????? carefully to the teacher.',
        difficult: 'B1',
      },
      {
        term: 'Money',
        definition: 'Coins or banknotes used to buy things.',
        example: 'I need ????? to buy a new phone.',
        difficult: 'B1',
      },
      {
        term: 'Offer',
        definition: 'To present something for someone to accept or reject.',
        example: 'They ?????? me a great deal.',
        difficult: 'B1',
      },
      {
        term: 'Plan',
        definition: 'A detailed proposal for doing or achieving something.',
        example: 'We have a ???? for the holiday.',
        difficult: 'B1',
      },
      {
        term: 'Remember',
        definition: 'To bring something back into your mind.',
        example: '???????? to call your mother.',
        difficult: 'B1',
      },
      {
        term: 'Albeit',
        definition: 'Although; even though.',
        example: 'He finally agreed, ?????? reluctantly.',
        difficult: 'C2',
      },
      {
        term: 'Convoluted',
        definition: 'Very complex and difficult to follow.',
        example: 'The plot of the movie was too ?????????? to understand.',
        difficult: 'C2',
      },
      {
        term: 'Deem',
        definition: 'To consider or judge something in a particular way.',
        example: 'The project was ?????? a success.',
        difficult: 'C2',
      },
      {
        term: 'Elicit',
        definition: 'To draw out a response or reaction.',
        example: 'The question ??????? a strong response from the audience.',
        difficult: 'C2',
      },
      {
        term: 'Exacerbate',
        definition: 'To make a problem or situation worse.',
        example: 'The new policy only ?????????? the issue.',
        difficult: 'C2',
      },
      {
        term: 'Facetious',
        definition:
          'Treating serious issues with deliberately inappropriate humor.',
        example: 'I was being ????????? when I said that.',
        difficult: 'C2',
      },
      {
        term: 'Harbinger',
        definition: 'A sign that something is going to happen.',
        example: 'Dark clouds are a ????????? of a storm.',
        difficult: 'C2',
      },
      {
        term: 'Impeccable',
        definition: 'Without flaws or errors.',
        example: 'She has ?????????? manners.',
        difficult: 'C2',
      },
      {
        term: 'Juxtapose',
        definition: 'To place things side by side to highlight differences.',
        example:
          'The exhibition ?????????? modern art with classical sculpture.',
        difficult: 'C2',
      },
      {
        term: 'Keen',
        definition: 'Having a sharp interest or enthusiasm.',
        example: 'He is ???? on photography.',
        difficult: 'C2',
      },
      {
        term: 'Lucrative',
        definition: 'Producing a lot of profit.',
        example: 'They found a ????????? business opportunity.',
        difficult: 'C2',
      },
      {
        term: 'Meticulous',
        definition: 'Showing great attention to detail; very careful.',
        example: 'She is ?????????? in her work.',
        difficult: 'C2',
      },
      {
        term: 'Nonchalant',
        definition: 'Feeling or appearing casually calm and relaxed.',
        example: 'He was surprisingly ?????????? about the accident.',
        difficult: 'C2',
      },
      {
        term: 'Overarching',
        definition: 'Comprehensive; all-encompassing.',
        example: 'The report outlines the ??????????? goals of the project.',
        difficult: 'C2',
      },
      {
        term: 'Perplex',
        definition: 'To confuse or puzzle someone.',
        example: 'Her strange behavior ????????? me.',
        difficult: 'C2',
      },
      {
        term: 'Quintessential',
        definition: 'The most perfect or typical example of something.',
        example: 'He is the ????????????? English gentleman.',
        difficult: 'C2',
      },
      {
        term: 'Reiterate',
        definition: 'To say something again for emphasis.',
        example: 'Let me ????????? that I do not support this idea.',
        difficult: 'C2',
      },
      {
        term: 'Scrutinize',
        definition: 'To examine something very carefully.',
        example: 'The documents were ?????????? by experts.',
        difficult: 'C2',
      },
      {
        term: 'Ubiquitous',
        definition: 'Present or found everywhere.',
        example: 'Smartphones are ?????????? in modern society.',
        difficult: 'C2',
      },
      {
        term: 'Viable',
        definition: 'Capable of working successfully.',
        example: 'We need a ?????? solution to the problem.',
        difficult: 'C2',
      },
      {
        term: 'Accumulate',
        definition: 'To gradually gather or collect something over time.',
        example: 'She ?????????? a lot of books during her studies.',
        difficult: 'C1',
      },
      {
        term: 'Bias',
        definition: 'An unfair preference for or against something or someone.',
        example: 'The article showed a clear ???? towards the government.',
        difficult: 'C1',
      },
      {
        term: 'Comprehensive',
        definition: 'Complete and including all or nearly all elements.',
        example: 'They gave a ????????????? review of the film.',
        difficult: 'C1',
      },
      {
        term: 'Convey',
        definition: 'To communicate or express an idea or feeling.',
        example: 'Her speech ??????? the importance of education.',
        difficult: 'C1',
      },
      {
        term: 'Deduce',
        definition: 'To reach a conclusion by reasoning from evidence.',
        example: 'From the clues, the detective ??????? who the thief was.',
        difficult: 'C1',
      },
      {
        term: 'Diverse',
        definition: 'Showing a great deal of variety; very different.',
        example: 'The city has a ??????? population.',
        difficult: 'C1',
      },
      {
        term: 'Elaborate',
        definition: 'To explain something in more detail.',
        example: 'Can you ????????? on your plan?',
        difficult: 'C1',
      },
      {
        term: 'Feasible',
        definition: 'Possible and practical to do easily or conveniently.',
        example: 'It is not ???????? to finish the project in one day.',
        difficult: 'C1',
      },
      {
        term: 'Genuine',
        definition: 'Real and sincere.',
        example: 'She showed ??????? interest in the topic.',
        difficult: 'C1',
      },
      {
        term: 'Highlight',
        definition: 'To emphasize or make something stand out.',
        example: 'The report ?????????? the main issues.',
        difficult: 'C1',
      },
      {
        term: 'Implement',
        definition: 'To put a plan or decision into effect.',
        example: 'The company will ????????? new policies next month.',
        difficult: 'C1',
      },
      {
        term: 'Inherent',
        definition: 'Existing as a natural or essential part of something.',
        example: 'There are risks ????????? in every job.',
        difficult: 'C1',
      },
      {
        term: 'Justify',
        definition: 'To show or prove that something is right or reasonable.',
        example: "He ????????? his absence with a doctor's note.",
        difficult: 'C1',
      },
      {
        term: 'Neglect',
        definition: 'To fail to give proper attention to something.',
        example: 'The garden was ????????? for months.',
        difficult: 'C1',
      },
      {
        term: 'Obvious',
        definition: 'Easy to see, understand, or recognize.',
        example: 'It was ??????? that she was tired.',
        difficult: 'C1',
      },
      {
        term: 'Perspective',
        definition: 'A particular way of viewing something.',
        example: 'Try to see the problem from a different ????????????.',
        difficult: 'C1',
      },
      {
        term: 'Proportion',
        definition: 'A part or share of a whole.',
        example: 'A large ?????????? of the students passed the exam.',
        difficult: 'C1',
      },
      {
        term: 'Significant',
        definition: 'Important and meaningful.',
        example: 'There was a ??????????? increase in sales last year.',
        difficult: 'C1',
      },
      {
        term: 'Suggest',
        definition: 'To mention or introduce an idea for consideration.',
        example: 'I ???????? we take a break.',
        difficult: 'C1',
      },
      {
        term: 'Transform',
        definition:
          'To change completely the appearance or character of something.',
        example: 'The city has ??????????? over the past decade.',
        difficult: 'C1',
      },
    ],
    skipDuplicates: true,
  });
}

async function main() {
  return insertWords();
}

main()
  .then(() => {
    return prisma.$disconnect();
  })
  .catch((e) => {
    prisma.$disconnect();
    process.exit(1);
  });
